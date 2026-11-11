import * as THREE from 'three';

export const POWERUP_TYPES = {
    speed: {
        id: 'speed',
        name: 'THRUSTER SURGE',
        color: 0x00ffcc,
        duration: 7.0,
        desc: '+60% Movement speed with light cycle trail'
    },
    overcharge: {
        id: 'overcharge',
        name: 'HYPER-DISC',
        color: 0xff0055,
        duration: 10.0,
        desc: '1.5x Disc speed & +15 damage on next 2 throws'
    },
    shield: {
        id: 'shield',
        name: 'MATRIX OVERSHIELD',
        color: 0xffaa00,
        duration: 8.0,
        desc: '+50 Shield energy and auto-deflect boost'
    },
    recall: {
        id: 'recall',
        name: 'INSTANT RECALL',
        color: 0xaa00ff,
        duration: 12.0,
        desc: 'Discs teleport immediately back to your hand'
    }
};

export class TronPowerupManager {
    constructor(scene) {
        this.scene = scene;
        this.powerups = [];
        this.spawnTimer = 4.0;
        this.spawnPositions = [
            new THREE.Vector3(0, 1.2, 0),       // Center
            new THREE.Vector3(-8, 1.2, -5),     // North-West
            new THREE.Vector3(8, 1.2, -5),      // North-East
            new THREE.Vector3(-8, 1.2, 5),      // South-West
            new THREE.Vector3(8, 1.2, 5)        // South-East
        ];
    }

    spawn(typeKey, position) {
        const type = POWERUP_TYPES[typeKey] || POWERUP_TYPES.speed;
        const group = new THREE.Group();
        group.position.copy(position);

        // Core Glowing Octahedron
        const geo = new THREE.OctahedronGeometry(0.38, 0);
        const mat = new THREE.MeshBasicMaterial({
            color: type.color,
            wireframe: false
        });
        const core = new THREE.Mesh(geo, mat);
        group.add(core);

        // Rotating Wireframe Box Rim
        const boxGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const box = new THREE.Mesh(boxGeo, wireMat);
        group.add(box);

        // Point Light
        const light = new THREE.PointLight(type.color, 1.5, 5);
        group.add(light);

        this.scene.add(group);
        const item = {
            typeKey,
            type,
            group,
            core,
            box,
            light,
            position: position.clone(),
            active: true
        };
        this.powerups.push(item);
        return item;
    }

    update(dt, players, onCollectCallback) {
        // Spawn randomly if less than 3 active powerups
        this.spawnTimer -= dt;
        if (this.spawnTimer <= 0 && this.powerups.length < 3) {
            this.spawnTimer = 10.0 + Math.random() * 6.0;
            const keys = Object.keys(POWERUP_TYPES);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            const availablePos = this.spawnPositions.filter(p => !this.powerups.some(pu => pu.position.distanceTo(p) < 2));
            if (availablePos.length > 0) {
                const pos = availablePos[Math.floor(Math.random() * availablePos.length)];
                this.spawn(randomKey, pos);
            }
        }

        // Animate and check collection
        for (let i = this.powerups.length - 1; i >= 0; i--) {
            const p = this.powerups[i];
            if (!p.active) continue;

            p.group.rotation.y += 2.0 * dt;
            p.box.rotation.x += 1.5 * dt;
            p.group.position.y = 1.2 + Math.sin(performance.now() * 0.003 + i) * 0.2;

            // Check collision with all players in arena
            for (const pl of players) {
                if (!pl.isAlive) continue;
                const dist = pl.position.distanceTo(p.group.position);
                if (dist < 1.4) {
                    p.active = false;
                    this.scene.remove(p.group);
                    this.powerups.splice(i, 1);
                    if (onCollectCallback) {
                        onCollectCallback(pl, p.type);
                    }
                    break;
                }
            }
        }
    }

    clear() {
        for (const p of this.powerups) {
            this.scene.remove(p.group);
        }
        this.powerups = [];
    }
}
