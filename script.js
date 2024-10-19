function appendToDisplay(value) {
    const displayInput = document.getElementById("display-input");
    
    // Jika display berisi "0", ganti dengan nilai baru
    if (displayInput.textContent === '0') {
        displayInput.textContent = value;
    } else {
        displayInput.textContent += value;
    }
}

function clearDisplay() {
    const displayInput = document.getElementById("display-input");
    const displayResult = document.getElementById("display-result");
    displayInput.textContent = '0'; // Reset display ke '0'
    displayResult.textContent = ''; // Hapus hasil
}

function calculate() {
    const displayInput = document.getElementById("display-input");
    const displayResult = document.getElementById("display-result");
    const expression = displayInput.textContent;

    let result;

    // Cek operator dan set hasil
    if (expression.includes('+')) {
        result = "Being with you is a heaven";
    } else if (expression.includes('*')) {
        result = "Love you";
    } else if (expression.includes('/')) {
        result = "Here with me";
    } else if (expression.includes('-')) {
        result = "Emmmuahh";
    } else {
        result = "Error"; // Jika tidak ada operasi yang dikenali
    }

    // Menampilkan hasil dengan animasi
    displayResult.style.animation = 'none'; // Hentikan animasi sebelumnya
    displayResult.textContent = result; // Tampilkan hasil
    displayResult.style.animation = 'marquee 5s linear infinite'; // Atur animasi marquee

    // Putar musik
    const audio = document.getElementById("audio");
    audio.currentTime = 0; // Mulai dari awal
    audio.play(); // Putar audio
}
