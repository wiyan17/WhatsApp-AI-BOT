const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const AI = require('./ai');
require('dotenv').config();

class WhatsAppBot {
  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth({ dataPath: './sessions' }),
      puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    });

    this.ai = new AI(process.env.DEEPSEEK_API_KEY);
    this.initialize();
  }

  initialize() {
    this.client.on('qr', qr => {
      qrcode.generate(qr, { small: true });
    });

    this.client.on('ready', () => {
      console.log('🤖 Client is ready!');
    });

    this.client.on('message', async msg => {
      try {
        if (msg.fromMe) return;
        
        const response = await this.ai.generateResponse(msg.body);
        await msg.reply(response);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    this.client.initialize();
  }
}

new WhatsAppBot();
