function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
    display.style.animation = 'none'; // Hentikan animasi
}

function updateDisplayWithAnimation(text) {
    const display = document.getElementById("display");
    display.value = ''; // Reset display sebelum mulai animasi

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            display.value += text.charAt(i); // Animasi ketik
            i++;
        } else {
            clearInterval(typingInterval);
            display.style.animation = 'marquee 10s linear infinite'; // Mulai marquee
        }
    }, 100); // Kecepatan mengetik
}

function calculate() {
    const display = document.getElementById("display");
    const expression = display.value;

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
