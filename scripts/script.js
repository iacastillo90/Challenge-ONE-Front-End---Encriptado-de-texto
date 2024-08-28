// Selección de elementos del DOM
const inputText = document.getElementById('input-text');
const errorMessage = document.getElementById('error-message');
const outputTitle = document.getElementById('output-title');
const outputDescription = document.getElementById('output-description');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Función para validar el texto de entrada
function validateInput(text) {
    const regex = /^[a-z ]+$/;
    return regex.test(text);
}

// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

// Función para copiar el texto encriptado o desencriptado al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }, () => {
        alert('Error al copiar el texto');
    });
}

// Evento para el botón de encriptar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (validateInput(text)) {
        const encryptedText = encryptText(text);
        outputTitle.textContent = encryptedText;
        outputDescription.textContent = "Texto encriptado exitosamente.";
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = '⚠️ Solo se permiten letras minúsculas y sin acentos.';
    }
});

// Evento para el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (validateInput(text)) {
        const decryptedText = decryptText(text);
        outputTitle.textContent = decryptedText;
        outputDescription.textContent = "Texto desencriptado exitosamente.";
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = '⚠️ Solo se permiten letras minúsculas y sin acentos.';
    }
});

// Evento para el botón de copiar
copyBtn.addEventListener('click', () => {
    const text = outputTitle.textContent;
    if (text) {
        copyToClipboard(text);
    } else {
        alert('No hay texto para copiar.');
    }
});
