function appendToDisplay(value) {
    const displayText = document.getElementById("display-text");
    // Jika display berisi "0", ganti dengan nilai baru
    if (displayText.textContent === '0') {
        displayText.textContent = value;
    } else {
        displayText.textContent += value;
    }
}

function clearDisplay() {
    const displayText = document.getElementById("display-text");
    displayText.textContent = '0'; // Reset display ke '0'
}

function calculate() {
    const displayText = document.getElementById("display-text");
    const expression = displayText.textContent;

    let result;
    // Hitung hasil berdasarkan ekspresi yang diinput
    try {
        result = eval(expression); // Gunakan eval untuk menghitung hasil
    } catch (e) {
        displayText.textContent = "Error"; // Tampilkan error jika terjadi kesalahan
        return;
    }

    // Menampilkan hasil
    displayText.style.animation = 'none'; // Hentikan animasi sebelumnya
    displayText.textContent = result; // Tampilkan hasil perhitungan

    // Putar musik
    const audio = document.getElementById("audio");
    audio.currentTime = 0; // Mulai dari awal
    audio.play(); // Putar audio

    // Mulai animasi marquee
    displayText.style.animation = 'marquee 5s linear infinite'; // Atur durasi dan jenis animasi
}
