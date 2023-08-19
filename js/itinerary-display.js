// Frontend JavaScript
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function () {
  const userMessage = userInput.value;

  // Send user message to the backend
  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userMessage }),
  })
  .then(response => response.json())
  .then(data => {
    // Display chatbot response in the chat container
    chatContainer.innerHTML += `<div class="user-message">User: ${userMessage}</div>`;
    chatContainer.innerHTML += `<div class="bot-message">AI: ${data.response}</div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  })
  .catch(error => {
    console.error('Error:', error);
  });

  userInput.value = '';
});
