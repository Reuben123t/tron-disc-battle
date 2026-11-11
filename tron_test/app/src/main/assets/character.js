import * as THREE from 'three';

export const CHARACTER_SKINS = {
    sam: {
        id: 'sam',
        name: 'Sam Flynn',
        armorColor: 0x11161d,
        glowColor: 0x00f0ff,
        glowHex: '#00f0ff',
        visorColor: 0x00ffff,
        dualDisc: false,
        desc: 'Hero of the Grid. Agile single-disc precision combatant.'
    },
    rinzler: {
        id: 'rinzler',
        name: 'Rinzler',
        armorColor: 0x0a0a0c,
        glowColor: 0xff3800,
        glowHex: '#ff3800',
        visorColor: 0xff4500,
        dualDisc: true,
        desc: 'Lethal dual-disc enforcer. Relentless strikes & ricochets.'
    },
    quorra: {
        id: 'quorra',
        name: 'Quorra',
        armorColor: 0x1a2129,
        glowColor: 0xd8ffff,
        glowHex: '#d8ffff',
        visorColor: 0xffffff,
        dualDisc: false,
        desc: 'Miracle ISO fighter. High agility and rapid disc recall.'
    },
    clu: {
        id: 'clu',
        name: 'CLU 2.0',
        armorColor: 0x14120e,
        glowColor: 0xffb300,
        glowHex: '#ffb300',
        visorColor: 0xffcc00,
        dualDisc: false,
        desc: 'Master of the Grid. High-damage kinetic power throws.'
    },
    anon: {
        id: 'anon',
        name: 'Anon (Infiltrator)',
        armorColor: 0x0d1612,
        glowColor: 0x00ff77,
        glowHex: '#00ff77',
        visorColor: 0x33ff99,
        dualDisc: false,
        desc: 'System Security program. Rapid bank-shot calculations.'
    }
};

export class TronCharacter {
    constructor(scene, skinKey = 'sam', isAI = false) {
        this.scene = scene;
        this.isAI = isAI;
        this.skinKey = skinKey;
        this.skin = CHARACTER_SKINS[skinKey] || CHARACTER_SKINS.sam;

        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        this.rotationY = 0;
        this.targetRotationY = 0;

        // Combat Stats
        this.maxHealth = 100;
        this.health = 100;
        this.shieldEnergy = 100;
        this.maxShieldEnergy = 100;
        this.isShielding = false;
        this.shieldActiveTime = 0;
        this.isAlive = true;
        this.hasDisc = true;
        this.discsInFlight = 0;

        // Animation state
        this.state = 'idle'; // 'idle', 'run', 'throw', 'catch', 'deflect', 'dodge', 'hit', 'derez', 'victory'
        this.animTimer = 0;
        this.throwPhase = 0; // 0: windup, 1: release, 2: follow-through
        this.dodgeTimer = 0;
        this.dodgeDir = new THREE.Vector3();
        this.hitTimer = 0;
        this.derezTimer = 0;
        this.derezCubes = [];

        this.buildMesh();
    }

    buildMesh() {
        this.group = new THREE.Group();

        const armorMat = new THREE.MeshPhongMaterial({
            color: this.skin.armorColor,
            specular: 0x334455,
            shininess: 40
        });

        const glowMat = new THREE.MeshBasicMaterial({
            color: this.skin.glowColor
        });

        const visorMat = new THREE.MeshBasicMaterial({
            color: this.skin.visorColor
        });

        // 1. Root and Pelvis
        this.hips = new THREE.Group();
        this.group.add(this.hips);

        const pelvisGeo = new THREE.BoxGeometry(0.5, 0.35, 0.3);
        const pelvis = new THREE.Mesh(pelvisGeo, armorMat);
        pelvis.position.y = 1.05;
        this.hips.add(pelvis);

        // Pelvis glow band
        const pelvisGlowGeo = new THREE.BoxGeometry(0.52, 0.05, 0.32);
        const pelvisGlow = new THREE.Mesh(pelvisGlowGeo, glowMat);
        pelvisGlow.position.y = 1.05;
        this.hips.add(pelvisGlow);

        // 2. Torso & Chest
        this.spine = new THREE.Group();
        this.spine.position.y = 1.2;
        this.hips.add(this.spine);

        const chestGeo = new THREE.BoxGeometry(0.65, 0.6, 0.38);
        const chest = new THREE.Mesh(chestGeo, armorMat);
        chest.position.y = 0.3;
        this.spine.add(chest);

        // Glowing Tron Chest Circuitry Lines (Front & Back)
        const chestLineGeo = new THREE.BoxGeometry(0.12, 0.45, 0.4);
        const chestLine = new THREE.Mesh(chestLineGeo, glowMat);
        chestLine.position.set(0, 0.3, 0);
        this.spine.add(chestLine);

        const ribLinesGeo = new THREE.BoxGeometry(0.5, 0.04, 0.4);
        const ribLines1 = new THREE.Mesh(ribLinesGeo, glowMat);
        ribLines1.position.set(0, 0.4, 0);
        this.spine.add(ribLines1);

        const ribLines2 = new THREE.Mesh(ribLinesGeo, glowMat);
        ribLines2.position.set(0, 0.2, 0);
        this.spine.add(ribLines2);

        // Rear Identity Disc Dock Ring
        const dockGeo = new THREE.TorusGeometry(0.24, 0.025, 12, 24);
        this.discDock = new THREE.Mesh(dockGeo, glowMat);
        this.discDock.position.set(0, 0.35, -0.21);
        this.spine.add(this.discDock);

        // 3. Head & Helmet
        this.head = new THREE.Group();
        this.head.position.y = 0.7;
        this.spine.add(this.head);

        const helmetGeo = new THREE.BoxGeometry(0.36, 0.4, 0.38);
        const helmet = new THREE.Mesh(helmetGeo, armorMat);
        helmet.position.y = 0.15;
        this.head.add(helmet);

        // Visor slit
        const visorGeo = new THREE.BoxGeometry(0.32, 0.07, 0.06);
        const visor = new THREE.Mesh(visorGeo, visorMat);
        visor.position.set(0, 0.16, 0.18);
        this.head.add(visor);

        // 4. Arms & Hands
        // Left Arm
        this.leftShoulder = new THREE.Group();
        this.leftShoulder.position.set(0.42, 0.5, 0);
        this.spine.add(this.leftShoulder);

        const upperArmGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.35, 8);
        const leftUpper = new THREE.Mesh(upperArmGeo, armorMat);
        leftUpper.position.y = -0.18;
        this.leftShoulder.add(leftUpper);

        this.leftElbow = new THREE.Group();
        this.leftElbow.position.y = -0.35;
        this.leftShoulder.add(this.leftElbow);

        const foreArmGeo = new THREE.CylinderGeometry(0.07, 0.065, 0.35, 8);
        const leftFore = new THREE.Mesh(foreArmGeo, armorMat);
        leftFore.position.y = -0.18;
        this.leftElbow.add(leftFore);

        const leftWristGlow = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 8), glowMat);
        leftWristGlow.position.y = -0.28;
        this.leftElbow.add(leftWristGlow);

        this.leftHand = new THREE.Group();
        this.leftHand.position.y = -0.36;
        this.leftElbow.add(this.leftHand);

        // Right Arm (Throwing Arm)
        this.rightShoulder = new THREE.Group();
        this.rightShoulder.position.set(-0.42, 0.5, 0);
        this.spine.add(this.rightShoulder);

        const rightUpper = new THREE.Mesh(upperArmGeo, armorMat);
        rightUpper.position.y = -0.18;
        this.rightShoulder.add(rightUpper);

        this.rightElbow = new THREE.Group();
        this.rightElbow.position.y = -0.35;
        this.rightShoulder.add(this.rightElbow);

        const rightFore = new THREE.Mesh(foreArmGeo, armorMat);
        rightFore.position.y = -0.18;
        this.rightElbow.add(rightFore);

        const rightWristGlow = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 8), glowMat);
        rightWristGlow.position.y = -0.28;
        this.rightElbow.add(rightWristGlow);

        this.rightHand = new THREE.Group();
        this.rightHand.position.y = -0.36;
        this.rightElbow.add(this.rightHand);

        // Handheld Identity Disc (visible when holding disc)
        const discModelGeo = new THREE.TorusGeometry(0.24, 0.035, 12, 24);
        this.handDisc = new THREE.Mesh(discModelGeo, glowMat);
        this.handDisc.rotation.x = Math.PI / 2;
        this.rightHand.add(this.handDisc);

        // 5. Legs & Boots
        // Left Leg
        this.leftHip = new THREE.Group();
        this.leftHip.position.set(0.18, 0.95, 0);
        this.hips.add(this.leftHip);

        const thighGeo = new THREE.CylinderGeometry(0.11, 0.09, 0.45, 8);
        const leftThigh = new THREE.Mesh(thighGeo, armorMat);
        leftThigh.position.y = -0.22;
        this.leftHip.add(leftThigh);

        this.leftKnee = new THREE.Group();
        this.leftKnee.position.y = -0.45;
        this.leftHip.add(this.leftKnee);

        const shinGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.45, 8);
        const leftShin = new THREE.Mesh(shinGeo, armorMat);
        leftShin.position.y = -0.22;
        this.leftKnee.add(leftShin);

        const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), armorMat);
        leftBoot.position.set(0, -0.46, 0.05);
        this.leftKnee.add(leftBoot);

        const leftSoleGlow = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.03, 0.29), glowMat);
        leftSoleGlow.position.set(0, -0.52, 0.05);
        this.leftKnee.add(leftSoleGlow);

        // Right Leg
        this.rightHip = new THREE.Group();
        this.rightHip.position.set(-0.18, 0.95, 0);
        this.hips.add(this.rightHip);

        const rightThigh = new THREE.Mesh(thighGeo, armorMat);
        rightThigh.position.y = -0.22;
        this.rightHip.add(rightThigh);

        this.rightKnee = new THREE.Group();
        this.rightKnee.position.y = -0.45;
        this.rightHip.add(this.rightKnee);

        const rightShin = new THREE.Mesh(shinGeo, armorMat);
        rightShin.position.y = -0.22;
        this.rightKnee.add(rightShin);

        const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), armorMat);
        rightBoot.position.set(0, -0.46, 0.05);
        this.rightKnee.add(rightBoot);

        const rightSoleGlow = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.03, 0.29), glowMat);
        rightSoleGlow.position.set(0, -0.52, 0.05);
        this.rightKnee.add(rightSoleGlow);

        // 6. Glowing Energy Deflection Shield (Hexagonal Forcefield)
        const shieldGeo = new THREE.CircleGeometry(1.3, 6);
        const shieldMat = new THREE.MeshBasicMaterial({
            color: this.skin.glowColor,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            wireframe: false
        });
        this.shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
        this.shieldMesh.position.set(0, 1.3, 0.85);

        // Shield border wireframe
        const wireGeo = new THREE.RingGeometry(1.22, 1.32, 6);
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        this.shieldWire = new THREE.Mesh(wireGeo, wireMat);
        this.shieldWire.position.set(0, 1.3, 0.86);

        this.group.add(this.shieldMesh);
        this.group.add(this.shieldWire);

        this.scene.add(this.group);
    }

    setSkin(skinKey) {
        this.skinKey = skinKey;
        this.skin = CHARACTER_SKINS[skinKey] || CHARACTER_SKINS.sam;
        if (this.group) {
            this.scene.remove(this.group);
        }
        this.buildMesh();
    }

    triggerThrow() {
        if (!this.hasDisc || this.state === 'throw' || this.state === 'dodge' || !this.isAlive) return false;
        this.state = 'throw';
        this.animTimer = 0;
        this.throwPhase = 0;
        return true;
    }

    triggerDodge(directionVector) {
        if (this.state === 'dodge' || !this.isAlive) return false;
        this.state = 'dodge';
        this.animTimer = 0;
        this.dodgeTimer = 0;
        this.dodgeDir.copy(directionVector).normalize();
        if (this.dodgeDir.lengthSq() < 0.1) {
            this.dodgeDir.set(0, 0, 1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotationY);
        }
        return true;
    }

    takeDamage(amount) {
        if (!this.isAlive) return;
        this.health = Math.max(0, this.health - amount);
        this.state = 'hit';
        this.hitTimer = 0.35;

        if (this.health <= 0) {
            this.derez();
        }
    }

    derez() {
        this.isAlive = false;
        this.state = 'derez';
        this.derezTimer = 2.0;

        // Hide main body
        this.hips.visible = false;
        if (this.shieldMesh) this.shieldMesh.visible = false;
        if (this.shieldWire) this.shieldWire.visible = false;

        // Spawn explosive glowing voxel cubes
        const cubeCount = 140;
        const cubeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
        const cubeMat = new THREE.MeshBasicMaterial({
            color: this.skin.glowColor,
            transparent: true,
            opacity: 1.0
        });

        for (let i = 0; i < cubeCount; i++) {
            const cube = new THREE.Mesh(cubeGeo, cubeMat.clone());
            cube.position.copy(this.position);
            cube.position.y += 0.3 + Math.random() * 1.5;
            cube.position.x += (Math.random() - 0.5) * 0.7;
            cube.position.z += (Math.random() - 0.5) * 0.7;

            const vel = new THREE.Vector3(
                (Math.random() - 0.5) * 8,
                Math.random() * 6 + 2,
                (Math.random() - 0.5) * 8
            );
            const rotSpeed = new THREE.Vector3(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12
            );

            this.scene.add(cube);
            this.derezCubes.push({ mesh: cube, vel, rotSpeed });
        }
    }

    reset(x, z, rotY) {
        this.position.set(x, 0, z);
        this.group.position.copy(this.position);
        this.rotationY = rotY;
        this.targetRotationY = rotY;
        this.group.rotation.y = rotY;
        this.health = this.maxHealth;
        this.shieldEnergy = this.maxShieldEnergy;
        this.isAlive = true;
        this.hasDisc = true;
        this.isShielding = false;
        this.state = 'idle';
        this.animTimer = 0;
        this.hips.visible = true;

        // Clear derez cubes
        for (const c of this.derezCubes) {
            this.scene.remove(c.mesh);
        }
        this.derezCubes = [];
    }

    update(dt, moveInput, targetLookAtPoint) {
        if (!this.group) return;

        // Handle Derez animation
        if (!this.isAlive && this.state === 'derez') {
            for (const c of this.derezCubes) {
                c.vel.y -= 18 * dt; // gravity
                c.mesh.position.addScaledVector(c.vel, dt);
                c.mesh.rotation.x += c.rotSpeed.x * dt;
                c.mesh.rotation.y += c.rotSpeed.y * dt;

                // Bounce on grid floor
                if (c.mesh.position.y < 0.06) {
                    c.mesh.position.y = 0.06;
                    c.vel.y *= -0.45;
                    c.vel.x *= 0.85;
                    c.vel.z *= 0.85;
                }

                c.mesh.material.opacity = Math.max(0, c.mesh.material.opacity - dt * 0.55);
            }
            return;
        }

        this.animTimer += dt;

        // Shield Energy Regen & Consumption
        if (this.isShielding && this.hasDisc) {
            this.shieldEnergy = Math.max(0, this.shieldEnergy - dt * 25);
            if (this.shieldEnergy <= 0) {
                this.isShielding = false;
            }
        } else {
            this.shieldEnergy = Math.min(this.maxShieldEnergy, this.shieldEnergy + dt * 18);
        }

        // Shield Mesh Opacity & Pulse
        const targetShieldOpacity = this.isShielding ? 0.45 + Math.sin(this.animTimer * 14) * 0.1 : 0;
        this.shieldMesh.material.opacity = THREE.MathUtils.lerp(this.shieldMesh.material.opacity, targetShieldOpacity, dt * 15);
        this.shieldWire.material.opacity = THREE.MathUtils.lerp(this.shieldWire.material.opacity, this.isShielding ? 0.9 : 0, dt * 15);

        // Disc visibility in hand vs docked
        this.handDisc.visible = this.hasDisc && this.state !== 'derez';
        this.discDock.visible = !this.hasDisc && this.state !== 'derez';

        // Hit Stagger State
        if (this.state === 'hit') {
            this.hitTimer -= dt;
            this.spine.rotation.x = -0.45;
            this.head.rotation.x = -0.3;
            if (this.hitTimer <= 0) {
                this.state = 'idle';
            }
            this.group.position.copy(this.position);
            return;
        }

        // Dodge Roll State
        if (this.state === 'dodge') {
            this.dodgeTimer += dt;
            const dodgeSpeed = 16.0 * (1 - this.dodgeTimer / 0.45);
            this.position.addScaledVector(this.dodgeDir, dodgeSpeed * dt);
            this.hips.position.y = 0.35 + Math.sin((this.dodgeTimer / 0.45) * Math.PI) * 0.4;
            this.spine.rotation.x = (this.dodgeTimer / 0.45) * Math.PI * 2;

            if (this.dodgeTimer >= 0.45) {
                this.state = 'idle';
                this.hips.position.y = 0;
                this.spine.rotation.x = 0;
            }
            this.group.position.copy(this.position);
            return;
        }

        // Target orientation (Face towards aiming reticle or enemy)
        if (targetLookAtPoint) {
            const dx = targetLookAtPoint.x - this.position.x;
            const dz = targetLookAtPoint.z - this.position.z;
            this.targetRotationY = Math.atan2(dx, dz);
        } else if (moveInput && (moveInput.x !== 0 || moveInput.z !== 0)) {
            this.targetRotationY = Math.atan2(moveInput.x, moveInput.z);
        }

        // Smooth rotation slerp
        let diff = this.targetRotationY - this.rotationY;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.rotationY += diff * Math.min(1, dt * 14);
        this.group.rotation.y = this.rotationY;

        // Movement & Running Animation
        const isMoving = moveInput && (Math.abs(moveInput.x) > 0.05 || Math.abs(moveInput.z) > 0.05);

        if (this.state !== 'throw' && this.state !== 'victory') {
            if (this.isShielding) {
                this.state = 'deflect';
            } else if (isMoving) {
                this.state = 'run';
            } else {
                this.state = 'idle';
            }
        }

        if (this.state === 'run') {
            const runSpeed = 7.5;
            this.position.x += moveInput.x * runSpeed * dt;
            this.position.z += moveInput.z * runSpeed * dt;

            // Running kinematic leg swing
            const runFreq = 11;
            const legAngle = Math.sin(this.animTimer * runFreq) * 0.7;
            this.leftHip.rotation.x = legAngle;
            this.rightHip.rotation.x = -legAngle;

            this.leftKnee.rotation.x = Math.max(0, -legAngle * 0.9);
            this.rightKnee.rotation.x = Math.max(0, legAngle * 0.9);

            // Counter arm swing
            if (!this.isShielding && this.state !== 'throw') {
                this.leftShoulder.rotation.x = -legAngle * 0.65;
                this.rightShoulder.rotation.x = legAngle * 0.65;
            }

            // Torso run bounce and lean
            this.hips.position.y = Math.abs(Math.sin(this.animTimer * runFreq)) * 0.08;
            this.spine.rotation.x = 0.15; // forward lean
        } else if (this.state === 'idle') {
            // Idle breathing and athletic stance
            const breath = Math.sin(this.animTimer * 2.5) * 0.03;
            this.hips.position.y = breath;
            this.spine.rotation.x = breath * 0.5;

            this.leftHip.rotation.x = THREE.MathUtils.lerp(this.leftHip.rotation.x, 0.1, dt * 10);
            this.rightHip.rotation.x = THREE.MathUtils.lerp(this.rightHip.rotation.x, -0.1, dt * 10);
            this.leftKnee.rotation.x = THREE.MathUtils.lerp(this.leftKnee.rotation.x, 0.15, dt * 10);
            this.rightKnee.rotation.x = THREE.MathUtils.lerp(this.rightKnee.rotation.x, 0.15, dt * 10);

            if (!this.isShielding) {
                this.leftShoulder.rotation.x = THREE.MathUtils.lerp(this.leftShoulder.rotation.x, 0.35, dt * 10);
                this.leftElbow.rotation.x = THREE.MathUtils.lerp(this.leftElbow.rotation.x, -0.85, dt * 10);
                this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, -0.2, dt * 10);
                this.rightElbow.rotation.x = THREE.MathUtils.lerp(this.rightElbow.rotation.x, -0.6, dt * 10);
            }
        }

        // Deflect / Shield Animation Stance
        if (this.state === 'deflect') {
            this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, 1.4, dt * 20);
            this.rightShoulder.rotation.z = THREE.MathUtils.lerp(this.rightShoulder.rotation.z, -0.4, dt * 20);
            this.rightElbow.rotation.x = THREE.MathUtils.lerp(this.rightElbow.rotation.x, -1.2, dt * 20);

            this.leftShoulder.rotation.x = THREE.MathUtils.lerp(this.leftShoulder.rotation.x, 1.4, dt * 20);
            this.leftShoulder.rotation.z = THREE.MathUtils.lerp(this.leftShoulder.rotation.z, 0.4, dt * 20);
            this.leftElbow.rotation.x = THREE.MathUtils.lerp(this.leftElbow.rotation.x, -1.2, dt * 20);
        }

        // Throw Animation Phases (Windup -> Whip Forward -> Follow through)
        if (this.state === 'throw') {
            const throwDuration = 0.32;
            const progress = this.animTimer / throwDuration;

            if (progress < 0.4) {
                // Phase 1: Windup
                this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, -1.6, dt * 30);
                this.rightShoulder.rotation.y = THREE.MathUtils.lerp(this.rightShoulder.rotation.y, 0.9, dt * 30);
                this.spine.rotation.y = THREE.MathUtils.lerp(this.spine.rotation.y, 0.6, dt * 25);
            } else if (progress < 0.8) {
                // Phase 2: Snap release forward
                this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, 1.5, dt * 40);
                this.rightShoulder.rotation.y = THREE.MathUtils.lerp(this.rightShoulder.rotation.y, -0.4, dt * 40);
                this.rightElbow.rotation.x = THREE.MathUtils.lerp(this.rightElbow.rotation.x, 0.1, dt * 40);
                this.spine.rotation.y = THREE.MathUtils.lerp(this.spine.rotation.y, -0.5, dt * 35);
            } else {
                // Phase 3: Follow-through
                if (progress >= 1.0) {
                    this.state = 'idle';
                    this.spine.rotation.y = 0;
                }
            }
        }

        // Victory Taunt Pose
        if (this.state === 'victory') {
            this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, Math.PI, dt * 10);
            this.rightElbow.rotation.x = 0;
            this.head.rotation.x = -0.3;
        }

        this.group.position.copy(this.position);
    }
}
