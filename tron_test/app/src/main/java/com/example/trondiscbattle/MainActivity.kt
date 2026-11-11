package com.example.trondiscbattle

import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.ActivityInfo
import android.net.wifi.WifiManager
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.util.Base64
import android.view.View
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import java.io.InputStream
import java.io.OutputStream
import java.net.*
import java.security.MessageDigest
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.atomic.AtomicBoolean

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView
    private var vibrator: Vibrator? = null

    // LAN Server & Discovery
    private var lanServer: TronLanServer? = null
    private var udpBeaconBroadcaster: Thread? = null
    private var udpDiscoveryListener: Thread? = null
    private val isDiscovering = AtomicBoolean(false)
    private val isHosting = AtomicBoolean(false)
    private var multicastLock: WifiManager.MulticastLock? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Keep screen on during gameplay
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        // Lock landscape orientation
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE

        // High refresh rate support (90Hz / 120Hz / 144Hz) & Hardware Acceleration
        try {
            window.setFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED, WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                window.decorView.display?.supportedModes?.maxByOrNull { it.refreshRate }?.let { maxMode ->
                    window.attributes = window.attributes.apply {
                        preferredDisplayModeId = maxMode.modeId
                    }
                }
            }
        } catch (_: Exception) {}

        // Setup Vibrator
        vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val vibratorManager = getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
            vibratorManager?.defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
        }

        // Multicast Lock for LAN server discovery
        try {
            val wifi = applicationContext.getSystemService(Context.WIFI_SERVICE) as? WifiManager
            multicastLock = wifi?.createMulticastLock("TronLanLock")?.apply {
                setReferenceCounted(false)
                acquire()
            }
        } catch (_: Exception) {}

        // Create and configure WebView
        webView = WebView(this).apply {
            setLayerType(View.LAYER_TYPE_HARDWARE, null)
            setBackgroundColor(0xFF000000.toInt())

            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                allowFileAccess = true
                allowContentAccess = true
                allowFileAccessFromFileURLs = true
                allowUniversalAccessFromFileURLs = true
                mediaPlaybackRequiresUserGesture = false
                setSupportZoom(false)
                builtInZoomControls = false
                displayZoomControls = false
                cacheMode = WebSettings.LOAD_DEFAULT
                useWideViewPort = true
                loadWithOverviewMode = true
            }

            webChromeClient = object : WebChromeClient() {
                override fun onConsoleMessage(consoleMessage: android.webkit.ConsoleMessage?): Boolean {
                    android.util.Log.d("TronJS", "${consoleMessage?.message()} [line ${consoleMessage?.lineNumber()} of ${consoleMessage?.sourceId()}]")
                    return true
                }
                override fun onJsAlert(view: WebView?, url: String?, message: String?, result: android.webkit.JsResult?): Boolean {
                    result?.confirm()
                    return true
                }
            }
            webViewClient = object : WebViewClient() {
                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)
                    hideSystemUI()
                }
            }

            addJavascriptInterface(AndroidBridge(), "AndroidBridge")
        }

        // Set content view FIRST
        setContentView(webView)

        // Apply immersive fullscreen
        hideSystemUI()

        // Handle back press
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                webView.evaluateJavascript("if (window.tronGame && window.tronGame.handleBackButton) { window.tronGame.handleBackButton(); } else { window.history.back(); }", null)
            }
        })

        // Load offline asset
        webView.loadUrl("file:///android_asset/index.html")
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) {
            hideSystemUI()
        }
    }

    override fun onResume() {
        super.onResume()
        hideSystemUI()
        webView.evaluateJavascript("if (window.tronGame && window.tronGame.resume) { window.tronGame.resume(); }", null)
    }

    override fun onPause() {
        super.onPause()
        webView.evaluateJavascript("if (window.tronGame && window.tronGame.pause) { window.tronGame.pause(); }", null)
    }

    override fun onDestroy() {
        stopHostingServer()
        stopDiscovery()
        try {
            if (multicastLock?.isHeld == true) multicastLock?.release()
        } catch (_: Exception) {}
        webView.destroy()
        super.onDestroy()
    }

    private fun hideSystemUI() {
        try {
            val decor = window.peekDecorView() ?: return
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                decor.windowInsetsController?.let { controller ->
                    controller.hide(WindowInsets.Type.statusBars() or WindowInsets.Type.navigationBars())
                    controller.systemBarsBehavior = WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                }
            } else {
                @Suppress("DEPRECATION")
                decor.systemUiVisibility = (
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_FULLSCREEN
                )
            }
        } catch (_: Exception) {}
    }

    // --- LAN Multiplayer Implementation ---

    fun getLocalIp(): String {
        try {
            val interfaces = NetworkInterface.getNetworkInterfaces().toList()
            // 1. Prioritize Wi-Fi, Hotspot (AP), Ethernet, and virtual bridge interfaces
            val preferredInterfaces = interfaces.filter { iface ->
                iface.isUp && !iface.isLoopback && (
                    iface.name.startsWith("wlan", ignoreCase = true) ||
                    iface.name.startsWith("ap", ignoreCase = true) ||
                    iface.name.startsWith("eth", ignoreCase = true) ||
                    iface.name.startsWith("rndis", ignoreCase = true) ||
                    iface.name.startsWith("swlan", ignoreCase = true) ||
                    iface.name.startsWith("p2p", ignoreCase = true)
                )
            }

            val candidateList = if (preferredInterfaces.isNotEmpty()) preferredInterfaces else interfaces.filter {
                it.isUp && !it.isLoopback && !it.name.startsWith("dummy") && !it.name.startsWith("rmnet")
            }

            for (iface in candidateList) {
                for (addr in iface.inetAddresses) {
                    if (addr is Inet4Address && !addr.isLoopbackAddress && !addr.isLinkLocalAddress) {
                        return addr.hostAddress ?: "127.0.0.1"
                    }
                }
            }

            // Fallback: any non-loopback IPv4
            for (iface in interfaces) {
                if (iface.isLoopback || !iface.isUp) continue
                for (addr in iface.inetAddresses) {
                    if (addr is Inet4Address && !addr.isLoopbackAddress) {
                        return addr.hostAddress ?: "127.0.0.1"
                    }
                }
            }
        } catch (_: Exception) {}
        return "127.0.0.1"
    }

    private fun getBroadcastAddresses(): List<InetAddress> {
        val broadcastList = mutableListOf<InetAddress>()
        try {
            val interfaces = NetworkInterface.getNetworkInterfaces()
            while (interfaces.hasMoreElements()) {
                val iface = interfaces.nextElement()
                if (iface.isLoopback || !iface.isUp) continue
                for (ifaceAddr in iface.interfaceAddresses) {
                    val broadcast = ifaceAddr.broadcast
                    if (broadcast != null && broadcast is Inet4Address) {
                        broadcastList.add(broadcast)
                    }
                }
            }
            if (broadcastList.isEmpty()) {
                broadcastList.add(InetAddress.getByName("255.255.255.255"))
            }
        } catch (_: Exception) {
            try { broadcastList.add(InetAddress.getByName("255.255.255.255")) } catch (_: Exception) {}
        }
        return broadcastList
    }

    fun startHostingServer(hostName: String, maxPlayers: Int, arena: String): Boolean {
        if (isHosting.get()) return true
        try {
            lanServer = TronLanServer(8888, maxPlayers)
            lanServer?.start()
            isHosting.set(true)

            // Start UDP beacon broadcasting for auto-discovery across all broadcast targets
            udpBeaconBroadcaster = Thread {
                var socket: DatagramSocket? = null
                try {
                    socket = DatagramSocket(null).apply {
                        reuseAddress = true
                        broadcast = true
                        bind(InetSocketAddress(0))
                    }

                    while (isHosting.get()) {
                        val ip = getLocalIp()
                        val currentPlayers = (lanServer?.getClientCount() ?: 0).coerceAtLeast(1)
                        val beaconMsg = "TRON_LAN|$hostName|$ip|8888|$currentPlayers|$maxPlayers|$arena"
                        val data = beaconMsg.toByteArray(Charsets.UTF_8)

                        // Send to subnet-specific broadcast addresses
                        val broadcasts = getBroadcastAddresses()
                        for (dest in broadcasts) {
                            try {
                                val packet = DatagramPacket(data, data.size, dest, 8889)
                                socket.send(packet)
                            } catch (_: Exception) {}
                        }
                        // Also send to global broadcast
                        try {
                            val globalPacket = DatagramPacket(data, data.size, InetAddress.getByName("255.255.255.255"), 8889)
                            socket.send(globalPacket)
                        } catch (_: Exception) {}

                        Thread.sleep(1200)
                    }
                } catch (_: Exception) {
                } finally {
                    socket?.close()
                }
            }.apply { isDaemon = true; start() }

            return true
        } catch (e: Exception) {
            e.printStackTrace()
            return false
        }
    }

    fun stopHostingServer() {
        isHosting.set(false)
        try {
            lanServer?.stop()
            lanServer = null
            udpBeaconBroadcaster?.interrupt()
            udpBeaconBroadcaster = null
        } catch (_: Exception) {}
    }

    fun startDiscovery() {
        if (isDiscovering.get()) return
        isDiscovering.set(true)

        udpDiscoveryListener = Thread {
            var socket: DatagramSocket? = null
            try {
                socket = DatagramSocket(null).apply {
                    reuseAddress = true
                    broadcast = true
                    soTimeout = 2000
                    bind(InetSocketAddress(8889))
                }
                val buffer = ByteArray(1024)
                val packet = DatagramPacket(buffer, buffer.size)

                while (isDiscovering.get()) {
                    try {
                        packet.length = buffer.size
                        socket.receive(packet)
                        val msg = String(packet.data, 0, packet.length, Charsets.UTF_8)
                        if (msg.startsWith("TRON_LAN|")) {
                            val escapedMsg = msg.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "").replace("\r", "")
                            runOnUiThread {
                                webView.evaluateJavascript("if (window.onLanServerFound) window.onLanServerFound('$escapedMsg');", null)
                            }
                        }
                    } catch (_: SocketTimeoutException) {
                    }
                }
            } catch (_: Exception) {
            } finally {
                socket?.close()
            }
        }.apply { isDaemon = true; start() }
    }

    fun stopDiscovery() {
        isDiscovering.set(false)
        try {
            udpDiscoveryListener?.interrupt()
            udpDiscoveryListener = null
        } catch (_: Exception) {}
    }

    // --- Embedded RFC 6455 WebSocket Server for LAN ---

    class TronLanServer(private val port: Int, private val maxPlayers: Int) {
        private var serverSocket: ServerSocket? = null
        private val running = AtomicBoolean(false)
        private val clients = CopyOnWriteArrayList<ClientHandler>()

        fun start() {
            running.set(true)
            serverSocket = ServerSocket().apply {
                reuseAddress = true
                bind(InetSocketAddress(port), 50)
            }
            Thread {
                while (running.get()) {
                    try {
                        val client = serverSocket?.accept() ?: break
                        if (clients.size >= maxPlayers) {
                            client.close()
                            continue
                        }
                        val handler = ClientHandler(client, this)
                        clients.add(handler)
                        handler.start()
                    } catch (_: Exception) {
                        break
                    }
                }
            }.apply { isDaemon = true; start() }
        }

        fun stop() {
            running.set(false)
            try {
                serverSocket?.close()
                for (c in clients) c.close()
                clients.clear()
            } catch (_: Exception) {}
        }

        fun broadcast(sender: ClientHandler?, message: String) {
            for (c in clients) {
                if (c == sender) continue
                c.sendText(message)
            }
        }

        fun removeClient(client: ClientHandler) {
            clients.remove(client)
            client.playerId?.let { pid ->
                broadcast(null, "{\"type\":\"player_left\",\"id\":\"$pid\"}")
            }
        }

        fun getClientCount(): Int = clients.size
    }

    class ClientHandler(private val socket: Socket, private val server: TronLanServer) : Thread() {
        private var inStream: InputStream? = null
        private var outStream: OutputStream? = null
        private var isHandshakeDone = false
        private val isOpen = AtomicBoolean(true)
        var playerId: String? = null

        override fun run() {
            try {
                inStream = socket.getInputStream()
                outStream = socket.getOutputStream()
                val rawIn = socket.getInputStream()

                // 1. Read HTTP Handshake byte-by-byte up to \r\n\r\n
                val headerBytes = java.io.ByteArrayOutputStream()
                var matched = 0
                val pattern = byteArrayOf('\r'.code.toByte(), '\n'.code.toByte(), '\r'.code.toByte(), '\n'.code.toByte())

                while (isOpen.get()) {
                    val b = rawIn.read()
                    if (b == -1) break
                    headerBytes.write(b)
                    if (b.toByte() == pattern[matched]) {
                        matched++
                        if (matched == 4) break
                    } else {
                        matched = if (b.toByte() == pattern[0]) 1 else 0
                    }
                }

                val headerStr = headerBytes.toString("UTF-8")
                var secKey = ""
                for (line in headerStr.lines()) {
                    if (line.startsWith("Sec-WebSocket-Key:", ignoreCase = true)) {
                        secKey = line.substringAfter(":").trim()
                    }
                }

                if (secKey.isEmpty()) {
                    socket.close()
                    return
                }

                // 2. Compute Accept Key
                val magic = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                val sha1 = MessageDigest.getInstance("SHA-1").digest((secKey + magic).toByteArray())
                val acceptKey = Base64.encodeToString(sha1, Base64.NO_WRAP)

                val response = "HTTP/1.1 101 Switching Protocols\r\n" +
                        "Upgrade: websocket\r\n" +
                        "Connection: Upgrade\r\n" +
                        "Sec-WebSocket-Accept: $acceptKey\r\n\r\n"

                outStream!!.write(response.toByteArray(Charsets.UTF_8))
                outStream!!.flush()
                isHandshakeDone = true

                // 3. Frame Reader Loop
                val dataIn = java.io.DataInputStream(rawIn)
                while (isOpen.get()) {
                    val b0 = dataIn.read()
                    if (b0 == -1) break
                    val opcode = b0 and 0x0F
                    if (opcode == 8) break // Connection Close

                    val b1 = dataIn.read()
                    if (b1 == -1) break
                    val isMasked = (b1 and 0x80) != 0
                    var payloadLen = (b1 and 0x7F).toLong()

                    if (payloadLen == 126L) {
                        val high = dataIn.readUnsignedByte()
                        val low = dataIn.readUnsignedByte()
                        payloadLen = ((high shl 8) or low).toLong()
                    } else if (payloadLen == 127L) {
                        payloadLen = dataIn.readLong()
                    }

                    val maskKey = ByteArray(4)
                    if (isMasked) {
                        dataIn.readFully(maskKey)
                    }

                    if (payloadLen > 1_000_000L) {
                        break // Prevent abnormal payload DOS
                    }

                    val payload = ByteArray(payloadLen.toInt())
                    dataIn.readFully(payload)

                    if (isMasked) {
                        for (i in payload.indices) {
                            payload[i] = (payload[i].toInt() xor maskKey[i % 4].toInt()).toByte()
                        }
                    }

                    if (opcode == 9) { // Ping -> reply with Pong
                        sendPong(payload)
                    } else if (opcode == 1) { // Text message
                        val text = String(payload, Charsets.UTF_8)
                        // Extract player id if registering
                        if (text.contains("\"register\"") && text.contains("\"id\":\"")) {
                            val idMatch = Regex("\"id\"\\s*:\\s*\"([^\"]+)\"").find(text)
                            if (idMatch != null) {
                                playerId = idMatch.groupValues[1]
                            }
                        }
                        server.broadcast(this, text)
                    }
                }
            } catch (_: Exception) {
            } finally {
                close()
            }
        }

        fun sendPong(payload: ByteArray) {
            if (!isOpen.get() || !isHandshakeDone) return
            synchronized(this) {
                try {
                    val out = outStream ?: return
                    out.write(0x8A) // FIN + Pong opcode (10)
                    out.write(payload.size and 0x7F)
                    if (payload.isNotEmpty()) {
                        out.write(payload)
                    }
                    out.flush()
                } catch (_: Exception) {}
            }
        }

        fun sendText(message: String) {
            if (!isOpen.get() || !isHandshakeDone) return
            synchronized(this) {
                try {
                    val bytes = message.toByteArray(Charsets.UTF_8)
                    val len = bytes.size
                    val out = outStream ?: return

                    out.write(0x81) // FIN + text opcode

                    if (len <= 125) {
                        out.write(len)
                    } else if (len <= 65535) {
                        out.write(126)
                        out.write((len shr 8) and 0xFF)
                        out.write(len and 0xFF)
                    } else {
                        out.write(127)
                        for (i in 7 downTo 0) {
                            out.write((len.toLong() shr (i * 8)).toInt() and 0xFF)
                        }
                    }

                    out.write(bytes)
                    out.flush()
                } catch (_: Exception) {
                    close()
                }
            }
        }

        fun close() {
            if (isOpen.compareAndSet(true, false)) {
                try {
                    socket.close()
                } catch (_: Exception) {}
                server.removeClient(this)
            }
        }
    }

    inner class AndroidBridge {
        @JavascriptInterface
        fun getLocalIp(): String {
            return this@MainActivity.getLocalIp()
        }

        @JavascriptInterface
        fun startHosting(hostName: String, maxPlayers: Int, arena: String): Boolean {
            return this@MainActivity.startHostingServer(hostName, maxPlayers, arena)
        }

        @JavascriptInterface
        fun stopHosting() {
            this@MainActivity.stopHostingServer()
        }

        @JavascriptInterface
        fun startDiscovery() {
            this@MainActivity.startDiscovery()
        }

        @JavascriptInterface
        fun stopDiscovery() {
            this@MainActivity.stopDiscovery()
        }

        @JavascriptInterface
        fun isHosting(): Boolean {
            return this@MainActivity.isHosting.get()
        }

        @JavascriptInterface
        fun vibrate(durationMs: Long) {
            vibrator?.let { v ->
                if (!v.hasVibrator()) return
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    v.vibrate(VibrationEffect.createOneShot(durationMs.coerceAtLeast(10), VibrationEffect.DEFAULT_AMPLITUDE))
                } else {
                    @Suppress("DEPRECATION")
                    v.vibrate(durationMs)
                }
            }
        }

        @JavascriptInterface
        fun vibrateClash() {
            vibrator?.let { v ->
                if (!v.hasVibrator()) return
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    val timings = longArrayOf(0, 30, 20, 60)
                    val amplitudes = intArrayOf(0, 255, 0, 180)
                    v.vibrate(VibrationEffect.createWaveform(timings, amplitudes, -1))
                } else {
                    @Suppress("DEPRECATION")
                    v.vibrate(60)
                }
            }
        }

        @JavascriptInterface
        fun vibrateDerez() {
            vibrator?.let { v ->
                if (!v.hasVibrator()) return
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    val timings = longArrayOf(0, 50, 40, 70, 40, 120)
                    val amplitudes = intArrayOf(0, 200, 0, 240, 0, 255)
                    v.vibrate(VibrationEffect.createWaveform(timings, amplitudes, -1))
                } else {
                    @Suppress("DEPRECATION")
                    v.vibrate(250)
                }
            }
        }

        @JavascriptInterface
        fun getDeviceModel(): String {
            return "${Build.MANUFACTURER} ${Build.MODEL}"
        }

        @JavascriptInterface
        fun exitGame() {
            runOnUiThread {
                finish()
            }
        }
    }
}
