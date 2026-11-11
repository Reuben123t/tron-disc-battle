// Tron: Legacy Optimized Procedural Web Audio Synthesizer
// Zero memory allocation in audio loop, eliminates Android audio buffer timeouts

class TronAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.masterVolume = 0.8;
        this.sfxVolume = 0.9;
        this.musicVolume = 0.55;
        this.musicPlaying = false;
        this.step = 0;
        this.bpm = 126;
        this.timer = null;

        this.bassFreqs = [73.42, 87.31, 98.00, 110.00, 130.81, 146.83];
        this.snareBuffer = null;
        this.hiHatBuffer = null;
    }

    init() {
        if (this.ctx) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            this.ctx = new AudioCtx({ latencyHint: 'interactive' });

            this.masterNode = this.ctx.createGain();
            this.masterNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
            this.masterNode.connect(this.ctx.destination);

            this.musicGain = this.ctx.createGain();
            this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);

            this.filterNode = this.ctx.createBiquadFilter();
            this.filterNode.type = 'lowpass';
            this.filterNode.frequency.setValueAtTime(2200, this.ctx.currentTime);
            this.filterNode.Q.setValueAtTime(2.5, this.ctx.currentTime);

            this.musicGain.connect(this.filterNode);
            this.filterNode.connect(this.masterNode);

            this.sfxGain = this.ctx.createGain();
            this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
            this.sfxGain.connect(this.masterNode);

            // Pre-generate reusable noise buffers ONCE to prevent memory thrashing
            const sampleRate = this.ctx.sampleRate;
            const snareLen = Math.floor(sampleRate * 0.12);
            this.snareBuffer = this.ctx.createBuffer(1, snareLen, sampleRate);
            const sData = this.snareBuffer.getChannelData(0);
            for (let i = 0; i < snareLen; i++) {
                sData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (sampleRate * 0.03));
            }

            const hatLen = Math.floor(sampleRate * 0.035);
            this.hiHatBuffer = this.ctx.createBuffer(1, hatLen, sampleRate);
            const hData = this.hiHatBuffer.getChannelData(0);
            for (let i = 0; i < hatLen; i++) {
                hData[i] = (Math.random() * 2 - 1) * 0.25;
            }
        } catch (e) {
            console.warn('Audio init error', e);
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    startMusic() {
        if (this.musicPlaying) return;
        this.init();
        this.resume();
        this.musicPlaying = true;
        this.step = 0;
        const stepInterval = (60 / this.bpm) / 4; // 16th notes

        const scheduleStep = () => {
            if (!this.musicPlaying) return;
            const time = this.ctx.currentTime + 0.04;
            this.playMusicStep(this.step, time);
            this.step = (this.step + 1) % 32;
            this.timer = setTimeout(scheduleStep, stepInterval * 1000);
        };

        scheduleStep();
    }

    stopMusic() {
        this.musicPlaying = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    playMusicStep(step, time) {
        if (this.isMuted || !this.ctx || this.ctx.state !== 'running') return;

        // 1. Kick Drum (Beats 0, 4, 8, 12, 16, 20, 24, 28)
        if (step % 4 === 0) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(130, time);
            osc.frequency.exponentialRampToValueAtTime(36, time + 0.1);

            gain.gain.setValueAtTime(0.65, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

            osc.connect(gain);
            gain.connect(this.musicGain);
            osc.start(time);
            osc.stop(time + 0.2);
        }

        // 2. Reusable Snare buffer on beats 4, 12, 20, 28
        if (step % 8 === 4 && this.snareBuffer) {
            const noise = this.ctx.createBufferSource();
            noise.buffer = this.snareBuffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1600, time);
            filter.Q.setValueAtTime(1.5, time);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.35, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.musicGain);
            noise.start(time);
            noise.stop(time + 0.14);
        }

        // 3. Reusable Hi-Hat on 16th notes
        if (step % 2 === 0 && this.hiHatBuffer) {
            const noise = this.ctx.createBufferSource();
            noise.buffer = this.hiHatBuffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(7500, time);

            const gain = this.ctx.createGain();
            const velocity = (step % 4 === 2) ? 0.18 : 0.08;
            gain.gain.setValueAtTime(velocity, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.musicGain);
            noise.start(time);
            noise.stop(time + 0.04);
        }

        // 4. Daft Punk Style Arp Synth Bass
        const bassPattern = [0, 0, 1, 0, 2, 0, 1, 3, 0, 0, 1, 0, 2, 0, 4, 3];
        const noteIdx = bassPattern[step % bassPattern.length];
        const freq = this.bassFreqs[noteIdx % this.bassFreqs.length];

        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();

        bassOsc.type = 'sawtooth';
        bassOsc.frequency.setValueAtTime(freq, time);

        bassGain.gain.setValueAtTime(0.28, time);
        bassGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

        bassOsc.connect(bassGain);
        bassGain.connect(this.musicGain);

        bassOsc.start(time);
        bassOsc.stop(time + 0.11);
    }

    playDiscThrow(isPlayer = true) {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(isPlayer ? 920 : 640, time);
        osc.frequency.exponentialRampToValueAtTime(180, time + 0.18);

        gain.gain.setValueAtTime(0.35, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.22);
    }

    playWallBounce() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1600, time);
        osc.frequency.exponentialRampToValueAtTime(320, time + 0.18);

        gain.gain.setValueAtTime(0.45, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.22);
    }

    playDeflect() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, time);
        osc.frequency.exponentialRampToValueAtTime(1880, time + 0.16);

        gain.gain.setValueAtTime(0.55, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.24);
    }

    playRecall() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, time);
        osc.frequency.exponentialRampToValueAtTime(1200, time + 0.2);

        gain.gain.setValueAtTime(0.35, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.24);
    }

    playCatch() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(580, time);
        osc.frequency.exponentialRampToValueAtTime(150, time + 0.1);

        gain.gain.setValueAtTime(0.45, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.13);
    }

    playHit() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, time);
        osc.frequency.exponentialRampToValueAtTime(35, time + 0.18);

        gain.gain.setValueAtTime(0.65, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.24);
    }

    playDerez() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1800, time);
        osc.frequency.exponentialRampToValueAtTime(30, time + 0.65);

        gain.gain.setValueAtTime(0.5, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.7);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.72);
    }

    playUiClick() {
        if (this.isMuted) return;
        this.init();
        this.resume();
        const time = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, time);
        osc.frequency.exponentialRampToValueAtTime(1600, time + 0.04);

        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(time);
        osc.stop(time + 0.06);
    }

    announce(text) {
        if ('speechSynthesis' in window) {
            try {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.pitch = 0.65;
                utterance.rate = 1.0;
                utterance.volume = this.masterVolume * 0.85;
                window.speechSynthesis.speak(utterance);
            } catch (_) {}
        }
    }
}

export const soundEngine = new TronAudioEngine();
