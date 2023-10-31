// JavaScript untuk mengulang efek pengetikan
function animateTyping() {
    var element = document.querySelector(".typing");
    var text = element.innerHTML;
    element.innerHTML = "";
    var i = 0;
    var isDeleting = false;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, Math.floor(Math.random() * 200) + 100); // Waktu penundaan antara pengetikan karakter yang berbeda
        } else {
            setTimeout(resetTyping, 5000); // Waktu penundaan sebelum mereset efek pengetikan
        }

        var currentText = text.substring(0, i);

        if (isDeleting) {
            element.innerHTML = currentText;
            i--;
        } else {
            element.innerHTML = currentText + text.charAt(i);
            i++;
        }

        if (i <= 0) {
            isDeleting = false;
            setTimeout(type, Math.floor(Math.random() * 200) + 100); // Waktu penundaan sebelum mulai mengetik lagi
        } else if (i === text.length) {
            isDeleting = true;
            setTimeout(animateTyping, 2000); // Waktu penundaan sebelum memulai kembali efek pengetikan
        } else {
            setTimeout(type, Math.floor(Math.random() * 200) + 100); // Waktu penundaan antara pengetikan karakter yang berbeda
        }
    }

    function resetTyping() {
        element.innerHTML = "";
        i = 0;
        setTimeout(type, 0); // Mulai lagi efek pengetikan tanpa henti
    }

    type();
}

animateTyping();
