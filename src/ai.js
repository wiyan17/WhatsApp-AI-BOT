const axios = require('axios');

class DeepSeekAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = 'https://api.deepseek.com/v1/chat/completions';
  }

  async generateResponse(prompt) {
    const payload = {
      model: "deepseek-chat",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000
    };

    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    const response = await axios.post(this.endpoint, payload, { headers });
    return response.data.choices[0].message.content;
  }
}

module.exports = DeepSeekAI;
