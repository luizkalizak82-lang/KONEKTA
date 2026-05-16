document.addEventListener("DOMContentLoaded", function() {
    
    const navbar = document.querySelector("#navbar");
    const revealElements = document.querySelectorAll(".reveal");
    const counterElement = document.getElementById("live-number");

    // 1. Mudança de fundo da Navbar ao rolar
    window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Animação de aparição fluida (Scroll Reveal)
    function checkReveal() {
        const triggerBottom = (window.innerHeight / 5) * 4.5;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", checkReveal);
    setTimeout(checkReveal, 200);

    // 3. Simulador de Contador em Tempo Real Dinâmico
    let currentConnections = 1402; // Número inicial base

    function updateCounter() {
        // Gera uma variação aleatória entre -3 e +4 conexões
        const change = Math.floor(Math.random() * 8) - 3;
        currentConnections += change;

        // Mantém o número sempre em um intervalo realista
        if (currentConnections < 1350) currentConnections += 10;
        if (currentConnections > 1500) currentConnections -= 10;

        // Formata o número com a vírgula/ponto de milhar
        counterElement.textContent = currentConnections.toLocaleString('en-US');
        
        // Próxima mudança acontece em um tempo aleatório entre 2 e 5 segundos
        const nextTime = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(updateCounter, nextTime);
    }

    // Inicia a variação do contador automático
    if(counterElement) {
        setTimeout(updateCounter, 2000);
    }
});
