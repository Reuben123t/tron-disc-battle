import * as THREE from 'three';

export const ARENA_PRESETS = {
    coliseum: {
        id: 'coliseum',
        name: 'Disc Coliseum',
        shape: 'circle',
        radius: 17,
        themeColor: 0x00f0ff,
        themeHex: '#00f0ff',
        pylons: [
            { x: -5, z: 0, radius: 0.9 },
            { x: 5, z: 0, radius: 0.9 }
        ],
        description: 'The iconic gaming grid arena from Tron: Legacy with dual rebound pylons.'
    },
    hexagon: {
        id: 'hexagon',
        name: 'Hexagonal Core',
        shape: 'hexagon',
        radius: 18,
        themeColor: 0xff3b00,
        themeHex: '#ff3b00',
        pylons: [
            { x: 0, z: -4, radius: 1.1 },
            { x: 0, z: 4, radius: 1.1 }
        ],
        description: 'High-voltage perimeter with sharp bank shot angles.'
    },
    gauntlet: {
        id: 'gauntlet',
        name: "Rinzler's Gauntlet",
        shape: 'octagon',
        radius: 19,
        themeColor: 0xffaa00,
        themeHex: '#ffaa00',
        pylons: [
            { x: -6, z: -3, radius: 0.8 },
            { x: 6, z: -3, radius: 0.8 },
            { x: -6, z: 3, radius: 0.8 },
            { x: 6, z: 3, radius: 0.8 }
        ],
        description: 'Multi-bumper arena designed for extreme ricochets.'
    },
    outskirts: {
        id: 'outskirts',
        name: 'The Portal Spire',
        shape: 'circle',
        radius: 15,
        themeColor: 0x00ff88,
        themeHex: '#00ff88',
        pylons: [],
        description: 'Compact high-speed duel arena with pure boundary ricochets.'
    }
};

export class TronArena {
    constructor(scene, presetKey = 'coliseum') {
        this.scene = scene;
        this.group = new THREE.Group();
        this.scene.add(this.group);

        this.presetKey = presetKey;
        this.preset = ARENA_PRESETS[presetKey] || ARENA_PRESETS.coliseum;
        this.shape = this.preset.shape;
        this.radius = this.preset.radius;
        this.themeColor = this.preset.themeColor;
        this.obstacles = [];
        this.perimeterSegments = [];

        this.buildArena();
    }

    loadPreset(presetKey, customConfig = null) {
        // Clear previous meshes
        while (this.group.children.length > 0) {
            const obj = this.group.children[0];
            this.group.remove(obj);
        }
        this.obstacles = [];
        this.perimeterSegments = [];

        if (customConfig) {
            this.preset = customConfig;
        } else {
            this.preset = ARENA_PRESETS[presetKey] || ARENA_PRESETS.coliseum;
        }

        this.shape = this.preset.shape || 'circle';
        this.radius = this.preset.radius || 17;
        this.themeColor = this.preset.themeColor || 0x00f0ff;

        this.buildArena();
    }

    buildArena() {
        const themeMat = new THREE.MeshBasicMaterial({ color: this.themeColor });

        // 1. Dark Reflective Grid Floor (Optimized Phong)
        const floorGeo = new THREE.PlaneGeometry(80, 80);
        const floorMat = new THREE.MeshPhongMaterial({
            color: 0x05070a,
            specular: 0x112233,
            shininess: 40
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        this.group.add(floor);

        // 2. High-Tech Glowing Hexagonal / Radial Floor Grid
        const gridHelper = new THREE.GridHelper(60, 60, this.themeColor, 0x111c29);
        gridHelper.position.y = 0.015;
        this.group.add(gridHelper);

        // Center Ring & Arena Boundaries
        if (this.shape === 'circle') {
            this.buildCircularPerimeter(themeMat);
        } else if (this.shape === 'hexagon') {
            this.buildPolygonPerimeter(6, themeMat);
        } else if (this.shape === 'octagon') {
            this.buildPolygonPerimeter(8, themeMat);
        } else {
            this.buildPolygonPerimeter(4, themeMat);
        }

        // 3. Elevated Dual Combat Discs (Like Tron Legacy Movie platforms)
        this.buildElevatedCombatPlatforms(themeMat);

        // 4. Rebound Pylons
        if (this.preset.pylons) {
            for (const p of this.preset.pylons) {
                this.addPylon(p.x, p.z, p.radius);
            }
        }

        // 5. Grand Spectator Coliseum Stands in the distance
        this.buildSpectatorColiseum();

        // 6. Monolith Towers & Ambient Sky Lights
        this.buildSkyMonoliths();
    }

    buildCircularPerimeter(themeMat) {
        // Glowing Base Ring Rail
        const railGeo = new THREE.RingGeometry(this.radius - 0.2, this.radius + 0.2, 64);
        const rail = new THREE.Mesh(railGeo, themeMat);
        rail.rotation.x = -Math.PI / 2;
        rail.position.y = 0.03;
        this.group.add(rail);

        // Outer Transparent Energy Forcefield Cylinder
        const wallGeo = new THREE.CylinderGeometry(this.radius, this.radius, 4.0, 64, 1, true);
        const wallMat = new THREE.MeshBasicMaterial({
            color: this.themeColor,
            transparent: true,
            opacity: 0.22,
            side: THREE.DoubleSide
        });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.y = 2.0;
        this.group.add(wall);

        // Top Glowing Rail
        const topRailGeo = new THREE.TorusGeometry(this.radius, 0.12, 12, 64);
        const topRail = new THREE.Mesh(topRailGeo, themeMat);
        topRail.rotation.x = Math.PI / 2;
        topRail.position.y = 4.0;
        this.group.add(topRail);

        // Vertical glowing light pillars around perimeter (Optimized shared materials)
        const pillarCount = 16;
        const pillarGeo = new THREE.CylinderGeometry(0.18, 0.18, 4.2, 8);
        const pillarMat = new THREE.MeshPhongMaterial({ color: 0x0a0c10, specular: 0x223344, shininess: 20 });
        const glowStripGeo = new THREE.BoxGeometry(0.06, 4.2, 0.22);

        for (let i = 0; i < pillarCount; i++) {
            const angle = (i / pillarCount) * Math.PI * 2;
            const px = Math.cos(angle) * this.radius;
            const pz = Math.sin(angle) * this.radius;

            const pillar = new THREE.Mesh(pillarGeo, pillarMat);
            pillar.position.set(px, 2.1, pz);
            this.group.add(pillar);

            const glowStrip = new THREE.Mesh(glowStripGeo, themeMat);
            glowStrip.position.set(px, 2.1, pz);
            glowStrip.rotation.y = -angle;
            this.group.add(glowStrip);
        }
    }

    buildPolygonPerimeter(sides, themeMat) {
        this.perimeterSegments = [];
        const pts = [];

        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(angle) * this.radius, 0, Math.sin(angle) * this.radius));
        }

        for (let i = 0; i < sides; i++) {
            const p1 = pts[i];
            const p2 = pts[(i + 1) % sides];

            const dir = new THREE.Vector3().subVectors(p2, p1);
            const len = dir.length();
            const center = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
            const angle = Math.atan2(dir.x, dir.z);

            // Inward Normal
            const normal = new THREE.Vector3(-dir.z, 0, dir.x).normalize();

            this.perimeterSegments.push({ p1, p2, normal });

            // Glowing Barrier Plane
            const wallGeo = new THREE.PlaneGeometry(len, 4.0);
            const wallMat = new THREE.MeshBasicMaterial({
                color: this.themeColor,
                transparent: true,
                opacity: 0.22,
                side: THREE.DoubleSide
            });
            const wall = new THREE.Mesh(wallGeo, wallMat);
            wall.position.set(center.x, 2.0, center.z);
            wall.rotation.y = angle + Math.PI / 2;
            this.group.add(wall);

            // Base and Top glowing rails
            const railGeo = new THREE.BoxGeometry(len, 0.12, 0.2);
            const baseRail = new THREE.Mesh(railGeo, themeMat);
            baseRail.position.set(center.x, 0.06, center.z);
            baseRail.rotation.y = angle + Math.PI / 2;
            this.group.add(baseRail);

            const topRail = new THREE.Mesh(railGeo, themeMat);
            topRail.position.set(center.x, 4.0, center.z);
            topRail.rotation.y = angle + Math.PI / 2;
            this.group.add(topRail);

            // Corner Pillars
            const cornerPillar = new THREE.Mesh(
                new THREE.CylinderGeometry(0.24, 0.24, 4.2, 8),
                new THREE.MeshStandardMaterial({ color: 0x090b0e, metalness: 0.9 })
            );
            cornerPillar.position.set(p1.x, 2.1, p1.z);
            this.group.add(cornerPillar);
        }
    }

    buildElevatedCombatPlatforms(themeMat) {
        // Dual elevated glowing battle rings on both sides
        const ringGeo = new THREE.RingGeometry(3.5, 3.8, 48);

        // Player Zone Ring
        const playerRing = new THREE.Mesh(ringGeo, themeMat);
        playerRing.rotation.x = -Math.PI / 2;
        playerRing.position.set(0, 0.04, -8);
        this.group.add(playerRing);

        // AI Zone Ring
        const aiRing = new THREE.Mesh(ringGeo, themeMat);
        aiRing.rotation.x = -Math.PI / 2;
        aiRing.position.set(0, 0.04, 8);
        this.group.add(aiRing);

        // Center Arena Dividing Line
        const centerLineGeo = new THREE.BoxGeometry(this.radius * 1.8, 0.02, 0.15);
        const centerLine = new THREE.Mesh(centerLineGeo, themeMat);
        centerLine.position.set(0, 0.03, 0);
        this.group.add(centerLine);
    }

    addPylon(x, z, radius = 0.9) {
        const pylonGroup = new THREE.Group();
        pylonGroup.position.set(x, 0, z);

        // Pylon Body (Optimized Phong)
        const pylonGeo = new THREE.CylinderGeometry(radius, radius * 1.15, 3.8, 14);
        const pylonMat = new THREE.MeshPhongMaterial({
            color: 0x0a0d12,
            specular: 0x334455,
            shininess: 35
        });
        const pylonMesh = new THREE.Mesh(pylonGeo, pylonMat);
        pylonMesh.position.y = 1.9;
        pylonGroup.add(pylonMesh);

        // Glowing Ring Bands on Pylon
        const bandGeo = new THREE.TorusGeometry(radius + 0.03, 0.05, 6, 18);
        const bandMat = new THREE.MeshBasicMaterial({ color: this.themeColor });

        const band1 = new THREE.Mesh(bandGeo, bandMat);
        band1.rotation.x = Math.PI / 2;
        band1.position.y = 1.0;
        pylonGroup.add(band1);

        const band2 = new THREE.Mesh(bandGeo, bandMat);
        band2.rotation.x = Math.PI / 2;
        band2.position.y = 2.8;
        pylonGroup.add(band2);

        this.group.add(pylonGroup);

        this.obstacles.push({
            position: new THREE.Vector3(x, 0, z),
            radius: radius,
            active: true,
            mesh: pylonGroup,
            onHit: () => {
                // Flash glow bands on hit
                bandMat.color.setHex(0xffffff);
                setTimeout(() => bandMat.color.setHex(this.themeColor), 100);
            }
        });
    }

    buildSpectatorColiseum() {
        // Multi-tiered coliseum stadium seats in the background (Optimized InstancedMesh: 1 Draw Call)
        const coliseumGroup = new THREE.Group();
        const totalSpecCount = 35 + 53 + 71 + 89; // 248 total spectator points
        const specGeo = new THREE.BoxGeometry(0.2, 0.45, 0.2);
        const specMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const instancedMesh = new THREE.InstancedMesh(specGeo, specMat, totalSpecCount);
        const dummy = new THREE.Object3D();
        const baseCol = new THREE.Color(this.themeColor);
        const whiteCol = new THREE.Color(0xffffff);

        let idx = 0;
        for (let tier = 0; tier < 4; tier++) {
            const innerR = this.radius + 6 + tier * 5.5;
            const outerR = innerR + 4.5;
            const height = 2.5 + tier * 3.5;

            const ringGeo = new THREE.RingGeometry(innerR, outerR, 32);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x06090e,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 2;
            ring.position.y = height;
            coliseumGroup.add(ring);

            // Tier Edge Light
            const edgeGeo = new THREE.TorusGeometry(innerR, 0.08, 6, 32);
            const edge = new THREE.Mesh(edgeGeo, new THREE.MeshBasicMaterial({ color: this.themeColor }));
            edge.rotation.x = Math.PI / 2;
            edge.position.y = height + 0.02;
            coliseumGroup.add(edge);

            // High-performance digital spectator lights placed on each tier
            const count = 35 + tier * 18;
            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2 + (Math.sin(i * 2.3) * 0.04);
                const r = innerR + 1.2 + ((i * 43) % 100) / 100 * 2.5;
                const sx = Math.cos(angle) * r;
                const sz = Math.sin(angle) * r;

                dummy.position.set(sx, height + 0.25, sz);
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(idx, dummy.matrix);

                const useTheme = (i % 3) !== 0;
                instancedMesh.setColorAt(idx, useTheme ? baseCol : whiteCol);
                idx++;
            }
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
        coliseumGroup.add(instancedMesh);

        this.group.add(coliseumGroup);
    }

    buildSkyMonoliths() {
        // Giant Monolith Towers piercing the dark digital sky
        const towerCount = 8;
        const dist = 65;
        const towerGeo = new THREE.BoxGeometry(9, 80, 9);
        const towerMat = new THREE.MeshPhongMaterial({
            color: 0x030406,
            specular: 0x112233,
            shininess: 15
        });
        const stripeGeo = new THREE.BoxGeometry(0.4, 80, 9.1);
        const stripeMat = new THREE.MeshBasicMaterial({ color: this.themeColor });

        for (let i = 0; i < towerCount; i++) {
            const angle = (i / towerCount) * Math.PI * 2;
            const tx = Math.cos(angle) * dist;
            const tz = Math.sin(angle) * dist;

            const tower = new THREE.Mesh(towerGeo, towerMat);
            tower.position.set(tx, 40, tz);
            this.group.add(tower);

            // Glowing vertical light stripe on towers
            const stripe = new THREE.Mesh(stripeGeo, stripeMat);
            stripe.position.set(tx, 40, tz);
            this.group.add(stripe);
        }

        // Giant overhead circular stadium lighting rig
        const rigGeo = new THREE.TorusGeometry(this.radius * 1.3, 0.35, 8, 36);
        const rigMat = new THREE.MeshBasicMaterial({ color: this.themeColor });
        const rig = new THREE.Mesh(rigGeo, rigMat);
        rig.rotation.x = Math.PI / 2;
        rig.position.y = 16.0;
        this.group.add(rig);
    }
}
