function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
    updateMarquee(''); // Reset marquee
}

function updateMarquee(text) {
    const animatedText = document.getElementById('animatedText');
    animatedText.textContent = ''; // Clear previous content

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            animatedText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            startMarquee(); // Start marquee after typing animation
        }
    }, 100); // Typing speed
}

function startMarquee() {
    const marquee = document.getElementById('marqueeDisplay');
    marquee.style.animation = 'scrollText 10s linear infinite';
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

    updateMarquee(result); // Display the result in marquee
}
