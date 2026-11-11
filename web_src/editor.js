// Tron: Legacy Custom Arena & Level Editor
// 100% Offline with localStorage persistence

export class TronLevelEditor {
    constructor(onPlayCustomLevel) {
        this.onPlayCustomLevel = onPlayCustomLevel;

        this.customLevel = {
            id: 'custom_1',
            name: 'User Grid Alpha',
            shape: 'octagon',
            radius: 18,
            themeColor: 0x00f0ff,
            themeHex: '#00f0ff',
            opponentSkin: 'rinzler',
            difficulty: 'hard',
            roundsToWin: 3,
            pylons: [
                { x: -5, z: 0, radius: 1.0 },
                { x: 5, z: 0, radius: 1.0 }
            ]
        };

        this.loadSavedLevels();
        this.initUI();
    }

    loadSavedLevels() {
        try {
            const saved = localStorage.getItem('tron_custom_arena');
            if (saved) {
                this.customLevel = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not read localStorage', e);
        }
    }

    saveCurrentLevel() {
        try {
            localStorage.setItem('tron_custom_arena', JSON.stringify(this.customLevel));
        } catch (e) {
            console.warn('Could not write localStorage', e);
        }
    }

    initUI() {
        this.modal = document.getElementById('modal-editor');
        this.inputName = document.getElementById('editor-arena-name');
        this.selectShape = document.getElementById('editor-shape');
        this.sliderRadius = document.getElementById('editor-radius');
        this.radiusVal = document.getElementById('editor-radius-val');
        this.selectColor = document.getElementById('editor-color');
        this.selectOpponent = document.getElementById('editor-opponent');
        this.selectDifficulty = document.getElementById('editor-difficulty');
        this.pylonListEl = document.getElementById('editor-pylons-list');
        this.btnAddPylon = document.getElementById('btn-add-pylon');
        this.btnSave = document.getElementById('btn-editor-save');
        this.btnPlay = document.getElementById('btn-editor-play');
        this.btnClose = document.getElementById('btn-editor-close');

        if (this.sliderRadius && this.radiusVal) {
            this.sliderRadius.addEventListener('input', () => {
                this.customLevel.radius = parseInt(this.sliderRadius.value, 10);
                this.radiusVal.innerText = `${this.customLevel.radius}m`;
            });
        }

        if (this.selectShape) {
            this.selectShape.addEventListener('change', () => {
                this.customLevel.shape = this.selectShape.value;
            });
        }

        if (this.selectColor) {
            this.selectColor.addEventListener('change', () => {
                const hex = this.selectColor.value;
                this.customLevel.themeHex = hex;
                this.customLevel.themeColor = parseInt(hex.replace('#', '0x'), 16);
            });
        }

        if (this.selectOpponent) {
            this.selectOpponent.addEventListener('change', () => {
                this.customLevel.opponentSkin = this.selectOpponent.value;
            });
        }

        if (this.selectDifficulty) {
            this.selectDifficulty.addEventListener('change', () => {
                this.customLevel.difficulty = this.selectDifficulty.value;
            });
        }

        if (this.btnAddPylon) {
            this.btnAddPylon.addEventListener('click', () => {
                if (this.customLevel.pylons.length >= 6) return;
                const r = 0.9;
                const x = Math.round((Math.random() - 0.5) * (this.customLevel.radius - 6));
                const z = Math.round((Math.random() - 0.5) * (this.customLevel.radius - 6));
                this.customLevel.pylons.push({ x, z, radius: r });
                this.renderPylonList();
            });
        }

        if (this.btnSave) {
            this.btnSave.addEventListener('click', () => {
                if (this.inputName) this.customLevel.name = this.inputName.value || 'Custom Grid';
                this.saveCurrentLevel();
                const origText = this.btnSave.innerText;
                this.btnSave.innerText = 'SAVED ✓';
                setTimeout(() => { if (this.btnSave) this.btnSave.innerText = origText; }, 1500);
            });
        }

        if (this.btnPlay) {
            this.btnPlay.addEventListener('click', () => {
                if (this.inputName) this.customLevel.name = this.inputName.value || 'Custom Grid';
                this.saveCurrentLevel();
                this.hide();
                if (this.onPlayCustomLevel) {
                    this.onPlayCustomLevel(this.customLevel);
                }
            });
        }

        if (this.btnClose) {
            this.btnClose.addEventListener('click', () => this.hide());
        }
    }

    renderPylonList() {
        if (!this.pylonListEl) return;
        this.pylonListEl.innerHTML = '';

        this.customLevel.pylons.forEach((p, idx) => {
            const div = document.createElement('div');
            div.className = 'pylon-item';
            div.innerHTML = `
                <span>Pylon #${idx + 1} (X: ${p.x}, Z: ${p.z})</span>
                <button class="btn-tron-small btn-del-pylon" data-idx="${idx}">✕</button>
            `;
            this.pylonListEl.appendChild(div);
        });

        const delButtons = this.pylonListEl.querySelectorAll('.btn-del-pylon');
        delButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx, 10);
                if (!isNaN(idx)) {
                    this.customLevel.pylons.splice(idx, 1);
                    this.renderPylonList();
                }
            });
        });
    }

    show() {
        if (!this.modal) return;
        if (this.inputName) this.inputName.value = this.customLevel.name;
        if (this.selectShape) this.selectShape.value = this.customLevel.shape;
        if (this.sliderRadius) this.sliderRadius.value = this.customLevel.radius;
        if (this.radiusVal) this.radiusVal.innerText = `${this.customLevel.radius}m`;
        if (this.selectColor) this.selectColor.value = this.customLevel.themeHex;
        if (this.selectOpponent) this.selectOpponent.value = this.customLevel.opponentSkin;
        if (this.selectDifficulty) this.selectDifficulty.value = this.customLevel.difficulty;

        this.renderPylonList();
        this.modal.style.display = 'flex';
    }

    hide() {
        if (this.modal) {
            this.modal.style.display = 'none';
        }
    }
}
