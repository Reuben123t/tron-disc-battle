import * as THREE from 'three';
import { soundEngine } from './audio.js';
import { TronCharacter, CHARACTER_SKINS } from './character.js';
import { TronDisc } from './disc.js';
import { TronArena, ARENA_PRESETS } from './arena.js';
import { TronAI } from './ai.js';
import { TronFPVControls } from './controls.js';
import { TronFPVArms } from './fpv_arms.js';
import { TronLanManager, PLAYER_SLOT_COLORS, fetchLeaderboard, submitLeaderboardScore } from './lan.js';
import { TronPowerupManager } from './powerups.js';
import { TronLevelEditor } from './editor.js';

class TronFPVGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.gameState = 'menu'; // 'menu', 'lobby', 'playing', 'match_over'

        this.arenaPresetKey = 'coliseum';
        this.username = localStorage.getItem('tron_username') || 'Program_' + Math.floor(Math.random() * 899 + 100);

        // Player Stats & Match Score
        this.playerPos = new THREE.Vector3(0, 0, -8);
        this.playerVel = new THREE.Vector3();
        this.playerHp = 100;
        this.playerMaxHp = 100;
        this.shieldEnergy = 100;
        this.maxShieldEnergy = 100;
        this.isAlive = true;
        this.moveSpeed = 7.8;
        this.activePowerup = null;
        this.powerupTimer = 0;

        // Match Progression
        this.localKills = 0;
        this.localScore = 0;
        this.killsToWin = 3;
        this.lastNetSyncTime = 0;

        // Discs
        this.discs = []; // array of all active discs

        // Combatants (Local Player + 3 Remote Players/Bots)
        this.remoteCombatants = new Map(); // id -> { character, disc, ai, name, color, hp, targetPos, targetYaw }

        this.lastTime = performance.now();
        this.screenShake = 0;

        this.initThree();
        this.initLAN();
        this.initEntities();
        this.initUI();
        this.initLevelEditor();

        // Start render loop
        requestAnimationFrame((t) => this.loop(t));
    }

    initThree() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: window.devicePixelRatio < 2.0,
            powerPreference: 'high-performance',
            precision: 'mediump'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // Optimize pixel ratio for high mobile FPS (1.25x max to eliminate GPU fillrate bottlenecks)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.35;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020306);
        this.scene.fog = new THREE.FogExp2(0x020306, 0.015);

        // First-Person Camera at eye height
        this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.05, 300);
        this.camera.position.set(0, 1.72, -8);
        this.scene.add(this.camera);

        // Lighting (Optimized for high mobile throughput)
        this.ambientLight = new THREE.AmbientLight(0x101a28, 1.1);
        this.scene.add(this.ambientLight);

        this.dirLight = new THREE.DirectionalLight(0xddeeff, 1.2);
        this.dirLight.position.set(10, 25, -15);
        this.scene.add(this.dirLight);

        this.spotLight = new THREE.SpotLight(0x00f0ff, 2.5, 45, Math.PI / 3, 0.4, 1.2);
        this.spotLight.position.set(0, 24, 0);
        this.scene.add(this.spotLight);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    initLAN() {
        this.lan = new TronLanManager((msg) => this.handleNetMessage(msg));
    }

    initEntities() {
        // 1. Arena
        this.arena = new TronArena(this.scene, this.arenaPresetKey);

        // 2. Power-up Manager
        this.powerupManager = new TronPowerupManager(this.scene);

        // 3. FPV Arms attached to Camera
        this.fpvArms = new TronFPVArms(this.camera, 0x00f0ff);

        // 4. FPV Controls (Dedicated Joystick + Drag Look)
        this.controls = new TronFPVControls(this.camera, this.canvas);

        this.controls.onThrow = (curve) => {
            if (this.gameState !== 'playing' || !this.isAlive) return;
            if (this.localDisc && this.localDisc.isActive) return;
            this.throwLocalDisc(curve);
        };

        this.controls.onRecall = () => {
            if (this.localDisc && this.localDisc.isActive) {
                this.localDisc.recall();
                this.fpvArms.triggerRecall();
                if (this.lan.isConnected) {
                    this.lan.send({ type: 'recall', id: this.lan.localPlayerId });
                }
            }
        };

        this.controls.onDash = () => {
            if (this.gameState !== 'playing' || !this.isAlive) return;
            this.triggerDash();
        };

        // 5. Local Player Interface
        const self = this;
        this.localPlayer = {
            position: this.playerPos,
            get velocity() { return self.playerVel; },
            isAI: false,
            get isAlive() { return self.isAlive; },
            get isShielding() { return self.controls ? self.controls.isShielding : false; },
            get rotationY() {
                if (!self.controls) return 0;
                const f = self.controls.getForwardVector();
                return Math.atan2(f.x, f.z);
            },
            get state() { return self.controls && self.controls.isDashing ? 'dodge' : 'idle'; },
            get hasDisc() { return self.fpvArms ? self.fpvArms.hasDisc : true; },
            set hasDisc(val) { if (self.fpvArms) self.fpvArms.hasDisc = val; },
            discsInFlight: 0,
            takeDamage: (amount, attackerName = 'Opponent') => {
                self.takeDamage(amount, attackerName);
            }
        };
        this.localPlayerDummy = this.localPlayer;
        this.localDisc = new TronDisc(this.scene, this.localPlayer, 0x00f0ff, false);
        this.localPlayer.disc = this.localDisc;
    }

    initLevelEditor() {
        this.levelEditor = new TronLevelEditor((customConfig) => {
            this.arenaPresetKey = 'custom';
            this.arena.loadPreset('custom', customConfig);
            this.startSoloMatch(2);
        });
    }

    initUI() {
        // Views
        this.viewMenu = document.getElementById('view-menu');
        this.viewHUD = document.getElementById('view-hud');
        this.viewLobby = document.getElementById('view-lobby');
        this.viewGameOver = document.getElementById('view-gameover');

        // Username inputs
        this.inputUsername = document.getElementById('menu-username-input');
        if (this.inputUsername) {
            this.inputUsername.value = this.username;
            this.inputUsername.addEventListener('change', () => {
                this.username = this.inputUsername.value.trim() || 'Program';
                this.lan.setUsername(this.username);
            });
        }

        // Main Menu Buttons
        document.getElementById('btn-play-solo').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.startSoloMatch(3); // 1 player + 3 AI bots (4 players total)
        });

        document.getElementById('btn-host-lan').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.openHostLobby();
        });

        document.getElementById('btn-join-lan').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.openJoinLobby();
        });

        document.getElementById('btn-open-editor').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.levelEditor.show();
        });

        // Supabase Leaderboard Modal
        const btnOpenLb = document.getElementById('btn-open-leaderboard');
        if (btnOpenLb) {
            btnOpenLb.addEventListener('click', () => {
                soundEngine.playUiClick();
                document.getElementById('modal-leaderboard').style.display = 'flex';
                this.refreshLeaderboardTable('modal-leaderboard-body');
            });
        }

        const btnCloseLb = document.getElementById('btn-leaderboard-close');
        if (btnCloseLb) {
            btnCloseLb.addEventListener('click', () => {
                soundEngine.playUiClick();
                document.getElementById('modal-leaderboard').style.display = 'none';
            });
        }

        // Lobby Buttons
        document.getElementById('btn-lobby-start').addEventListener('click', () => {
            soundEngine.playUiClick();
            if (this.lan.isHost) {
                if (this.lan.fillWithBots && this.lan.players.size < 4) {
                    this.lan.fillRosterWithBots();
                }
                this.lan.send({ type: 'start_match', arena: this.arenaPresetKey });
                this.startGridMatch();
            }
        });

        document.getElementById('btn-lobby-back').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.lan.disconnect();
            this.returnToMenu();
        });

        // Join Server Direct
        document.getElementById('btn-direct-connect').addEventListener('click', () => {
            soundEngine.playUiClick();
            const ip = document.getElementById('input-direct-ip').value.trim();
            if (ip) {
                this.lan.connectToHost(ip);
                this.showLobbyScreen();
            }
        });

        // Game Over Buttons
        document.getElementById('btn-rematch').addEventListener('click', () => {
            soundEngine.playUiClick();
            if (this.lan.isSolo) {
                this.startSoloMatch(3);
            } else if (this.lan.isHost) {
                if (this.lan.fillWithBots && this.lan.players.size < 4) {
                    this.lan.fillRosterWithBots();
                }
                this.lan.send({ type: 'start_match', arena: this.arenaPresetKey });
                this.startGridMatch();
            }
        });

        document.getElementById('btn-menu').addEventListener('click', () => {
            soundEngine.playUiClick();
            this.lan.disconnect();
            this.returnToMenu();
        });

        // HUD Elements
        this.hudHpFill = document.getElementById('player-hp-fill');
        this.hudHpText = document.getElementById('player-hp-num');
        this.hudShieldFill = document.getElementById('shield-fill');
        this.hudScoreEl = document.getElementById('hud-score');
        this.hudKillsEl = document.getElementById('hud-kills');
        this.bannerEl = document.getElementById('round-status-banner');
        this.radarEl = document.getElementById('compass-radar-strip');
        this.scoreboardEl = document.getElementById('fpv-scoreboard-list');
        this.crosshairLock = document.getElementById('crosshair-lock');
        this.crosshairDistEl = document.getElementById('crosshair-dist');
        this.btnThrow = document.getElementById('btn-fpv-throw');
        this.btnRecall = document.getElementById('btn-fpv-recall');

        // Pre-create pool of 4 radar pips to prevent DOM thrashing
        this.radarPips = [];
        if (this.radarEl) {
            this.radarEl.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                const pip = document.createElement('div');
                pip.className = 'radar-pip';
                pip.style.display = 'none';
                this.radarEl.appendChild(pip);
                this.radarPips.push(pip);
            }
        }

        // Discovered Servers list hook
        window.onLanServersListUpdated = (servers) => {
            const listEl = document.getElementById('discovered-servers-list');
            if (!listEl) return;
            listEl.innerHTML = '';

            if (servers.length === 0) {
                listEl.innerHTML = '<div style="color: #667788; padding: 10px;">Searching local network for hosts...</div>';
                return;
            }

            for (const s of servers) {
                const item = document.createElement('div');
                item.className = 'server-item';
                item.innerHTML = `
                    <div>
                        <div style="font-weight: 700; color: #00f0ff;">${s.name}'s Grid Arena</div>
                        <div style="font-size: 11px; color: #8899aa;">IP: ${s.ip}:${s.port} • Players: ${s.currentPlayers}/${s.maxPlayers}</div>
                    </div>
                    <button class="btn-tron-small btn-tron" data-ip="${s.ip}">JOIN</button>
                `;
                item.querySelector('button').addEventListener('click', () => {
                    this.lan.connectToHost(s.ip, s.port);
                    this.showLobbyScreen();
                });
                listEl.appendChild(item);
            }
        };
    }

    openHostLobby() {
        const localIp = window.AndroidBridge && window.AndroidBridge.getLocalIp ? window.AndroidBridge.getLocalIp() : '127.0.0.1';
        this.lan.startHosting(this.username, 4, this.arenaPresetKey, true);

        document.getElementById('lobby-title').innerText = `HOSTING LAN SERVER (${localIp}:8888)`;
        document.getElementById('btn-lobby-start').style.display = 'inline-block';
        this.showLobbyScreen();
    }

    openJoinLobby() {
        this.lan.startDiscovery();
        document.getElementById('modal-join-lan').style.display = 'flex';

        document.getElementById('btn-join-close').onclick = () => {
            document.getElementById('modal-join-lan').style.display = 'none';
            this.lan.stopDiscovery();
        };
    }

    showLobbyScreen() {
        document.getElementById('modal-join-lan').style.display = 'none';
        this.viewMenu.style.display = 'none';
        this.viewGameOver.style.display = 'none';
        this.viewHUD.style.display = 'none';
        this.viewLobby.style.display = 'flex';
        this.gameState = 'lobby';

        const btnStart = document.getElementById('btn-lobby-start');
        if (btnStart) {
            btnStart.style.display = this.lan.isHost ? 'inline-block' : 'none';
        }

        this.updateLobbyPlayerList();
    }

    updateLobbyPlayerList() {
        const listEl = document.getElementById('lobby-players-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        const roster = Array.from(this.lan.players.values());
        for (let i = 0; i < 4; i++) {
            const p = roster[i];
            const div = document.createElement('div');
            div.className = 'lobby-player-card';

            const color = PLAYER_SLOT_COLORS[i];
            if (p) {
                div.innerHTML = `
                    <div class="slot-badge" style="background: ${color.hex}; box-shadow: 0 0 10px ${color.hex};"></div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700; color: #fff;">${p.name} ${p.id === this.lan.localPlayerId ? '(YOU)' : ''}</div>
                        <div style="font-size: 11px; color: ${color.hex};">SLOT ${i + 1} // READY</div>
                    </div>
                `;
            } else {
                div.innerHTML = `
                    <div class="slot-badge" style="background: #334455;"></div>
                    <div style="flex: 1; color: #667788;">SLOT ${i + 1} // WAITING FOR PLAYER...</div>
                `;
            }
            listEl.appendChild(div);
        }
    }

    startSoloMatch(botCount = 3) {
        this.lan.startSolo(botCount, this.arenaPresetKey);
        this.startGridMatch();
    }

    startGridMatch() {
        this.gameState = 'playing';
        this.viewMenu.style.display = 'none';
        this.viewLobby.style.display = 'none';
        this.viewGameOver.style.display = 'none';
        this.viewHUD.style.display = 'block';

        // Reset Match Progression
        this.localKills = 0;
        this.localScore = 0;
        this.updateScoreHUD();

        // Set local combatant color based on slot
        const mySlot = this.lan.localSlot || 0;
        const myColor = PLAYER_SLOT_COLORS[mySlot % 4];
        this.fpvArms.setGlowColor(myColor.num);
        this.localDisc.rimMesh.material.color.setHex(myColor.num);
        this.localDisc.light.color.setHex(myColor.num);

        // Spawn position around arena ring based on slot (4 corners)
        const spawnPositions = [
            new THREE.Vector3(0, 0, -11),
            new THREE.Vector3(0, 0, 11),
            new THREE.Vector3(-11, 0, 0),
            new THREE.Vector3(11, 0, 0)
        ];
        this.playerPos.copy(spawnPositions[mySlot % 4]);
        this.playerHp = 100;
        this.shieldEnergy = 100;
        this.isAlive = true;
        this.fpvArms.catchDisc();
        this.localDisc.catchByOwner();

        // Face towards center (0, 0)
        const toCenter = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), this.playerPos).normalize();
        this.controls.yaw = Math.atan2(-toCenter.x, -toCenter.z);
        this.controls.pitch = 0;
        this.controls.updateCameraRotation();

        // Clear and rebuild remote players / bots
        this.setupRemoteCombatants();

        // Clear power-ups and sound
        this.powerupManager.clear();
        soundEngine.startMusic();
        soundEngine.announce('Grid Battle Initiated');
        this.showBanner('FIRST-PERSON GRID BATTLE', 2200);

        this.updateHUD();
    }

    updateScoreHUD() {
        if (this.hudScoreEl) this.hudScoreEl.innerText = this.localScore;
        if (this.hudKillsEl) this.hudKillsEl.innerText = `${this.localKills}/${this.killsToWin}`;
    }

    setupRemoteCombatants() {
        // Clear previous remote characters
        for (const [_, rc] of this.remoteCombatants) {
            this.scene.remove(rc.character.group);
            this.scene.remove(rc.nameLabel);
            rc.disc.catchByOwner();
        }
        this.remoteCombatants.clear();

        const spawnPositions = [
            new THREE.Vector3(0, 0, -11),
            new THREE.Vector3(0, 0, 11),
            new THREE.Vector3(-11, 0, 0),
            new THREE.Vector3(11, 0, 0)
        ];

        for (const [id, p] of this.lan.players) {
            if (id === this.lan.localPlayerId) continue;

            const slot = p.slot % 4;
            const color = PLAYER_SLOT_COLORS[slot];
            const skinKey = slot === 1 ? 'rinzler' : slot === 2 ? 'quorra' : 'anon';

            // 3D Model for remote player
            const char = new TronCharacter(this.scene, skinKey, p.isBot);
            char.setSkin(skinKey);
            char.group.position.copy(spawnPositions[slot]);
            char.position.copy(spawnPositions[slot]);

            // Disc for remote player
            const disc = new TronDisc(this.scene, char, color.num, false);

            // Floating 3D Username Label
            const labelCanvas = document.createElement('canvas');
            labelCanvas.width = 256;
            labelCanvas.height = 64;
            const ctx = labelCanvas.getContext('2d');
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(0, 0, 256, 64);
            ctx.strokeStyle = color.hex;
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, 252, 60);
            ctx.font = 'bold 26px Rajdhani, sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.fillText(p.name, 128, 42);

            const texture = new THREE.CanvasTexture(labelCanvas);
            const labelGeo = new THREE.PlaneGeometry(1.6, 0.4);
            const labelMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
            const nameLabel = new THREE.Mesh(labelGeo, labelMat);
            nameLabel.position.set(0, 2.2, 0);
            char.group.add(nameLabel);

            // AI controller if bot (only run by host/solo to keep state perfectly synchronized)
            let aiCtrl = null;
            if (p.isBot && (this.lan.isHost || this.lan.isSolo)) {
                aiCtrl = new TronAI(char, this.localPlayer, disc, null, this.arena, 'hard', [this.localDisc]);
                if (this.lan.isHost && this.lan.isConnected) {
                    aiCtrl.onThrow = (origin, dir, curve, speedMult) => {
                        this.lan.send({
                            type: 'throw',
                            id: id,
                            origin: { x: Math.round(origin.x * 100) / 100, y: Math.round(origin.y * 100) / 100, z: Math.round(origin.z * 100) / 100 },
                            dir: { x: Math.round(dir.x * 100) / 100, y: Math.round(dir.y * 100) / 100, z: Math.round(dir.z * 100) / 100 },
                            curve,
                            speedMult
                        });
                    };
                }
            }

            this.remoteCombatants.set(id, {
                id,
                slot,
                name: p.name,
                color,
                character: char,
                disc,
                nameLabel,
                ai: aiCtrl,
                targetPos: spawnPositions[slot].clone(),
                targetYaw: 0,
                hp: 100,
                score: 0,
                isAlive: true
            });
        }
    }

    throwLocalDisc(curve) {
        if (!this.localDisc) return;

        // Auto-fix desync: if disc is in hand, ensure arms acknowledge it
        if (!this.localDisc.isActive && !this.fpvArms.hasDisc) {
            this.fpvArms.catchDisc();
        }
        if (this.localDisc.isActive) return;

        const lookDir = this.controls.getLookDirection();
        const startPos = this.playerPos.clone();
        startPos.y = 1.6;

        let speedMult = 1.0;
        if (this.activePowerup === 'overcharge') {
            speedMult = 1.45;
        }

        this.localDisc.launch(startPos, lookDir, curve, speedMult);
        this.fpvArms.triggerThrow();

        if (this.lan.isConnected) {
            this.lan.send({
                type: 'throw',
                id: this.lan.localPlayerId,
                origin: { x: Math.round(startPos.x * 100) / 100, y: Math.round(startPos.y * 100) / 100, z: Math.round(startPos.z * 100) / 100 },
                dir: { x: Math.round(lookDir.x * 100) / 100, y: Math.round(lookDir.y * 100) / 100, z: Math.round(lookDir.z * 100) / 100 },
                curve,
                speedMult
            });
        }
    }

    triggerDash() {
        const forward = this.controls.getForwardVector();
        const dashVec = this.controls.isMoving
            ? this.controls.worldMoveVec.clone().normalize()
            : forward;

        this.playerPos.addScaledVector(dashVec, 3.8);
        this.camera.position.x = this.playerPos.x;
        this.camera.position.z = this.playerPos.z;

        soundEngine.playUiClick();
        if (window.AndroidBridge && window.AndroidBridge.vibrate) {
            window.AndroidBridge.vibrate(35);
        }
    }

    takeDamage(amount, attackerName = 'Unknown') {
        if (!this.isAlive) return;

        // If shielding and looking towards attacker, deflect damage!
        if (this.controls.isShielding && this.shieldEnergy > 20) {
            this.shieldEnergy = Math.max(0, this.shieldEnergy - 20);
            soundEngine.playDeflect();
            if (window.AndroidBridge && window.AndroidBridge.vibrateClash) {
                window.AndroidBridge.vibrateClash();
            }
            return;
        }

        this.playerHp = Math.max(0, this.playerHp - amount);
        this.screenShake = 0.35;
        soundEngine.playHit();

        if (window.AndroidBridge && window.AndroidBridge.vibrate) {
            window.AndroidBridge.vibrate(90);
        }

        this.updateHUD();

        if (this.playerHp <= 0) {
            this.derez(attackerName);
        }
    }

    derez(killerName = 'Enemy', broadcast = true) {
        if (!this.isAlive) return;
        this.isAlive = false;
        soundEngine.playDerez();
        this.showBanner('YOU WERE DE-REZZED!', 2500);
        soundEngine.announce('You were derezzed');

        if (window.AndroidBridge && window.AndroidBridge.vibrateDerez) {
            window.AndroidBridge.vibrateDerez();
        }

        // Notify network
        if (broadcast && this.lan.isConnected) {
            this.lan.send({
                type: 'derez',
                victimId: this.lan.localPlayerId,
                victimName: this.username,
                killerName: killerName
            });
        }

        // Check if killer reached win limit
        for (const [id, c] of this.remoteCombatants) {
            if (c.name === killerName) {
                c.score = (c.score || 0) + 1;
                if (c.score >= this.killsToWin) {
                    this.endMatch(c.name, false);
                    return;
                }
                break;
            }
        }

        setTimeout(() => {
            if (this.gameState === 'playing') {
                this.respawn();
            }
        }, 3500);
    }

    respawn() {
        this.playerHp = 100;
        this.shieldEnergy = 100;
        this.isAlive = true;
        this.fpvArms.catchDisc();
        this.localDisc.catchByOwner();

        const slot = this.lan.localSlot || 0;
        const spawns = [
            new THREE.Vector3(0, 0, -11),
            new THREE.Vector3(0, 0, 11),
            new THREE.Vector3(-11, 0, 0),
            new THREE.Vector3(11, 0, 0)
        ];
        this.playerPos.copy(spawns[slot % 4]);
        this.updateHUD();
    }

    handleNetMessage(msg) {
        if (msg.type === 'roster_sync' || msg.type === 'register') {
            if (this.gameState === 'lobby') {
                this.updateLobbyPlayerList();
            }
        } else if (msg.type === 'start_match') {
            this.arenaPresetKey = msg.arena || 'coliseum';
            this.arena.loadPreset(this.arenaPresetKey);
            this.startGridMatch();
        } else if (msg.type === 'server_closed') {
            this.showBanner('HOST DISCONNECTED', 3000);
            soundEngine.announce('Host disconnected. Returning to menu.');
            this.lan.disconnect();
            this.returnToMenu();
        } else if (msg.type === 'player_left') {
            const rc = this.remoteCombatants.get(msg.id);
            if (rc) {
                this.scene.remove(rc.character.group);
                if (rc.nameLabel) this.scene.remove(rc.nameLabel);
                this.remoteCombatants.delete(msg.id);
                this.showKillfeed(rc.name, 'Disconnected');
            }
            if (this.gameState === 'lobby') {
                this.updateLobbyPlayerList();
            }
        } else if (msg.type === 'hit') {
            if (msg.targetId === this.lan.localPlayerId) {
                this.takeDamage(msg.damage, msg.attackerName);
            } else {
                const rc = this.remoteCombatants.get(msg.targetId);
                if (rc && rc.character) {
                    rc.character.takeDamage(msg.damage);
                }
            }
        } else if (msg.type === 'pos') {
            const rc = this.remoteCombatants.get(msg.id);
            if (rc && rc.character) {
                if (!rc.targetPos) rc.targetPos = new THREE.Vector3();
                rc.targetPos.set(msg.x, 0, msg.z);
                rc.targetYaw = msg.yaw;
                rc.character.isShielding = !!msg.shielding;
                rc.hp = msg.hp;
            }
        } else if (msg.type === 'throw') {
            const rc = this.remoteCombatants.get(msg.id);
            if (rc && rc.disc) {
                const origin = new THREE.Vector3(msg.origin.x, msg.origin.y, msg.origin.z);
                const dir = new THREE.Vector3(msg.dir.x, msg.dir.y, msg.dir.z);
                rc.disc.launch(origin, dir, msg.curve, msg.speedMult);
            }
        } else if (msg.type === 'recall') {
            const rc = this.remoteCombatants.get(msg.id);
            if (rc && rc.disc) {
                rc.disc.recall();
            }
        } else if (msg.type === 'derez') {
            this.showKillfeed(msg.killerName, msg.victimName);

            // Handle when local player was derezzed
            if (msg.victimId === this.lan.localPlayerId) {
                if (this.isAlive) {
                    this.derez(msg.killerName, false);
                }
            } else {
                const rcVictim = this.remoteCombatants.get(msg.victimId);
                if (rcVictim && rcVictim.character) {
                    rcVictim.isAlive = false;
                    rcVictim.character.derez();
                    setTimeout(() => {
                        if (this.gameState === 'playing' && rcVictim.character) {
                            const spawns = [
                                new THREE.Vector3(0, 0, -11),
                                new THREE.Vector3(0, 0, 11),
                                new THREE.Vector3(-11, 0, 0),
                                new THREE.Vector3(11, 0, 0)
                            ];
                            const sp = spawns[rcVictim.slot % 4];
                            rcVictim.character.reset(sp.x, sp.z, 0);
                            rcVictim.isAlive = true;
                            rcVictim.hp = 100;
                            rcVictim.disc.catchByOwner();
                        }
                    }, 3500);
                }
            }

            // Track kill counts & check win condition
            if (msg.killerName === this.username) {
                this.localKills++;
                this.localScore += 150;
                this.updateScoreHUD();
                if (this.localKills >= this.killsToWin) {
                    this.endMatch(this.username, true);
                }
            } else {
                for (const [id, c] of this.remoteCombatants) {
                    if (c.name === msg.killerName) {
                        c.score = (c.score || 0) + 1;
                        if (c.score >= this.killsToWin) {
                            this.endMatch(c.name, false);
                        }
                        break;
                    }
                }
            }
        }
    }

    endMatch(winnerName, isVictory) {
        if (this.gameState === 'match_over') return;
        this.gameState = 'match_over';

        // Sound & Announcements
        if (isVictory) {
            soundEngine.announce('Victory achieved. Champion of the Grid.');
            this.showBanner('VICTORY ACHIEVED!', 3000);
        } else {
            soundEngine.announce('System purge. Match terminated.');
            this.showBanner('MATCH OVER', 3000);
        }

        // Show Game Over / Win UI
        this.viewHUD.style.display = 'none';
        this.viewLobby.style.display = 'none';
        this.viewMenu.style.display = 'none';
        this.viewGameOver.style.display = 'flex';

        // Update Title & Subtitle
        const titleEl = document.getElementById('gameover-title');
        const subEl = document.getElementById('gameover-subtitle');
        if (titleEl) {
            titleEl.innerText = isVictory ? 'GRID CHAMPION' : 'DE-REZZED';
            titleEl.style.color = isVictory ? '#00f0ff' : '#ff3800';
            titleEl.style.textShadow = isVictory
                ? '0 0 16px #00f0ff, 0 0 30px rgba(0, 240, 255, 0.6)'
                : '0 0 16px #ff3800, 0 0 30px rgba(255, 56, 0, 0.6)';
        }
        if (subEl) {
            subEl.innerText = isVictory
                ? 'MATCH CYCLE COMPLETE // VICTORY SECURED'
                : `${winnerName.toUpperCase()} HAS PURGED THE GRID`;
        }

        // Stats
        const goKills = document.getElementById('go-kills');
        const goScore = document.getElementById('go-score');
        const goArena = document.getElementById('go-arena');
        if (goKills) goKills.innerText = this.localKills;
        if (goScore) goScore.innerText = this.localScore;
        if (goArena) goArena.innerText = this.arenaPresetKey.toUpperCase();

        // Submit Score to Supabase Leaderboard
        const syncStatusEl = document.getElementById('lb-sync-status');
        if (syncStatusEl) {
            syncStatusEl.innerText = 'SYNCING TO SUPABASE...';
            syncStatusEl.style.color = '#ffaa00';
        }

        submitLeaderboardScore(this.username, this.localScore, this.localKills, this.arenaPresetKey)
            .then(() => {
                if (syncStatusEl) {
                    syncStatusEl.innerText = 'LIVE SUPABASE SYNCED';
                    syncStatusEl.style.color = '#00ffaa';
                }
                this.refreshLeaderboardTable('gameover-leaderboard-body');
            })
            .catch(() => {
                if (syncStatusEl) {
                    syncStatusEl.innerText = 'OFFLINE MODE';
                    syncStatusEl.style.color = '#8899aa';
                }
                this.refreshLeaderboardTable('gameover-leaderboard-body');
            });
    }

    async refreshLeaderboardTable(targetElementId) {
        const tbody = document.getElementById(targetElementId);
        if (!tbody) return;

        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#667788; padding: 10px;">Connecting to Supabase Cloud...</td></tr>';

        try {
            const rows = await fetchLeaderboard(10);
            if (!rows || rows.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#00f0ff; padding: 12px; font-weight:700;">No human contenders yet. Be the first to win!</td></tr>';
                return;
            }

            tbody.innerHTML = '';
            rows.forEach((r, idx) => {
                const tr = document.createElement('tr');
                const isMe = r.player_name && r.player_name.toLowerCase() === this.username.toLowerCase();
                if (isMe) tr.className = 'highlight-local';

                const rankDisplay = idx === 0 ? '👑 #1' : idx === 1 ? '🥈 #2' : idx === 2 ? '🥉 #3' : `#${idx + 1}`;
                const arenaDisplay = (r.arena || 'Coliseum').toUpperCase();

                tr.innerHTML = `
                    <td style="color:${idx < 3 ? '#ffaa00' : '#8899aa'}; font-weight:700;">${rankDisplay}</td>
                    <td style="color:${isMe ? '#00f0ff' : '#ffffff'}; font-weight:700;">${r.player_name} ${isMe ? '(YOU)' : ''}</td>
                    <td style="color:#00f0ff; font-family:'Orbitron',sans-serif;">${r.win_score}</td>
                    <td style="color:#ffaa00;">${r.kills || 0}</td>
                    <td style="color:#8899aa; font-size:11px;">${arenaDisplay}</td>
                `;
                tbody.appendChild(tr);
            });
        } catch (e) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#ff6666; padding: 10px;">Leaderboard network unreachable.</td></tr>';
        }
    }

    showKillfeed(killer, victim) {
        const killfeedEl = document.getElementById('fpv-killfeed');
        if (!killfeedEl) return;

        const row = document.createElement('div');
        row.className = 'killfeed-item';
        row.innerHTML = `<span style="color:#00f0ff;">${killer}</span> [DISC] <span style="color:#ff3800;">${victim}</span>`;
        killfeedEl.appendChild(row);

        setTimeout(() => {
            row.style.opacity = '0';
            setTimeout(() => row.remove(), 400);
        }, 4000);
    }

    updateHUD() {
        if (this.hudHpFill) {
            this.hudHpFill.style.width = `${Math.max(0, this.playerHp)}%`;
        }
        if (this.hudHpText) {
            this.hudHpText.innerText = `${Math.ceil(this.playerHp)}%`;
        }
        if (this.hudShieldFill) {
            this.hudShieldFill.style.width = `${Math.max(0, this.shieldEnergy)}%`;
        }

        // Action button states (Cached elements)
        if (this.btnThrow) {
            this.btnThrow.style.opacity = (!this.localDisc || !this.localDisc.isActive) ? '1.0' : '0.4';
        }
        if (this.btnRecall) {
            this.btnRecall.style.opacity = (this.localDisc && this.localDisc.isActive) ? '1.0' : '0.4';
        }
    }

    showBanner(text, duration = 2000) {
        if (!this.bannerEl) return;
        this.bannerEl.innerText = text;
        this.bannerEl.style.opacity = '1';
        this.bannerEl.style.transform = 'translate(-50%, -50%) scale(1)';

        setTimeout(() => {
            this.bannerEl.style.opacity = '0';
            this.bannerEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
        }, duration);
    }

    returnToMenu() {
        this.gameState = 'menu';
        this.viewGameOver.style.display = 'none';
        this.viewLobby.style.display = 'none';
        this.viewHUD.style.display = 'none';
        this.viewMenu.style.display = 'flex';
        this.powerupManager.clear();
    }

    pause() {
        soundEngine.stopMusic();
    }

    resume() {
        this.lastTime = performance.now();
        if (this.gameState === 'playing') {
            soundEngine.startMusic();
        }
    }

    handleBackButton() {
        if (this.gameState === 'playing') {
            this.returnToMenu();
        } else if (this.gameState === 'lobby') {
            this.lan.disconnect();
            this.returnToMenu();
        } else {
            if (window.AndroidBridge && window.AndroidBridge.exitGame) {
                window.AndroidBridge.exitGame();
            }
        }
    }

    loop(currentTime) {
        requestAnimationFrame((t) => this.loop(t));

        const dt = Math.min((currentTime - this.lastTime) / 1000, 0.1);
        this.lastTime = currentTime;

        // Menu Camera Orbit
        if (this.gameState === 'menu' || this.gameState === 'lobby') {
            const angle = currentTime * 0.0003;
            this.camera.position.set(Math.cos(angle) * 16, 7, Math.sin(angle) * 16);
            this.camera.lookAt(0, 1.5, 0);
            this.renderer.render(this.scene, this.camera);
            return;
        }

        if (this.gameState === 'playing') {
            // 1. Controls & Player Movement
            this.controls.update(dt);

            // Shield drain / regen
            if (this.controls.isShielding && this.fpvArms.hasDisc) {
                this.shieldEnergy = Math.max(0, this.shieldEnergy - dt * 28);
                if (this.shieldEnergy <= 0) this.controls.isShielding = false;
            } else {
                this.shieldEnergy = Math.min(this.maxShieldEnergy, this.shieldEnergy + dt * 18);
            }

            // Power-up duration
            if (this.activePowerup) {
                this.powerupTimer -= dt;
                if (this.powerupTimer <= 0) {
                    this.activePowerup = null;
                    this.moveSpeed = 7.8;
                }
            }

            // Move player position relative to camera forward/right
            if (this.isAlive && this.controls.isMoving) {
                this.playerVel.copy(this.controls.worldMoveVec).multiplyScalar(this.moveSpeed);
                this.playerPos.addScaledVector(this.controls.worldMoveVec, this.moveSpeed * dt);
            } else {
                this.playerVel.set(0, 0, 0);
            }

            // Clamp player in arena
            const arenaRadius = (this.arena.radius || 17) - 1.2;
            const distCenter = Math.sqrt(this.playerPos.x * this.playerPos.x + this.playerPos.z * this.playerPos.z);
            if (distCenter > arenaRadius) {
                this.playerPos.x = (this.playerPos.x / distCenter) * arenaRadius;
                this.playerPos.z = (this.playerPos.z / distCenter) * arenaRadius;
            }

            // Update Camera Position (First-Person Eye Level)
            this.camera.position.x = this.playerPos.x;
            this.camera.position.z = this.playerPos.z;

            // Head bobbing when running
            let bobY = 0;
            if (this.controls.isMoving && this.isAlive) {
                bobY = Math.sin(currentTime * 0.012) * 0.05;
            }
            this.camera.position.y = 1.72 + bobY;

            // Camera Screen Shake
            if (this.screenShake > 0) {
                this.screenShake -= dt * 1.5;
                this.camera.position.x += (Math.random() - 0.5) * this.screenShake;
                this.camera.position.y += (Math.random() - 0.5) * this.screenShake;
            }

            // Update FPV Arms
            this.fpvArms.update(dt, this.controls.isMoving, this.controls.isShielding);

            // Update Local Disc
            this.localPlayer.position.copy(this.playerPos);
            this.localDisc.update(dt, this.arena, this.arena.obstacles, null);

            // Check if local disc returned and caught
            if (!this.localDisc.isActive && !this.fpvArms.hasDisc) {
                this.fpvArms.catchDisc();
            }

            // 2. Update Remote Combatants & Bots
            const activeCombatantsList = [];
            for (const [id, rc] of this.remoteCombatants) {
                if (rc.ai && rc.isAlive) {
                    rc.ai.update(dt);

                    // If host in multiplayer, broadcast bot position
                    if (this.lan.isHost && this.lan.isConnected) {
                        if (!rc.lastNetSyncTime || currentTime - rc.lastNetSyncTime >= 50) {
                            rc.lastNetSyncTime = currentTime;
                            this.lan.send({
                                type: 'pos',
                                id: rc.id,
                                x: Math.round(rc.character.position.x * 100) / 100,
                                z: Math.round(rc.character.position.z * 100) / 100,
                                yaw: Math.round(rc.character.rotationY * 100) / 100,
                                pitch: 0,
                                shielding: rc.character.isShielding ? 1 : 0,
                                hp: Math.round(rc.character.hp)
                            });
                        }
                    }
                } else if (!rc.ai && rc.targetPos) {
                    // Smoothly interpolate remote LAN player movement without lag or jitter
                    rc.character.position.lerp(rc.targetPos, Math.min(1.0, dt * 18));
                    rc.character.group.position.copy(rc.character.position);
                    rc.character.rotationY += (rc.targetYaw - rc.character.rotationY) * Math.min(1.0, dt * 16);
                    rc.character.group.rotation.y = rc.character.rotationY;
                }

                // Billboard name label to face camera
                if (rc.nameLabel) {
                    rc.nameLabel.quaternion.copy(this.camera.quaternion);
                }

                // Update their disc and check deflections & combatant collisions
                rc.disc.update(dt, this.arena, this.arena.obstacles, this.localPlayer);

                if (rc.disc.isActive) {
                    for (const [otherId, otherRc] of this.remoteCombatants) {
                        if (otherId !== id && otherRc.isAlive && otherRc.character.isAlive && rc.disc.owner !== otherRc.character) {
                            rc.disc.checkCombatantCollision(otherRc.character);
                            if (!otherRc.character.isAlive && otherRc.isAlive) {
                                otherRc.isAlive = false;
                                this.showKillfeed(rc.name, otherRc.name);
                                rc.disc.recall();
                                setTimeout(() => {
                                    if (this.gameState === 'playing' && otherRc.character) {
                                        const spawns = [
                                            new THREE.Vector3(0, 0, -11),
                                            new THREE.Vector3(0, 0, 11),
                                            new THREE.Vector3(-11, 0, 0),
                                            new THREE.Vector3(11, 0, 0)
                                        ];
                                        const sp = spawns[otherRc.slot % 4];
                                        otherRc.character.reset(sp.x, sp.z, 0);
                                        otherRc.isAlive = true;
                                        otherRc.hp = 100;
                                        otherRc.disc.catchByOwner();
                                    }
                                }, 3500);
                            }
                        }
                    }
                }

                // Check collision between local disc and remote player
                if (this.localDisc.isActive && this.localDisc.owner === this.localPlayer && rc.isAlive && rc.character.isAlive) {
                    const distToRemote = this.localDisc.position.distanceTo(new THREE.Vector3(rc.character.position.x, 1.4, rc.character.position.z));
                    if (distToRemote < 1.1) {
                        const dmg = this.activePowerup === 'overcharge' ? 40 : 25;
                        soundEngine.playHit();
                        rc.character.takeDamage(dmg);
                        this.localDisc.recall();

                        if (this.lan.isConnected) {
                            this.lan.send({
                                type: 'hit',
                                targetId: rc.id,
                                damage: dmg,
                                attackerName: this.username
                            });
                        }

                        if (!rc.character.isAlive) {
                            rc.isAlive = false;
                            this.localKills++;
                            this.localScore += 150;
                            this.updateScoreHUD();
                            this.showKillfeed(this.username, rc.name);
                            if (this.lan.isConnected) {
                                this.lan.send({
                                    type: 'derez',
                                    victimId: rc.id,
                                    victimName: rc.name,
                                    killerName: this.username
                                });
                            }
                            if (this.localKills >= this.killsToWin) {
                                this.endMatch(this.username, true);
                            } else {
                                // Respawn bot after 3.5s in solo / offline match
                                setTimeout(() => {
                                    if (this.gameState === 'playing' && rc.character) {
                                        const spawns = [
                                            new THREE.Vector3(0, 0, -11),
                                            new THREE.Vector3(0, 0, 11),
                                            new THREE.Vector3(-11, 0, 0),
                                            new THREE.Vector3(11, 0, 0)
                                        ];
                                        const sp = spawns[rc.slot % 4];
                                        rc.character.reset(sp.x, sp.z, 0);
                                        rc.isAlive = true;
                                        rc.hp = 100;
                                        rc.disc.catchByOwner();
                                    }
                                }, 3500);
                            }
                        }
                    }
                }

                activeCombatantsList.push({
                    position: rc.character.position,
                    isAlive: rc.isAlive && rc.character.isAlive,
                    slot: rc.slot,
                    name: rc.name
                });
            }

            // 3. Power-ups Update
            const allPlayers = [
                { position: this.playerPos, isAlive: this.isAlive, isLocal: true },
                ...Array.from(this.remoteCombatants.values()).map(rc => ({ position: rc.character.position, isAlive: rc.isAlive, isLocal: false }))
            ];

            this.powerupManager.update(dt, allPlayers, (collectedBy, pType) => {
                if (collectedBy.isLocal) {
                    this.activePowerup = pType.id;
                    this.powerupTimer = pType.duration;
                    if (pType.id === 'speed') this.moveSpeed = 12.5;
                    if (pType.id === 'shield') this.shieldEnergy = 150;
                    if (pType.id === 'recall') this.localDisc.catchByOwner();

                    soundEngine.playDeflect();
                    this.showBanner(pType.name, 1800);
                }
            });

            // 4. Update Compass Radar & Visor Lock-On (Zero Allocation / High FPS)
            this.updateCompassRadar(activeCombatantsList);

            // 5. Broadcast Position over LAN (Throttled 20 Hz / 50ms interval)
            if (this.lan.isConnected) {
                if (!this.lastNetSyncTime || currentTime - this.lastNetSyncTime >= 50) {
                    this.lastNetSyncTime = currentTime;
                    this.lan.send({
                        type: 'pos',
                        id: this.lan.localPlayerId,
                        x: Math.round(this.playerPos.x * 100) / 100,
                        z: Math.round(this.playerPos.z * 100) / 100,
                        yaw: Math.round(this.controls.yaw * 100) / 100,
                        pitch: Math.round(this.controls.pitch * 100) / 100,
                        shielding: this.controls.isShielding ? 1 : 0,
                        hp: Math.round(this.playerHp)
                    });
                }
            }

            this.updateHUD();
        }

        this.renderer.render(this.scene, this.camera);
    }

    updateCompassRadar(enemies) {
        if (!this.radarEl || !this.radarPips) return;

        // Player look yaw (0 is North)
        const currentYaw = this.controls.yaw;

        let hasLockOn = false;
        let lockDist = 0;
        let pipIdx = 0;

        for (const en of enemies) {
            if (!en.isAlive) continue;

            // Angle to enemy from player
            const dx = en.position.x - this.playerPos.x;
            const dz = en.position.z - this.playerPos.z;
            const dist = Math.hypot(dx, dz);
            const angleToEnemy = Math.atan2(dx, dz);

            // Relative angle from current camera look
            let relAngle = angleToEnemy - (-currentYaw);
            while (relAngle < -Math.PI) relAngle += Math.PI * 2;
            while (relAngle > Math.PI) relAngle -= Math.PI * 2;

            // Check center crosshair lock-on (within 12 degrees)
            if (Math.abs(relAngle) < 0.22 && dist < 22) {
                hasLockOn = true;
                lockDist = dist;
            }

            // Project onto radar strip (-70 deg to +70 deg FOV)
            const fov = 1.25; // radians
            if (Math.abs(relAngle) < fov && pipIdx < this.radarPips.length) {
                const normX = (relAngle / fov) * 50 + 50; // 0 to 100%
                const pip = this.radarPips[pipIdx++];
                const color = PLAYER_SLOT_COLORS[en.slot % 4];
                pip.style.display = 'block';
                pip.style.background = color.hex;
                pip.style.boxShadow = `0 0 8px ${color.hex}`;
                pip.style.left = `${normX}%`;
            }
        }

        // Hide unused pips in pool
        for (let i = pipIdx; i < this.radarPips.length; i++) {
            this.radarPips[i].style.display = 'none';
        }

        if (this.crosshairDistEl) {
            this.crosshairDistEl.innerText = hasLockOn ? `${Math.round(lockDist)}m` : '--';
        }

        if (this.crosshairLock) {
            this.crosshairLock.style.opacity = hasLockOn ? '1.0' : '0.2';
            this.crosshairLock.style.borderColor = hasLockOn ? '#ff3800' : '#00f0ff';
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.tronGame = new TronFPVGame();
});
