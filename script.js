// 1. ALTERNADOR DE FORMULÁRIOS (ONBOARDING)
function switchForm(profile) {
    // Altera o estado do botão clicado
    document.querySelectorAll('.profile-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Altera o formulário visível
    document.querySelectorAll('.onboarding-form').forEach(form => form.classList.remove('active'));
    const targetForm = document.getElementById('form-' + profile);
    if (targetForm) {
        targetForm.classList.add('active');
    }
}

// 2. NAVEGAÇÃO DAS ABAS INTERNAS DA PLATAFORMA
function showTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Mostra a aba desejada
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// 3. SISTEMA INTERATIVO DE FILTROS PARA A VITRINE DE SITES
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const siteCards = document.querySelectorAll('.site-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove a classe active de todos os botões de filtro
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona no botão atual clicado
            e.target.classList.add('active');

            // Pega o texto do filtro limpando o emoji (ex: "Construção Civil")
            const filterValue = e.target.textContent.replace(/[^\w\s&Á-ÿ]/gi, '').trim().toLowerCase();

            siteCards.forEach(card => {
                const cardNicho = card.querySelector('.badge-nicho').textContent.trim().toLowerCase();
                
                // Se for "todos os nichos" ou bater com o nome do nicho do card, exibe. Se não, esconde.
                if (filterValue.includes('todos os nichos') || cardNicho === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});
