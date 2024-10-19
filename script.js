function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    const display = document.getElementById("display");
    const expression = display.value;

    if (expression.includes('+')) {
        display.value = "being with you is a heaven";
    } else if (expression.includes('*')) {
        display.value = "love you";
    } else if (expression.includes(':')) {
        display.value = "here with me";
    } else if (expression.includes('-')) {
        display.value = "emmmuahh";
    } else {
        display.value = "Error"; // Jika tidak ada operasi yang dikenali
    }
}
