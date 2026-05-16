// Gerenciamento e Interatividade do Ecossistema Web da Konekta

document.addEventListener("DOMContentLoaded", function() {
    
    const navbar = document.querySelector("#navbar");
    const revealElements = document.querySelectorAll(".reveal");

    // 1. Efeito de scroll na barra de navegação (Adiciona fundo desfocado ao rolar)
    window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Sistema de Scroll Reveal (Faz os elementos e a logo surgirem de forma fluida)
    function checkReveal() {
        // Define o ponto de ativação na tela (um pouco antes do elemento aparecer totalmente)
        const triggerBottom = (window.innerHeight / 5) * 4.5; 

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    }

    // Executa a função toda vez que o usuário rolar a página
    window.addEventListener("scroll", checkReveal);
    
    // Executa uma primeira vez logo após o carregamento para exibir o topo (Hero) imediatamente
    setTimeout(checkReveal, 200);
});
