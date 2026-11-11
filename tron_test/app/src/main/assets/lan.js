// Tron: Legacy LAN Multiplayer Engine (Up to 4 Players, 1 Host)
// 100% Offline over Local Wi-Fi / Mobile Hotspot

export const PLAYER_SLOT_COLORS = [
    { hex: '#00f0ff', num: 0x00f0ff, name: 'Cyan' },
    { hex: '#ff3800', num: 0xff3800, name: 'Orange' },
    { hex: '#cc44ff', num: 0xcc44ff, name: 'Violet' },
    { hex: '#00ff66', num: 0x00ff66, name: 'Emerald' }
];

export class TronLanManager {
    constructor(onNetMessageCallback) {
        this.onNetMessage = onNetMessageCallback;

        this.isHost = false;
        this.isSolo = false;
        this.isConnected = false;
        this.socket = null;

        this.localPlayerId = null;
        this.localSlot = 0;
        this.localUsername = localStorage.getItem('tron_username') || 'Program_' + Math.floor(Math.random() * 899 + 100);

        this.players = new Map(); // id -> { id, slot, name, color, x, z, yaw, pitch, hp, score, isBot, characterRef }
        this.discoveredServers = [];
        this.syncInterval = null;

        // Hook UDP discovery callback from Android
        window.onLanServerFound = (beaconStr) => {
            this.handleDiscoveredBeacon(beaconStr);
        };
    }

    setUsername(name) {
        this.localUsername = name.trim() || 'User';
        localStorage.setItem('tron_username', this.localUsername);
    }

    // --- Host a LAN Server ---
    startHosting(hostName, maxPlayers = 4, arena = 'coliseum', fillWithBots = true) {
        this.isHost = true;
        this.isSolo = false;
        this.fillWithBots = fillWithBots;
        this.arena = arena;
        this.maxPlayers = maxPlayers;

        // Reset and register local host immediately in Slot 0
        this.players.clear();
        this.localPlayerId = 'host_' + Math.random().toString(36).substring(2, 7);
        this.localSlot = 0;
        this.players.set(this.localPlayerId, {
            id: this.localPlayerId,
            slot: 0,
            name: this.localUsername,
            color: PLAYER_SLOT_COLORS[0],
            isBot: false,
            score: 0,
            hp: 100
        });

        if (window.AndroidBridge && window.AndroidBridge.startHosting) {
            window.AndroidBridge.startHosting(hostName, maxPlayers, arena);
        }

        // Host connects to local embedded server
        setTimeout(() => {
            this.connectToServer('127.0.0.1', 8888, () => {
                // Send register packet so server associates handler
                this.send({
                    type: 'register',
                    id: this.localPlayerId,
                    name: this.localUsername,
                    isHost: true,
                    arena: this.arena
                });
            });
        }, 150);
    }

    // --- Join a LAN Server ---
    connectToHost(rawIp, defaultPort = 8888) {
        this.isHost = false;
        this.isSolo = false;
        this.players.clear();

        let ip = (rawIp || '').trim();
        let port = defaultPort;
        if (ip.includes(':')) {
            const parts = ip.split(':');
            ip = parts[0].trim();
            port = parseInt(parts[1], 10) || defaultPort;
        }

        this.connectToServer(ip, port, () => {
            this.localPlayerId = 'client_' + Math.random().toString(36).substring(2, 7);
            this.send({
                type: 'register',
                id: this.localPlayerId,
                name: this.localUsername,
                isHost: false
            });
        });
    }

    fillRosterWithBots() {
        if (!this.isHost) return;
        const botNames = ['Rinzler', 'CLU', 'Anon'];
        const usedSlots = new Set(Array.from(this.players.values()).map(p => p.slot));
        let bIdx = 0;
        for (let s = 1; s < this.maxPlayers && s < 4; s++) {
            if (!usedSlots.has(s)) {
                const botId = 'lan_bot_' + s;
                this.players.set(botId, {
                    id: botId,
                    slot: s,
                    name: botNames[bIdx % botNames.length],
                    color: PLAYER_SLOT_COLORS[s],
                    isBot: true,
                    score: 0,
                    hp: 100
                });
                bIdx++;
            }
        }
        // Announce filled roster to all connected players
        const roster = Array.from(this.players.values());
        this.send({
            type: 'roster_sync',
            players: roster,
            arena: this.arena
        });
    }

    // --- Solo / Offline Practice Mode ---
    startSolo(botCount = 1, arena = 'coliseum') {
        this.isHost = false;
        this.isSolo = true;
        this.localPlayerId = 'solo_player';
        this.localSlot = 0;
        this.arena = arena;

        this.players.clear();
        this.players.set(this.localPlayerId, {
            id: this.localPlayerId,
            slot: 0,
            name: this.localUsername,
            color: PLAYER_SLOT_COLORS[0],
            isBot: false,
            score: 0,
            hp: 100
        });

        const botNames = ['Rinzler', 'CLU', 'Anon'];
        for (let i = 0; i < botCount; i++) {
            const botId = 'bot_' + (i + 1);
            const slot = i + 1;
            this.players.set(botId, {
                id: botId,
                slot: slot,
                name: botNames[i % botNames.length],
                color: PLAYER_SLOT_COLORS[slot % 4],
                isBot: true,
                score: 0,
                hp: 100
            });
        }
    }

    connectToServer(ip, port, onOpen) {
        if (this.socket) {
            try { this.socket.close(); } catch (_) {}
        }

        const url = `ws://${ip}:${port}`;
        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            this.isConnected = true;
            if (onOpen) onOpen();
            this.startHeartbeat();
        };

        this.socket.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                this.handleIncomingMessage(msg);
            } catch (e) {
                console.error('Failed to parse net packet', e);
            }
        };

        this.socket.onclose = () => {
            const wasConnected = this.isConnected;
            this.isConnected = false;
            this.stopHeartbeat();
            if (wasConnected && !this.isHost && this.onNetMessage) {
                this.onNetMessage({ type: 'server_closed' });
            }
        };

        this.socket.onerror = (err) => {
            console.warn('LAN socket error:', err);
        };
    }

    send(packet) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(packet));
        }
    }

    startHeartbeat() {
        if (this.syncInterval) clearInterval(this.syncInterval);
        this.syncInterval = setInterval(() => {
            if (!this.isConnected) return;
            // Send ping/keepalive
            this.send({ type: 'ping', t: Date.now() });
        }, 2000);
    }

    stopHeartbeat() {
        if (this.syncInterval) {
            clearInterval(this.syncInterval);
            this.syncInterval = null;
        }
    }

    handleIncomingMessage(msg) {
        if (msg.type === 'ping') return;

        // Registration & Roster sync
        if (msg.type === 'register') {
            if (!this.players.has(msg.id)) {
                // Find next available slot
                const usedSlots = new Set(Array.from(this.players.values()).map(p => p.slot));
                let freeSlot = 1;
                while (usedSlots.has(freeSlot) && freeSlot < 4) freeSlot++;
                if (freeSlot >= 4) freeSlot = this.players.size % 4;

                this.players.set(msg.id, {
                    id: msg.id,
                    slot: freeSlot,
                    name: msg.name,
                    color: PLAYER_SLOT_COLORS[freeSlot % 4],
                    isBot: false,
                    score: 0,
                    hp: 100
                });

                // If host, announce updated roster to everyone
                if (this.isHost) {
                    const roster = Array.from(this.players.values());
                    this.send({
                        type: 'roster_sync',
                        players: roster,
                        arena: this.arena
                    });
                }
            }
        } else if (msg.type === 'roster_sync') {
            this.players.clear();
            for (const p of msg.players) {
                this.players.set(p.id, p);
                if (p.id === this.localPlayerId) {
                    this.localSlot = p.slot;
                }
            }
            if (msg.arena) this.arena = msg.arena;
        } else if (msg.type === 'player_left' || msg.type === 'leave') {
            if (this.players.has(msg.id)) {
                this.players.delete(msg.id);
                if (this.isHost) {
                    const roster = Array.from(this.players.values());
                    this.send({
                        type: 'roster_sync',
                        players: roster,
                        arena: this.arena
                    });
                }
            }
        }

        // Pass packet to main game handler
        if (this.onNetMessage) {
            this.onNetMessage(msg);
        }
    }

    handleDiscoveredBeacon(beaconStr) {
        // Format: TRON_LAN|hostName|hostIp|port|currentPlayers|maxPlayers|arena
        const parts = beaconStr.split('|');
        if (parts.length < 7) return;

        const serverInfo = {
            name: parts[1],
            ip: parts[2],
            port: parseInt(parts[3], 10),
            currentPlayers: parseInt(parts[4], 10),
            maxPlayers: parseInt(parts[5], 10),
            arena: parts[6],
            timestamp: Date.now()
        };

        const existingIdx = this.discoveredServers.findIndex(s => s.ip === serverInfo.ip);
        if (existingIdx >= 0) {
            this.discoveredServers[existingIdx] = serverInfo;
        } else {
            this.discoveredServers.push(serverInfo);
        }

        if (window.onLanServersListUpdated) {
            window.onLanServersListUpdated(this.discoveredServers);
        }
    }

    startDiscovery() {
        this.discoveredServers = [];
        if (window.AndroidBridge && window.AndroidBridge.startDiscovery) {
            window.AndroidBridge.startDiscovery();
        }
    }

    stopDiscovery() {
        if (window.AndroidBridge && window.AndroidBridge.stopDiscovery) {
            window.AndroidBridge.stopDiscovery();
        }
    }

    disconnect() {
        if (this.isConnected && this.socket && this.localPlayerId) {
            this.send({ type: 'leave', id: this.localPlayerId });
        }
        if (this.isHost && window.AndroidBridge && window.AndroidBridge.stopHosting) {
            window.AndroidBridge.stopHosting();
        }
        this.stopDiscovery();
        this.stopHeartbeat();
        if (this.socket) {
            try { this.socket.close(); } catch (_) {}
            this.socket = null;
        }
        this.isConnected = false;
        this.players.clear();
    }
}

// --- Supabase Cloud Leaderboard Integration ---
export const SUPABASE_URL = "https://sspgvgpfhnucciizwtzj.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcGd2Z3BmaG51Y2NpaXp3dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMTg4NDksImV4cCI6MjEwNzc5NDg0OX0.OV_nPbu3q2J_hbHD_bUTETnj5jJ92joLnPLDYofOCG8";

// Blacklist of bots and preset AI programs that must NEVER appear on the leaderboard
export const BOT_NAMES = ['rinzler', 'clu', 'anon', 'tron', 'quorra', 'flynn', 'sark', 'bit', 'bot 1', 'bot 2', 'bot 3'];

export async function fetchLeaderboard(limit = 10) {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?select=*&order=win_score.desc&limit=30`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        if (!res.ok) {
            console.warn('Leaderboard fetch status:', res.status);
            return [];
        }
        const rows = await res.json();
        // Strict filter: Exclude any bots or AI names
        const humanOnly = rows.filter(r => {
            const name = (r.player_name || '').toLowerCase().trim();
            return name && !BOT_NAMES.includes(name) && !name.startsWith('bot');
        });
        return humanOnly.slice(0, limit);
    } catch (e) {
        console.warn('Offline or error fetching leaderboard:', e);
        return [];
    }
}

export async function submitLeaderboardScore(playerName, winScore, kills = 0, arena = 'coliseum') {
    const cleanName = (playerName || '').trim();
    if (!cleanName || BOT_NAMES.includes(cleanName.toLowerCase()) || cleanName.toLowerCase().startsWith('bot')) {
        // Prevent bots or empty names from posting to leaderboard
        return null;
    }

    try {
        // 1. Check if human player already has an existing score on leaderboard
        const checkRes = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?player_name=eq.${encodeURIComponent(cleanName)}&select=*`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (checkRes.ok) {
            const existing = await checkRes.json();
            if (existing && existing.length > 0) {
                const prev = existing[0];
                // Only update if new score is higher or equal
                if (winScore > prev.win_score || (winScore === prev.win_score && kills > prev.kills)) {
                    const patchRes = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?id=eq.${prev.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': SUPABASE_ANON_KEY,
                            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                            'Prefer': 'return=representation'
                        },
                        body: JSON.stringify({
                            win_score: Math.max(winScore, prev.win_score),
                            kills: Math.max(kills, prev.kills),
                            arena: arena || prev.arena
                        })
                    });
                    return patchRes.ok ? await patchRes.json() : null;
                } else {
                    return prev;
                }
            }
        }

        // 2. Insert new record for real human player
        const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                player_name: cleanName,
                win_score: Math.max(0, winScore),
                kills: Math.max(0, kills),
                arena: arena || 'coliseum'
            })
        });
        if (!res.ok) {
            console.warn('Leaderboard post status:', res.status);
            return null;
        }
        const data = await res.json();
        return Array.isArray(data) ? data[0] : data;
    } catch (e) {
        console.warn('Offline or error submitting score:', e);
        return null;
    }
}
