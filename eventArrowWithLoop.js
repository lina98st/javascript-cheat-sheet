// Elemente abrufen
const usernameField = document.getElementById('username');
const submitButton = document.getElementById('submitBtn');
const message = document.getElementById('message');

// Event-Listener mit Arrow Function und if-else
submitButton.addEventListener('click', () => {
    if (usernameField.value.trim() === '') {
        message.textContent = 'Bitte geben Sie einen Benutzernamen ein.';
        message.style.color = 'red';
    } else {
        message.textContent = `Willkommen, ${usernameField.value}!`;
        message.style.color = 'green';
    }
});
