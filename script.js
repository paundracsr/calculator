function appendToDisplay(value) {
    const displayText = document.getElementById("display-text");
    const currentText = displayText.textContent;

    // Jika display berisi 0, ganti dengan input baru
    if (currentText === '0') {
        displayText.textContent = value;
    } else {
        displayText.textContent += value;
    }

    // Hentikan animasi saat input angka
    displayText.style.animation = 'none';
}

function clearDisplay() {
    const displayText = document.getElementById("display-text");
    displayText.textContent = '0'; // Reset ke nilai awal
    displayText.style.animation = 'none'; // Hentikan animasi
}

function updateDisplayWithAnimation(text) {
    const displayText = document.getElementById("display-text");
    displayText.textContent = ''; // Kosongkan display sebelum mengetik

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            displayText.textContent += text.charAt(i); // Animasi ketik
            i++;
        } else {
            clearInterval(typingInterval);
            displayText.style.animation = 'marquee 10s linear infinite'; // Mulai marquee setelah mengetik
        }
    }, 100); // Kecepatan mengetik (100ms per karakter)
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
