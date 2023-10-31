// JavaScript untuk mengulang efek pengetikan
function animateTyping() {
    var element = document.querySelector(".typing");
    var text = element.innerHTML;
    element.innerHTML = "";
    var i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, Math.floor(Math.random() * 200) + 100); // Waktu penundaan antara pengetikan karakter yang berbeda
        } else {
            setTimeout(resetTyping, 5000); // Waktu penundaan sebelum mereset efek pengetikan
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
