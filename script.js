// Efeito de rolagem na Navbar
window.addEventListener("scroll", function() {
    let nav = document.querySelector("#navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(15, 15, 15, 0.95)";
        nav.style.padding = "1rem 10%";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "2rem 10%";
    }
});

// Animação de revelação ao scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Executa uma vez ao carregar para mostrar o Hero
window.onload = reveal;
