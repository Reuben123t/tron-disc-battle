import * as THREE from 'three';

export class TronFPVControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;

        // FPV Camera Angles (Euler)
        this.yaw = 0;       // Horizontal (radians)
        this.pitch = 0;     // Vertical (radians)
        this.minPitch = -Math.PI / 2.6; // ~-68 deg
        this.maxPitch = Math.PI / 2.6;  // ~+68 deg

        // Movement output vectors relative to camera orientation
        this.moveInput = new THREE.Vector3(); // x: strafe, z: forward
        this.worldMoveVec = new THREE.Vector3();
        this.isMoving = false;
        this.isShielding = false;
        this.isDashing = false;
        this.curveMode = 0; // -1: left, 0: straight, 1: right

        // Touch Tracking (IDs for multi-touch support)
        this.joystickTouchId = null;
        this.lookTouchId = null;
        this.isPointerJoyActive = false;
        this.isPointerLookActive = false;

        this.joyBase = { x: 0, y: 0 };
        this.joyRadius = 55;

        this.lastLookX = 0;
        this.lastLookY = 0;
        this.lookSensitivity = 0.0038;

        // Keys for PC testing
        this.keys = {};

        // Callbacks
        this.onThrow = null;
        this.onRecall = null;
        this.onDash = null;

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.touchLayer = document.getElementById('fpv-touch-layer');
        this.joyZone = document.getElementById('fpv-joystick-zone');
        this.joyBaseEl = document.getElementById('fpv-joystick-base');
        this.joyThumbEl = document.getElementById('fpv-joystick-thumb');
        this.lookZone = document.getElementById('fpv-look-zone');

        this.btnThrow = document.getElementById('btn-fpv-throw');
        this.btnShield = document.getElementById('btn-fpv-shield');
        this.btnRecall = document.getElementById('btn-fpv-recall');
        this.btnDash = document.getElementById('btn-fpv-dash');
        this.btnCurve = document.getElementById('btn-fpv-curve');
    }

    bindEvents() {
        // --- 1. Movement Virtual Joystick (Touch + Pointer) ---
        if (this.joyZone) {
            // Native Touch events
            this.joyZone.addEventListener('touchstart', (e) => {
                if (this.joystickTouchId !== null) return;
                const touch = e.changedTouches[0];
                if (!touch) return;
                e.preventDefault();
                e.stopPropagation();

                this.joystickTouchId = touch.identifier;
                this.joyZoneRect = this.joyZone.getBoundingClientRect();
                const x = touch.clientX - this.joyZoneRect.left;
                const y = touch.clientY - this.joyZoneRect.top;

                this.joyBase = { x, y };
                if (this.joyBaseEl && this.joyThumbEl) {
                    this.joyBaseEl.style.display = 'block';
                    this.joyBaseEl.style.left = `${x}px`;
                    this.joyBaseEl.style.top = `${y}px`;
                    this.joyThumbEl.style.transform = 'translate(-50%, -50%)';
                }
            }, { passive: false });

            window.addEventListener('touchmove', (e) => {
                if (this.joystickTouchId === null) return;
                let touch = null;
                for (let i = 0; i < e.touches.length; i++) {
                    if (e.touches[i].identifier === this.joystickTouchId) {
                        touch = e.touches[i];
                        break;
                    }
                }
                if (!touch) return;
                e.preventDefault();

                if (!this.joyZoneRect) this.joyZoneRect = this.joyZone.getBoundingClientRect();
                const curX = touch.clientX - this.joyZoneRect.left;
                const curY = touch.clientY - this.joyZoneRect.top;

                const dx = curX - this.joyBase.x;
                const dy = curY - this.joyBase.y;
                const dist = Math.hypot(dx, dy);
                const angle = Math.atan2(dy, dx);

                const clampedDist = Math.min(this.joyRadius, dist);
                const thumbX = Math.cos(angle) * clampedDist;
                const thumbY = Math.sin(angle) * clampedDist;

                if (this.joyThumbEl) {
                    this.joyThumbEl.style.transform = `translate(calc(-50% + ${thumbX}px), calc(-50% + ${thumbY}px))`;
                }

                const normX = thumbX / this.joyRadius;
                const normY = thumbY / this.joyRadius;

                // normX is strafe, -normY is forward
                this.moveInput.set(normX, 0, -normY);
                this.isMoving = this.moveInput.lengthSq() > 0.02;
            }, { passive: false });

            const endTouchJoystick = (e) => {
                if (this.joystickTouchId === null) return;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    if (e.changedTouches[i].identifier === this.joystickTouchId) {
                        this.joystickTouchId = null;
                        this.moveInput.set(0, 0, 0);
                        this.isMoving = false;
                        if (this.joyBaseEl) this.joyBaseEl.style.display = 'none';
                        break;
                    }
                }
            };
            window.addEventListener('touchend', endTouchJoystick, { passive: false });
            window.addEventListener('touchcancel', endTouchJoystick, { passive: false });

            // Pointer/Mouse events for desktop debugging
            this.joyZone.addEventListener('pointerdown', (e) => {
                if (e.pointerType === 'touch') return; // Handled by touch events
                this.isPointerJoyActive = true;
                this.joyZoneRect = this.joyZone.getBoundingClientRect();
                const x = e.clientX - this.joyZoneRect.left;
                const y = e.clientY - this.joyZoneRect.top;
                this.joyBase = { x, y };
                if (this.joyBaseEl && this.joyThumbEl) {
                    this.joyBaseEl.style.display = 'block';
                    this.joyBaseEl.style.left = `${x}px`;
                    this.joyBaseEl.style.top = `${y}px`;
                    this.joyThumbEl.style.transform = 'translate(-50%, -50%)';
                }
            });

            window.addEventListener('pointermove', (e) => {
                if (!this.isPointerJoyActive || e.pointerType === 'touch') return;
                if (!this.joyZoneRect) this.joyZoneRect = this.joyZone.getBoundingClientRect();
                const curX = e.clientX - this.joyZoneRect.left;
                const curY = e.clientY - this.joyZoneRect.top;
                const dx = curX - this.joyBase.x;
                const dy = curY - this.joyBase.y;
                const dist = Math.hypot(dx, dy);
                const angle = Math.atan2(dy, dx);
                const clampedDist = Math.min(this.joyRadius, dist);
                const thumbX = Math.cos(angle) * clampedDist;
                const thumbY = Math.sin(angle) * clampedDist;
                if (this.joyThumbEl) {
                    this.joyThumbEl.style.transform = `translate(calc(-50% + ${thumbX}px), calc(-50% + ${thumbY}px))`;
                }
                const normX = thumbX / this.joyRadius;
                const normY = thumbY / this.joyRadius;
                this.moveInput.set(normX, 0, -normY);
                this.isMoving = this.moveInput.lengthSq() > 0.02;
            });

            const endPointerJoy = (e) => {
                if (!this.isPointerJoyActive || e.pointerType === 'touch') return;
                this.isPointerJoyActive = false;
                this.moveInput.set(0, 0, 0);
                this.isMoving = false;
                if (this.joyBaseEl) this.joyBaseEl.style.display = 'none';
            };
            window.addEventListener('pointerup', endPointerJoy);
            window.addEventListener('pointercancel', endPointerJoy);
        }

        // --- 2. Camera Look Drag (Right Screen Zone) ---
        if (this.lookZone) {
            // Native Touch events
            this.lookZone.addEventListener('touchstart', (e) => {
                if (e.target.closest('.fpv-action-btn') || e.target.closest('.fpv-action-pad')) return;
                if (this.lookTouchId !== null) return;
                const touch = e.changedTouches[0];
                if (!touch) return;
                e.preventDefault();
                e.stopPropagation();

                this.lookTouchId = touch.identifier;
                this.lastLookX = touch.clientX;
                this.lastLookY = touch.clientY;
            }, { passive: false });

            window.addEventListener('touchmove', (e) => {
                if (this.lookTouchId === null) return;
                let touch = null;
                for (let i = 0; i < e.touches.length; i++) {
                    if (e.touches[i].identifier === this.lookTouchId) {
                        touch = e.touches[i];
                        break;
                    }
                }
                if (!touch) return;
                e.preventDefault();

                const deltaX = touch.clientX - this.lastLookX;
                const deltaY = touch.clientY - this.lastLookY;
                this.lastLookX = touch.clientX;
                this.lastLookY = touch.clientY;

                this.yaw -= deltaX * this.lookSensitivity;
                this.pitch -= deltaY * this.lookSensitivity;
                this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));
                this.updateCameraRotation();
            }, { passive: false });

            const endTouchLook = (e) => {
                if (this.lookTouchId === null) return;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    if (e.changedTouches[i].identifier === this.lookTouchId) {
                        this.lookTouchId = null;
                        break;
                    }
                }
            };
            window.addEventListener('touchend', endTouchLook, { passive: false });
            window.addEventListener('touchcancel', endTouchLook, { passive: false });

            // Pointer/Mouse events for desktop
            this.lookZone.addEventListener('pointerdown', (e) => {
                if (e.pointerType === 'touch') return;
                if (e.target.closest('.fpv-action-btn') || e.target.closest('.fpv-action-pad')) return;
                this.isPointerLookActive = true;
                this.lastLookX = e.clientX;
                this.lastLookY = e.clientY;
            });

            window.addEventListener('pointermove', (e) => {
                if (!this.isPointerLookActive || e.pointerType === 'touch') return;
                const deltaX = e.clientX - this.lastLookX;
                const deltaY = e.clientY - this.lastLookY;
                this.lastLookX = e.clientX;
                this.lastLookY = e.clientY;

                this.yaw -= deltaX * this.lookSensitivity;
                this.pitch -= deltaY * this.lookSensitivity;
                this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));
                this.updateCameraRotation();
            });

            const endPointerLook = (e) => {
                if (!this.isPointerLookActive || e.pointerType === 'touch') return;
                this.isPointerLookActive = false;
            };
            window.addEventListener('pointerup', endPointerLook);
            window.addEventListener('pointercancel', endPointerLook);
        }

        // --- 3. Instant Action Buttons (Touch + Pointer Bindings) ---
        const bindButton = (el, onDown, onUp = null) => {
            if (!el) return;

            const handleDown = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (window.AndroidBridge && window.AndroidBridge.vibrate) {
                    window.AndroidBridge.vibrate(25);
                }
                if (onDown) onDown();
            };

            const handleUp = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onUp) onUp();
            };

            // Touch events
            el.addEventListener('touchstart', handleDown, { passive: false });
            if (onUp) {
                el.addEventListener('touchend', handleUp, { passive: false });
                el.addEventListener('touchcancel', handleUp, { passive: false });
            }

            // Pointer events
            el.addEventListener('pointerdown', (e) => {
                if (e.pointerType === 'touch') return; // Handled by touchstart
                handleDown(e);
            });
            if (onUp) {
                el.addEventListener('pointerup', (e) => {
                    if (e.pointerType === 'touch') return;
                    handleUp(e);
                });
                el.addEventListener('pointercancel', (e) => {
                    if (e.pointerType === 'touch') return;
                    handleUp(e);
                });
            }
        };

        // THROW DISC
        bindButton(this.btnThrow, () => {
            if (this.onThrow) this.onThrow(this.curveMode);
        });

        // SHIELD (Hold to deflect, release to drop - NO pointerleave so micro-movement never cancels!)
        bindButton(this.btnShield, 
            () => {
                this.isShielding = true;
                if (this.btnShield) this.btnShield.classList.add('active');
            }, 
            () => {
                this.isShielding = false;
                if (this.btnShield) this.btnShield.classList.remove('active');
            }
        );

        // RECALL
        bindButton(this.btnRecall, () => {
            if (this.onRecall) this.onRecall();
        });

        // DASH
        bindButton(this.btnDash, () => {
            this.isDashing = true;
            if (this.onDash) this.onDash();
            setTimeout(() => { this.isDashing = false; }, 250);
        });

        // CURVE MODE TOGGLE
        bindButton(this.btnCurve, () => {
            if (this.curveMode === 0) {
                this.curveMode = 1;
                this.btnCurve.innerText = 'CURVE ⤸';
            } else if (this.curveMode === 1) {
                this.curveMode = -1;
                this.btnCurve.innerText = 'CURVE ⤹';
            } else {
                this.curveMode = 0;
                this.btnCurve.innerText = 'STRAIGHT';
            }
        });

        // --- 4. Keyboard & Mouse Controls for PC debug ---
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            if (e.code === 'KeyR' && this.onRecall) this.onRecall();
            if (e.code === 'Space' && this.onDash) {
                this.isDashing = true;
                this.onDash();
                setTimeout(() => { this.isDashing = false; }, 250);
            }
            if (e.code === 'ShiftLeft' || e.code === 'KeyF') this.isShielding = true;
            if (e.code === 'KeyQ') this.curveMode = -1;
            if (e.code === 'KeyE') this.curveMode = 1;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            if (e.code === 'ShiftLeft' || e.code === 'KeyF') this.isShielding = false;
        });

        window.addEventListener('mousedown', (e) => {
            if (e.target.closest('button') || e.target.closest('.modal-content')) return;
            if (e.button === 0 && this.onThrow) {
                this.onThrow(this.curveMode);
            } else if (e.button === 2) {
                this.isShielding = true;
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 2) {
                this.isShielding = false;
            }
        });

        window.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    updateCameraRotation() {
        const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
        this.camera.quaternion.setFromEuler(euler);
    }

    getForwardVector() {
        return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).normalize();
    }

    getRightVector() {
        return new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).normalize();
    }

    getLookDirection() {
        const dir = new THREE.Vector3(0, 0, -1);
        dir.applyQuaternion(this.camera.quaternion);
        return dir;
    }

    update(dt) {
        // Keyboard fallback
        let kx = 0;
        let kz = 0;
        if (this.keys['KeyA'] || this.keys['ArrowLeft']) kx -= 1;
        if (this.keys['KeyD'] || this.keys['ArrowRight']) kx += 1;
        if (this.keys['KeyW'] || this.keys['ArrowUp']) kz += 1;
        if (this.keys['KeyS'] || this.keys['ArrowDown']) kz -= 1;

        if (this.joystickTouchId === null && !this.isPointerJoyActive) {
            if (kx !== 0 || kz !== 0) {
                this.moveInput.set(kx, 0, kz).normalize();
                this.isMoving = true;
            } else {
                this.moveInput.set(0, 0, 0);
                this.isMoving = false;
            }
        }

        // Calculate world movement vector: forward * stickZ + right * stickX
        const forward = this.getForwardVector();
        const right = this.getRightVector();

        this.worldMoveVec.set(0, 0, 0)
            .addScaledVector(forward, this.moveInput.z)
            .addScaledVector(right, this.moveInput.x);
    }
}
