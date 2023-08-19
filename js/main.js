(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Itinerary
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

// Itinerary Display
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

// Travel Planner
const form = document.getElementById('itinerary-form');
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Get form data and send it to the backend for processing
  // Display the generated itinerary on the page
});

sendButton.addEventListener('click', function () {
  const userMessage = userInput.value;
  // Send user message to the chatbot and display responses
});
