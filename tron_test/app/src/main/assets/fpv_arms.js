import * as THREE from 'three';

// 3D First-Person Arms & Hands attached directly to Camera
export class TronFPVArms {
    constructor(camera, skinColorHex = 0x00f0ff) {
        this.camera = camera;
        this.skinColorHex = skinColorHex;

        this.group = new THREE.Group();
        this.camera.add(this.group);

        this.animTimer = 0;
        this.state = 'idle'; // 'idle', 'run', 'throw', 'catch', 'shield', 'dash'
        this.throwTimer = 0;
        this.catchTimer = 0;
        this.hasDisc = true;

        this.buildMesh();
    }

    buildMesh() {
        const armorMat = new THREE.MeshPhongMaterial({
            color: 0x0c1018,
            specular: 0x334455,
            shininess: 40
        });

        const glowMat = new THREE.MeshBasicMaterial({
            color: this.skinColorHex
        });

        // 1. Right Arm (Throwing Arm & Disc)
        this.rightArm = new THREE.Group();
        this.rightArm.position.set(0.38, -0.32, -0.65);
        this.group.add(this.rightArm);

        // Forearm
        const forearmGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.42, 8);
        const forearm = new THREE.Mesh(forearmGeo, armorMat);
        forearm.rotation.x = Math.PI / 2.3;
        forearm.position.set(0, 0, 0.12);
        this.rightArm.add(forearm);

        // Gauntlet Neon Circuit Stripe
        const stripeGeo = new THREE.BoxGeometry(0.02, 0.02, 0.38);
        const stripe = new THREE.Mesh(stripeGeo, glowMat);
        stripe.rotation.x = Math.PI / 2.3;
        stripe.position.set(0, 0.05, 0.12);
        this.rightArm.add(stripe);

        // Hand
        const handGeo = new THREE.BoxGeometry(0.09, 0.06, 0.12);
        const hand = new THREE.Mesh(handGeo, armorMat);
        hand.position.set(0, 0.02, 0.32);
        this.rightArm.add(hand);

        // FPV Identity Disc
        const discGeo = new THREE.TorusGeometry(0.18, 0.022, 12, 24);
        this.discMesh = new THREE.Mesh(discGeo, glowMat);
        this.discMesh.rotation.x = Math.PI / 2;
        this.discMesh.position.set(0, 0.04, 0.38);
        this.rightArm.add(this.discMesh);

        // 2. Left Arm (Shield & Recall Arm)
        this.leftArm = new THREE.Group();
        this.leftArm.position.set(-0.38, -0.34, -0.65);
        this.group.add(this.leftArm);

        const leftForearm = new THREE.Mesh(forearmGeo, armorMat);
        leftForearm.rotation.x = Math.PI / 2.3;
        leftForearm.position.set(0, 0, 0.12);
        this.leftArm.add(leftForearm);

        const leftStripe = new THREE.Mesh(stripeGeo, glowMat);
        leftStripe.rotation.x = Math.PI / 2.3;
        leftStripe.position.set(0, 0.05, 0.12);
        this.leftArm.add(leftStripe);

        const leftHand = new THREE.Mesh(handGeo, armorMat);
        leftHand.position.set(0, 0.02, 0.32);
        this.leftArm.add(leftHand);

        // Holographic Hexagonal Shield Mesh in front of camera
        const shieldGeo = new THREE.CircleGeometry(0.85, 6);
        this.shieldMat = new THREE.MeshBasicMaterial({
            color: this.skinColorHex,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        this.shieldMesh = new THREE.Mesh(shieldGeo, this.shieldMat);
        this.shieldMesh.position.set(0, 0, -0.9);

        // Shield Wireframe Rim
        const rimGeo = new THREE.RingGeometry(0.82, 0.86, 6);
        this.shieldRimMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        this.shieldRim = new THREE.Mesh(rimGeo, this.shieldRimMat);
        this.shieldRim.position.set(0, 0, -0.89);

        this.group.add(this.shieldMesh);
        this.group.add(this.shieldRim);
    }

    setGlowColor(colorHex) {
        this.skinColorHex = colorHex;
        this.discMesh.material.color.setHex(colorHex);
        this.shieldMat.color.setHex(colorHex);
    }

    triggerThrow() {
        if (!this.hasDisc || this.state === 'throw') return false;
        this.state = 'throw';
        this.throwTimer = 0;
        return true;
    }

    triggerRecall() {
        this.state = 'catch';
        this.catchTimer = 0;
    }

    catchDisc() {
        this.hasDisc = true;
        this.state = 'idle';
        this.discMesh.visible = true;
    }

    update(dt, isMoving, isShielding) {
        this.animTimer += dt;

        // Disc visibility
        this.discMesh.visible = this.hasDisc && this.state !== 'throw';

        // Shield visibility & pulse
        const targetOpacity = isShielding ? 0.55 + Math.sin(this.animTimer * 16) * 0.1 : 0;
        this.shieldMat.opacity = THREE.MathUtils.lerp(this.shieldMat.opacity, targetOpacity, dt * 18);
        this.shieldRimMat.opacity = THREE.MathUtils.lerp(this.shieldRimMat.opacity, isShielding ? 0.95 : 0, dt * 18);

        // Head bobbing / Arm sway
        let bobX = 0;
        let bobY = 0;

        if (isMoving) {
            bobX = Math.sin(this.animTimer * 8.5) * 0.025;
            bobY = Math.abs(Math.cos(this.animTimer * 8.5)) * 0.035;
        } else {
            bobY = Math.sin(this.animTimer * 2.2) * 0.008;
        }

        // Throw Animation
        if (this.state === 'throw') {
            this.throwTimer += dt;
            const throwDuration = 0.28;
            const p = this.throwTimer / throwDuration;

            if (p < 0.35) {
                // Cock back
                this.rightArm.position.set(0.48, -0.22, -0.45);
                this.rightArm.rotation.set(-0.4, 0.3, 0.2);
            } else if (p < 0.8) {
                // Whip forward
                this.rightArm.position.set(0.18, -0.28, -0.85);
                this.rightArm.rotation.set(0.5, -0.4, -0.3);
                this.discMesh.visible = false;
            } else {
                if (p >= 1.0) {
                    this.state = 'idle';
                    this.hasDisc = false;
                }
            }
            return;
        }

        // Catch / Recall Animation
        if (this.state === 'catch') {
            this.catchTimer += dt;
            this.leftArm.position.set(-0.25, -0.18, -0.8);
            this.leftArm.rotation.set(0.3, 0.2, 0.1);
            if (this.catchTimer >= 0.4) {
                this.state = 'idle';
            }
            return;
        }

        // Shield Animation (Hold shield up in center)
        if (isShielding) {
            this.leftArm.position.set(-0.22, -0.15 + bobY, -0.68);
            this.leftArm.rotation.set(0.5, 0.4, 0.2);

            this.rightArm.position.set(0.22, -0.18 + bobY, -0.68);
            this.rightArm.rotation.set(0.5, -0.4, -0.2);
            return;
        }

        // Default Idle / Run Sway
        this.rightArm.position.set(0.38 + bobX, -0.32 + bobY, -0.65);
        this.rightArm.rotation.set(bobY * 2, -bobX * 2, 0);

        this.leftArm.position.set(-0.38 - bobX, -0.34 + bobY, -0.65);
        this.leftArm.rotation.set(bobY * 2, bobX * 2, 0);
    }
}
