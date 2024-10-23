document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        displayMessage(userMessage, 'user-msg');
        userInput.value = '';
        getBotResponse(userMessage);
    }
});

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = className;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazarse hacia abajo
}

function getBotResponse(message) {
    let response = '';

    // Respuestas simples
    if (message.toLowerCase().includes('hola')) {
        response = '¡Hola! ¿Cómo puedo ayudarte?';
    } else if (message.toLowerCase().includes('adiós')) {
        response = '¡Hasta luego!';
    } else {
        response = 'Lo siento, no entiendo.';
    }

    displayMessage(response, 'bot-msg');
}
