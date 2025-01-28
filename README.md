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
