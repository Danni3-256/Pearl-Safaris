const axios = require('axios');

const api_key = 'YOUR_GPT3_API_KEY';
const prompt = 'User: Hello, I need a travel itinerary...\nAI:';

const userMessage = 'User: Can you suggest a 5-day itinerary for a family of four in Kenya?';

axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
  prompt: prompt + ' ' + userMessage,
  max_tokens: 150,
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`,
  },
})
.then(response => {
  const chatbotResponse = response.data.choices[0].text.trim();
  // Send chatbotResponse to the frontend
})
.catch(error => {
  console.error('Error:', error);
});
