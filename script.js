function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.textContent += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.textContent = '0'; // Reset display
    display.style.animation = 'none'; // Hentikan animasi
}

function updateDisplayWithAnimation(text) {
    const display = document.getElementById("display");
    display.textContent = ''; // Reset sebelum animasi

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            display.textContent += text.charAt(i); // Animasi ketik
            i++;
        } else {
            clearInterval(typingInterval);
            startMarqueeAnimation(); // Mulai marquee setelah mengetik
        }
    }, 100); // Kecepatan mengetik
}

function startMarqueeAnimation() {
    const display = document.getElementById("display");
    display.style.animation = 'marquee 10s linear infinite'; // Mulai marquee
}

function calculate() {
    const display = document.getElementById("display");
    const expression = display.textContent;

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
