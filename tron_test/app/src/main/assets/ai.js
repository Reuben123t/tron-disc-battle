import * as THREE from 'three';

export const AI_DIFFICULTIES = {
    easy: {
        id: 'easy',
        name: 'Initiate',
        reactionTime: 0.55,
        throwCooldown: 2.6,
        aimAccuracy: 0.78,
        deflectChance: 0.35,
        dodgeChance: 0.4,
        allowBankShots: false,
        allowCurve: false,
        desc: 'Slower reflex sentinels. Ideal for basic grid training.'
    },
    medium: {
        id: 'medium',
        name: 'Program',
        reactionTime: 0.35,
        throwCooldown: 1.9,
        aimAccuracy: 0.90,
        deflectChance: 0.65,
        dodgeChance: 0.65,
        allowBankShots: true,
        allowCurve: false,
        desc: 'Disciplined combat programs with predictive aiming and wall rebounds.'
    },
    hard: {
        id: 'hard',
        name: 'ISO Combatant',
        reactionTime: 0.20,
        throwCooldown: 1.35,
        aimAccuracy: 0.96,
        deflectChance: 0.82,
        dodgeChance: 0.85,
        allowBankShots: true,
        allowCurve: true,
        desc: 'Advanced grid warriors using multi-bounce bank shots and rapid recalls.'
    },
    master: {
        id: 'master',
        name: 'Rinzler (Master)',
        reactionTime: 0.08,
        throwCooldown: 0.95,
        aimAccuracy: 0.99,
        deflectChance: 0.95,
        dodgeChance: 0.92,
        allowBankShots: true,
        allowCurve: true,
        desc: 'Relentless champion. Frame-perfect deflections and dual-disc onslaught.'
    }
};

export class TronAI {
    constructor(aiCharacter, playerCharacter, disc, secondaryDisc, arena, difficultyKey = 'medium', hostileDiscs = []) {
        this.ai = aiCharacter;
        this.player = playerCharacter;
        this.disc = disc;
        this.secondaryDisc = secondaryDisc;
        this.arena = arena;
        this.hostileDiscs = hostileDiscs;
        this.setDifficulty(difficultyKey);

        this.throwTimer = 1.0;
        this.moveTimer = 0;
        this.currentMoveDir = new THREE.Vector3();
        this.strafeDir = 1; // 1 or -1
    }

    setDifficulty(diffKey) {
        this.diffKey = diffKey;
        this.diff = AI_DIFFICULTIES[diffKey] || AI_DIFFICULTIES.medium;
    }

    update(dt) {
        if (!this.ai.isAlive || !this.player.isAlive) {
            this.ai.update(dt, { x: 0, z: 0 }, this.player.position);
            return;
        }

        this.throwTimer -= dt;
        this.moveTimer -= dt;

        // 1. Threat Detection (Incoming hostile disc)
        let primaryThreat = null;
        let threatDist = 999;

        // Check if player's disc or any hostile disc is active and heading towards AI
        const candidateDiscs = [];
        if (Array.isArray(this.hostileDiscs)) {
            candidateDiscs.push(...this.hostileDiscs);
        }
        if (this.player && this.player.disc && !candidateDiscs.includes(this.player.disc)) {
            candidateDiscs.push(this.player.disc);
        }
        if (this.disc && this.disc.isActive && this.disc.owner !== this.ai && !candidateDiscs.includes(this.disc)) {
            candidateDiscs.push(this.disc);
        }

        for (const d of candidateDiscs) {
            if (d && d.isActive && d.owner !== this.ai) {
                const toAI = new THREE.Vector3().subVectors(this.ai.position, d.position);
                const dist = toAI.length();
                if (dist > 0.05) {
                    const dot = d.velocity.clone().normalize().dot(toAI.clone().normalize());
                    // If disc is flying directly towards AI
                    if (dot > 0.45 && dist < 16 && dist < threatDist) {
                        primaryThreat = d;
                        threatDist = dist;
                    }
                }
            }
        }

        // 2. Defensive Reactions (Deflect vs Dodge)
        if (primaryThreat && threatDist < 10) {
            const timeToImpact = threatDist / primaryThreat.currentSpeed;

            if (timeToImpact <= this.diff.reactionTime + 0.25) {
                // Decide whether to deflect or dodge
                const shouldDeflect = Math.random() < this.diff.deflectChance && this.ai.hasDisc && this.ai.shieldEnergy > 20;

                if (shouldDeflect) {
                    this.ai.isShielding = true;
                } else if (Math.random() < this.diff.dodgeChance && this.ai.state !== 'dodge') {
                    // Dodge sideways perpendicular to incoming disc
                    const side = new THREE.Vector3(-primaryThreat.velocity.z, 0, primaryThreat.velocity.x).normalize();
                    const dodgeVec = side.multiplyScalar(this.strafeDir);
                    this.ai.triggerDodge(dodgeVec);
                }
            }
        } else {
            // Drop shield when no imminent threat
            if (this.ai.isShielding && threatDist > 12) {
                this.ai.isShielding = false;
            }
        }

        // 3. Movement & Tactical Positioning
        if (this.moveTimer <= 0) {
            this.moveTimer = 0.8 + Math.random() * 0.8;
            if (Math.random() < 0.3) this.strafeDir *= -1;
        }

        // Maintain distance of ~10-14 units from player
        const toPlayer = new THREE.Vector3().subVectors(this.player.position, this.ai.position);
        const distToPlayer = toPlayer.length();
        const moveVec = new THREE.Vector3();

        if (distToPlayer > 15) {
            // Move closer
            moveVec.addScaledVector(toPlayer.clone().normalize(), 0.7);
        } else if (distToPlayer < 9) {
            // Back away
            moveVec.addScaledVector(toPlayer.clone().normalize(), -0.8);
        }

        // Lateral strafe to stay elusive
        const strafeVec = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(this.strafeDir * 0.75);
        moveVec.add(strafeVec);

        // Keep inside arena perimeter
        const maxR = (this.arena.radius || 17) - 2.5;
        const curR = Math.sqrt(this.ai.position.x * this.ai.position.x + this.ai.position.z * this.ai.position.z);
        if (curR > maxR) {
            const pushInward = new THREE.Vector3(-this.ai.position.x, 0, -this.ai.position.z).normalize().multiplyScalar(1.2);
            moveVec.add(pushInward);
        }

        moveVec.normalize();

        // 4. Offensive Disc Throw Logic
        if (this.throwTimer <= 0 && this.ai.hasDisc && this.ai.state !== 'dodge' && !this.ai.isShielding) {
            this.executeThrow();
        }

        // 5. Smart Disc Recall
        if (this.disc.isActive && this.disc.owner === this.ai && !this.disc.isRecalling) {
            // If disc is flying away from player or bounced 2+ times, recall it!
            const discToPlayer = new THREE.Vector3().subVectors(this.player.position, this.disc.position);
            const headingAway = this.disc.velocity.dot(discToPlayer) < 0;

            if (this.disc.bounces >= 2 || (headingAway && this.disc.bounces >= 1)) {
                this.disc.recall();
            }
        }

        // Target aiming point (Player's predicted position)
        const aimTarget = this.calculateAimTarget();

        this.ai.update(dt, moveVec, aimTarget);
    }

    calculateAimTarget() {
        // Lead the player based on their movement
        const target = this.player.position.clone();
        if (this.diff.aimAccuracy > 0.8) {
            const discSpeed = 26;
            const dist = this.ai.position.distanceTo(target);
            const leadTime = dist / discSpeed;
            target.addScaledVector(this.player.velocity, leadTime * this.diff.aimAccuracy);
        }

        // Add slight inaccuracy for lower difficulties
        const error = (1 - this.diff.aimAccuracy) * 4.0;
        target.x += (Math.random() - 0.5) * error;
        target.z += (Math.random() - 0.5) * error;

        return target;
    }

    executeThrow() {
        const aimTarget = this.calculateAimTarget();
        const throwDir = new THREE.Vector3().subVectors(aimTarget, this.ai.position);
        throwDir.y = 0;
        throwDir.normalize();

        let curve = 0;
        if (this.diff.allowCurve && Math.random() < 0.45) {
            curve = (Math.random() > 0.5 ? 1 : -1) * 0.7;
        }

        // Bank Shot calculation if enabled
        if (this.diff.allowBankShots && Math.random() < 0.4) {
            // Aim towards a side wall to rebound into player
            const wallAngle = (Math.random() > 0.5 ? 1 : -1) * 0.85;
            throwDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), wallAngle);
        }

        if (this.ai.triggerThrow()) {
            setTimeout(() => {
                if (this.ai.isAlive) {
                    this.disc.launch(this.ai.position, throwDir, curve, 1.0);
                    if (this.onThrow) {
                        this.onThrow(this.ai.position, throwDir, curve, 1.0);
                    }
                }
            }, 120);

            this.throwTimer = this.diff.throwCooldown + Math.random() * 0.4;
        }
    }
}
