import * as THREE from 'three';
import { soundEngine } from './audio.js';

// Reusable scratch vectors to eliminate runtime GC allocations
const _sideVec = new THREE.Vector3();
const _toOwner = new THREE.Vector3();
const _handPos = new THREE.Vector3();
const _targetPos = new THREE.Vector3();
const _toDisc = new THREE.Vector3();
const _targetForward = new THREE.Vector3();
const _upAxis = new THREE.Vector3(0, 1, 0);
const _deflectDir = new THREE.Vector3();

export class TronDisc {
    constructor(scene, owner, colorHex = 0x00f0ff, isSecondary = false) {
        this.scene = scene;
        this.owner = owner;
        this.colorHex = colorHex;
        this.isSecondary = isSecondary;

        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        this.spinRate = 45;
        this.isActive = false;
        this.isRecalling = false;
        this.bounces = 0;
        this.maxBounces = 4;
        this.curveFactor = 0; // -1 to 1 for curved throws
        this.baseSpeed = 26;
        this.currentSpeed = 26;
        this.damage = 25;
        this.radius = 0.38;
        this.maxTrailPoints = 20;
        this.trailPoints = [];
        for (let i = 0; i < this.maxTrailPoints; i++) {
            this.trailPoints.push(new THREE.Vector3());
        }
        this.trailCount = 0;
        this.flightTimer = 0;
        this.recallTimer = 0;

        this.buildMesh();
        this.buildTrail();
    }

    buildMesh() {
        this.group = new THREE.Group();

        // 1. Outer Sharp Glowing Blade Ring
        const outerRimGeo = new THREE.TorusGeometry(0.38, 0.038, 12, 24);
        const rimMat = new THREE.MeshBasicMaterial({
            color: this.colorHex
        });
        this.rimMesh = new THREE.Mesh(outerRimGeo, rimMat);
        this.rimMesh.rotation.x = Math.PI / 2;
        this.group.add(this.rimMesh);

        // 2. Inner Carbon Grip Ring (Optimized Phong)
        const innerGeo = new THREE.TorusGeometry(0.26, 0.045, 8, 20);
        const innerMat = new THREE.MeshPhongMaterial({
            color: 0x0a0c10,
            specular: 0x223344,
            shininess: 30
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        innerMesh.rotation.x = Math.PI / 2;
        this.group.add(innerMesh);

        // 3. Center Energy Core Ring
        const coreGeo = new THREE.RingGeometry(0.12, 0.22, 20);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.85
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        coreMesh.rotation.x = Math.PI / 2;
        this.group.add(coreMesh);

        // 4. Glowing Disc Point Light (tuned for performance)
        this.light = new THREE.PointLight(this.colorHex, 1.2, 5.0);
        this.group.add(this.light);

        this.group.visible = false;
        this.scene.add(this.group);
    }

    buildTrail() {
        // Glowing Neon Ribbon Trail following disc
        const maxPoints = 20;
        const trailGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(maxPoints * 3);
        const colors = new Float32Array(maxPoints * 3);

        const baseCol = new THREE.Color(this.colorHex);

        for (let i = 0; i < maxPoints; i++) {
            positions[i * 3] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;

            const alpha = 1.0 - (i / maxPoints);
            colors[i * 3] = baseCol.r * alpha;
            colors[i * 3 + 1] = baseCol.g * alpha;
            colors[i * 3 + 2] = baseCol.b * alpha;
        }

        trailGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        trailGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const trailMat = new THREE.LineBasicMaterial({
            vertexColors: true,
            linewidth: 3,
            transparent: true,
            opacity: 0.9
        });

        this.trailLine = new THREE.Line(trailGeo, trailMat);
        this.trailLine.frustumCulled = false;
        this.trailLine.visible = false;
        this.scene.add(this.trailLine);
    }

    launch(startPos, direction, curve = 0, speedMultiplier = 1.0) {
        this.position.copy(startPos);
        this.position.y = 1.25; // chest height

        this.currentSpeed = this.baseSpeed * speedMultiplier;
        this.velocity.copy(direction).normalize().multiplyScalar(this.currentSpeed);
        this.curveFactor = curve;

        this.bounces = 0;
        this.flightTimer = 0;
        this.recallTimer = 0;
        this.isActive = true;
        this.isRecalling = false;
        this.owner.hasDisc = false;
        this.owner.discsInFlight = 1;

        this.group.visible = true;
        this.trailLine.visible = true;
        for (let i = 0; i < this.maxTrailPoints; i++) {
            this.trailPoints[i].copy(this.position);
        }
        this.trailCount = 1;

        soundEngine.playDiscThrow(this.owner.isAI === false);

        // Trigger native vibration on player throw
        if (!this.owner.isAI && window.AndroidBridge && window.AndroidBridge.vibrate) {
            window.AndroidBridge.vibrate(35);
        }
    }

    recall() {
        if (!this.isActive || this.isRecalling) return;
        this.isRecalling = true;
        this.recallTimer = 0;
        soundEngine.playRecall();
    }

    catchByOwner() {
        this.isActive = false;
        this.isRecalling = false;
        this.flightTimer = 0;
        this.recallTimer = 0;
        this.group.visible = false;
        this.trailLine.visible = false;
        this.trailCount = 0;
        this.owner.hasDisc = true;
        this.owner.discsInFlight = 0;
        soundEngine.playCatch();

        if (!this.owner.isAI && window.AndroidBridge && window.AndroidBridge.vibrate) {
            window.AndroidBridge.vibrate(25);
        }
    }

    update(dt, arenaWalls, arenaObstacles, otherCombatant) {
        if (!this.isActive) return;

        this.flightTimer += dt;

        // Auto-recall if in flight for > 4.5 seconds
        if (!this.isRecalling && this.flightTimer > 4.5) {
            this.recall();
        }

        // 1. Spin disc mesh
        this.rimMesh.rotation.z += this.spinRate * dt;

        // 2. Trajectory Curvature (Magnus Effect curve throw) - Zero allocation
        if (!this.isRecalling && Math.abs(this.curveFactor) > 0.05) {
            _sideVec.set(-this.velocity.z, 0, this.velocity.x).normalize();
            this.velocity.addScaledVector(_sideVec, this.curveFactor * 22 * dt);
            this.velocity.normalize().multiplyScalar(this.currentSpeed);
        }

        // 3. Recall steering towards owner - Zero allocation
        if (this.isRecalling) {
            this.recallTimer += dt;
            _handPos.copy(this.owner.position);
            _handPos.y = 1.3;
            _toOwner.subVectors(_handPos, this.position);
            const distToOwner = _toOwner.length();

            // Catch disc if arrived at owner or if recall has exceeded 1.6s
            if (distToOwner < 1.9 || this.recallTimer > 1.6) {
                this.catchByOwner();
                return;
            }

            // Direct snap velocity to prevent circular orbiting
            _toOwner.normalize();
            const snapSpeed = Math.max(this.currentSpeed * 1.6, 36.0);
            this.velocity.copy(_toOwner).multiplyScalar(snapSpeed);
        }

        // 4. Update Position
        this.position.addScaledVector(this.velocity, dt);
        this.group.position.copy(this.position);

        // 5. Update Trail - In-place shift without allocating arrays or vectors
        for (let i = Math.min(this.trailCount, this.maxTrailPoints - 1); i > 0; i--) {
            this.trailPoints[i].copy(this.trailPoints[i - 1]);
        }
        this.trailPoints[0].copy(this.position);
        if (this.trailCount < this.maxTrailPoints) this.trailCount++;

        const posAttr = this.trailLine.geometry.attributes.position;
        for (let i = 0; i < this.trailCount; i++) {
            const pt = this.trailPoints[i];
            posAttr.setXYZ(i, pt.x, pt.y, pt.z);
        }
        posAttr.needsUpdate = true;

        // 6. Arena Perimeter Wall Collisions
        if (!this.isRecalling && arenaWalls) {
            this.checkArenaCollisions(arenaWalls);
        }

        // 7. Obstacle & Rebound Pylon Collisions
        if (!this.isRecalling && arenaObstacles) {
            for (const obs of arenaObstacles) {
                this.checkObstacleCollision(obs);
            }
        }

        // 8. Combatant Collision (Hit or Shield Deflection)
        if (otherCombatant && otherCombatant.isAlive) {
            this.checkCombatantCollision(otherCombatant);
        }

        // Auto-recall after max bounces
        if (this.bounces >= this.maxBounces && !this.isRecalling) {
            this.recall();
        }
    }

    checkArenaCollisions(arena) {
        const shape = arena.shape || 'circle';
        const radius = arena.radius || 18;

        if (shape === 'circle') {
            const distFromCenter = Math.sqrt(this.position.x * this.position.x + this.position.z * this.position.z);
            if (distFromCenter + this.radius >= radius) {
                // Radial normal pointing inward
                const normal = new THREE.Vector3(-this.position.x, 0, -this.position.z).normalize();
                this.bounce(normal);
                // Clamp inside
                const clamped = normal.clone().multiplyScalar(-radius + this.radius + 0.05);
                this.position.x = clamped.x;
                this.position.z = clamped.z;
            }
        } else if (shape === 'hexagon' || shape === 'octagon' || shape === 'square') {
            // Check polygon edges
            const segments = arena.perimeterSegments || [];
            for (const seg of segments) {
                const dist = this.distToSegment(this.position, seg.p1, seg.p2);
                if (dist <= this.radius) {
                    this.bounce(seg.normal);
                    this.position.addScaledVector(seg.normal, this.radius - dist + 0.05);
                    break;
                }
            }
        }
    }

    checkObstacleCollision(obs) {
        if (!obs.active) return;
        const dx = this.position.x - obs.position.x;
        const dz = this.position.z - obs.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const minDist = obs.radius + this.radius;

        if (dist <= minDist) {
            const normal = new THREE.Vector3(dx, 0, dz).normalize();
            this.bounce(normal);
            this.position.x = obs.position.x + normal.x * (minDist + 0.05);
            this.position.z = obs.position.z + normal.z * (minDist + 0.05);

            if (obs.onHit) obs.onHit();
        }
    }

    bounce(normal) {
        // v' = v - 2(v . n)n
        const dot = this.velocity.dot(normal);
        if (dot < 0) {
            this.velocity.addScaledVector(normal, -2 * dot);
            this.bounces++;
            soundEngine.playWallBounce(1.0);

            // Native haptic on player bounce
            if (!this.owner.isAI && window.AndroidBridge && window.AndroidBridge.vibrate) {
                window.AndroidBridge.vibrate(20);
            }
        }
    }

    checkCombatantCollision(target) {
        if (!target || this.owner === target) return;
        _targetPos.copy(target.position);
        _targetPos.y = 1.2;
        const dist = this.position.distanceTo(_targetPos);

        if (dist < 1.1) {
            // Check if target is shielding and facing the disc
            _toDisc.subVectors(this.position, target.position).normalize();
            _targetForward.set(0, 0, 1).applyAxisAngle(_upAxis, target.rotationY || 0);
            const dot = _targetForward.dot(_toDisc);

            if (target.isShielding && dot > 0.3) {
                // PERFECT SHIELD DEFLECTION!
                soundEngine.playDeflect();

                if (window.AndroidBridge && window.AndroidBridge.vibrateClash) {
                    window.AndroidBridge.vibrateClash();
                }

                // Deflect disc directly back toward thrower with speed boost!
                this.currentSpeed *= 1.35;
                _deflectDir.copy(_targetForward).addScaledVector(_sideVec.set((Math.random() - 0.5) * 0.3, 0, 0), 1).normalize();
                this.velocity.copy(_deflectDir).multiplyScalar(this.currentSpeed);
                this.bounces = 0;

                // Nudge out of deflection zone to avoid re-triggering
                this.position.addScaledVector(_deflectDir, 0.5);

                // Swap ownership so deflected disc damages the original thrower!
                const prevOwner = this.owner;
                this.owner = target;
                target.discsInFlight++;
                prevOwner.discsInFlight = Math.max(0, prevOwner.discsInFlight - 1);
            } else if (target.state !== 'dodge') {
                // Direct Hit!
                soundEngine.playHit();
                const attackerName = (this.owner && this.owner.name) ? this.owner.name : 'Grid Disc';
                target.takeDamage(this.damage, attackerName);

                if (window.AndroidBridge && window.AndroidBridge.vibrate) {
                    window.AndroidBridge.vibrate(80);
                }

                this.recall();
            }
        }
    }

    distToSegment(p, a, b) {
        const pa = new THREE.Vector3().subVectors(p, a);
        const ba = new THREE.Vector3().subVectors(b, a);
        pa.y = 0; ba.y = 0;
        const h = Math.max(0, Math.min(1, pa.dot(ba) / ba.lengthSq()));
        return pa.addScaledVector(ba, -h).length();
    }
}
