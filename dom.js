// Ein Element auswählen
const button = document.querySelector('button');

// Event-Listener hinzufügen
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Neues Element erstellen und anhängen
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, DOM!';
document.body.appendChild(newDiv);
