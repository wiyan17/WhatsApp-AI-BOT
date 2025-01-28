```markdown
# 🤖 WhatsApp AI Chat Bot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/yourusername/whatsapp-deepseek-bot/actions/workflows/node.js.yml/badge.svg)](https://github.com/yourusername/whatsapp-deepseek-bot/actions)
[![Docker Image CI](https://github.com/yourusername/whatsapp-deepseek-bot/actions/workflows/docker-image.yml/badge.svg)](https://github.com/yourusername/whatsapp-deepseek-bot/actions)

Integrasi AI canggih dengan WhatsApp menggunakan teknologi DeepSeek dan whatsapp-web.js. Bot ini mampu melakukan percakapan natural dengan memanfaatkan model bahasa terbaru.

![Demo GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Z6NWl5dHh0a3B4Z2s0eG0ybmJhZ3l6eHh4N2h0YjU1b2R6eW5odyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif)

## ✨ Fitur Utama
- 💬 Percakapan real-time dengan model AI DeepSeek
- 🔒 Session management dengan penyimpanan lokal
- 🐳 Dukungan Docker container
- 🔄 Auto-reconnect
- 📊 Logging sistem terintegrasi
- 🛡️ Error handling robust

## 🚀 Prasyarat
- Node.js v18+
- npm v9+
- Akun WhatsApp aktif
- API Key DeepSeek/OpenAI
- Chromium browser

## ⚙️ Instalasi

### Instalasi Dasar
```bash
git clone https://github.com/yourusername/whatsapp-deepseek-bot.git
cd whatsapp-deepseek-bot
npm install
cp .env.example .env
```

### Konfigurasi
Isi `.env` dengan credential Anda:
```env
DEEPSEEK_API_KEY=your_api_key_here
```

### Menjalankan Bot
```bash
npm start
```

### Menggunakan Docker
```bash
docker-compose up -d --build
```

## 🧠 Konfigurasi AI
Edit `src/ai.js` untuk menyesuaikan parameter model:
```javascript
const payload = {
  model: "deepseek-chat", // Ganti model yang diinginkan
  messages: [...],
  temperature: 0.7, // 0-2 (kreativitas)
  max_tokens: 1000 // Panjang maksimal respons
};
```

## 🗂 Struktur Proyek
```
whatsapp-deepseek-bot/
├── src/              # Source code utama
│   ├── bot.js        # Logic utama bot
│   ├── ai.js         # Integrasi AI
│   └── config.js     # Konfigurasi
├── sessions/         # Session storage
├── .env              # Environment variables
├── docker-compose.yml# Docker configuration
└── package.json      # Dependencies
```

## 🔧 Customisasi
### Menambahkan Command Baru
```javascript
// Di src/bot.js
client.on('message', async msg => {
  if (msg.body === '!ping') {
    await msg.reply('Pong! 🏓');
  }
});
```

### Menggunakan OpenAI
1. Ganti endpoint di `src/ai.js`:
```javascript
this.endpoint = 'https://api.openai.com/v1/chat/completions';
```
2. Update payload:
```javascript
payload.model = 'gpt-3.5-turbo';
```

## 🚨 Troubleshooting
**QR Code Tidak Muncul:**
- Pastikan Chromium terinstall
- Coba jalankan dengan `PUPPETEER_EXECUTABLE_PATH` di `.env`

**Error Session:**
- Hapus folder `sessions`
- Restart bot

**API Error:**
- Periksa API key
- Verifikasi kuota API

**Docker Issues:**
- Pastikan Docker service running
- Coba rebuild image: `docker-compose build --no-cache`

## ⚠️ Disclaimer
Proyek ini dibuat untuk tujuan edukasi. Penggunaan WhatsApp API tidak resmi mungkin melanggar terms of service. Gunakan dengan resiko sendiri.

## 🤝 Berkontribusi
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi
Distributed under MIT License. Lihat `LICENSE` untuk detail.

---

<div align="center">
  Made with ❤️ by Widhi Harliyanto| 
  <a href="https://github.com/wiyan17">GitHub</a> | 
  <a href="Widhi Harliyanto">LinkedIn</a>
</div>
```
