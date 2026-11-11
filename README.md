# Tron Disc Battle 3D

A 3D multiplayer arena combat game inspired by Tron, developed with Three.js, WebSockets, and packaged as a native Android APK using an accelerated WebView and custom Java LAN server.

## Features
- **3D Disc Combat:** Curved throws, Ricochet, Shield Block, and Disc Recall mechanics.
- **Multiplayer LAN:** Built-in Android WebSocket server + UDP auto-discovery for local Wi-Fi and mobile hotspots (no internet required for multiplayer).
- **Online Global Leaderboard:** Connected via Supabase REST API.
- **High FPS & Low Latency:** Optimized instanced arena geometry, Phong shading, pre-allocated math scratchpads, and 90Hz+ refresh rate unlock.
- **Dual Perspective:** Smooth toggle between FPV (First-Person with animated cyber-arms) and TPV (Third-Person).

---

## 📲 Download & Install Android APK

You can download the ready-to-play Android APK directly from the GitHub Releases:

👉 **[Download Latest TronDiscBattle.apk](../../releases/latest)**

1. Download the `.apk` on your Android device.
2. Open and tap **Install** (allow *Install from Unknown Sources* if prompted).
3. Play offline with bots or host/join LAN matches over Wi-Fi!

---

## Development

- Web source located in `web_src/`
- Bundle build: `npx esbuild web_src/main.js --bundle --minify --outfile=web_src/bundle.js`
- Android wrapper located in `tron_test/`
