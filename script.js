function appendToDisplay(value) {
    const displayText = document.getElementById("display-text");
    if (displayText.textContent === '0') {
        displayText.textContent = value;
    } else {
        displayText.textContent += value;
    }
}

function clearDisplay() {
    const displayText = document.getElementById("display-text");
    displayText.textContent = '0'; // Reset ke nilai awal
    displayText.style.animation = 'none'; // Hentikan animasi
    void displayText.offsetWidth; // Trik untuk mereset animasi
    displayText.style.animation = 'marquee 10s linear infinite'; // Mulai ulang animasi marquee
}

function updateDisplayWithAnimation(text) {
    const displayText = document.getElementById("display-text");
    displayText.textContent = ''; // Reset sebelum animasi

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            displayText.textContent += text.charAt(i); // Animasi ketik
            i++;
        } else {
            clearInterval(typingInterval);
            displayText.style.animation = 'marquee 10s linear infinite'; // Mulai marquee
        }
    }, 100); // Kecepatan mengetik
}

function calculate() {
    const displayText = document.getElementById("display-text");
    const expression = displayText.textContent;

    let result;
    if (expression.includes('+')) {
        result = "Being with you is a heaven";
    } else if (expression.includes('*')) {
        result = "Love you";
    } else if (expression.includes('/')) {
        result = "Here with me";
    } else if (expression.includes('-')) {
        result = "Emmmuahh";
    } else {
        result = "Error";
    }

    updateDisplayWithAnimation(result); // Tampilkan hasil dengan animasi
}
