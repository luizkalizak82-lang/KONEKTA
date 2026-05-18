// 1. CHANGER DE FORMULÁRIO NA HOME
function switchForm(profile) {
    document.querySelectorAll('.profile-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    document.querySelectorAll('.onboarding-form').forEach(form => form.classList.remove('active'));
    const targetForm = document.getElementById('form-' + profile);
    if (targetForm) {
        targetForm.classList.add('active');
    }
}

// 2. SIMULAR ENTRADA / LOGIN (MUDA AS TELAS)
function simularLogin() {
    document.getElementById('auth-screen').classList.add('dashboard-hidden');
    document.getElementById('app-dashboard').classList.remove('dashboard-hidden');
}

// 3. SIMULAR SAÍDA / LOGOUT
function simularLogout() {
    document.getElementById('app-dashboard').classList.add('dashboard-hidden');
    document.getElementById('auth-screen').classList.remove('dashboard-hidden');
}

// 4. ALTERNADOR DE ABAS DO PAINEL INTERNO
function navegarPainel(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// 5. LÓGICA DE INCLUSÃO DINÂMICA DE EMPRESAS / INVESTIDORES
function adicionarAtivo(e) {
    e.preventDefault();
    
    const tipo = document.getElementById('ativo-tipo').value;
    const nome = document.getElementById('ativo-nome').value;
    const nicho = document.getElementById('ativo-nicho').value;
    const resumo = document.getElementById('ativo-resumo').value;
    
    const classeCard = tipo.includes('Empresa') ? 'empresa-tipo' : 'investidor-tipo';
    
    const novoCardHTML = `
        <div class="ativo-item-card ${classeCard}">
            <span class="tag-tipo"> ${tipo}</span>
            <h4>${nome}</h4>
            <p><strong>Nicho:</strong> ${nicho}</p>
            <p>${resumo}</p>
        </div>
    `;
    
    const feed = document.getElementById('lista-ativos-dinamicos');
    feed.insertAdjacentHTML('afterbegin', novoCardHTML);
    
    // Limpa o formulário após inclusão
    document.getElementById('form-adicionar-ativo').reset();
}

// 6. LÓGICA DO CHAT INTERATIVO
function enviarMensagem() {
    const input = document.getElementById('chat-input-text');
    const texto = input.value.trim();
    
    if (texto !== "") {
        const chatLog = document.getElementById('chat-log');
        
        // Mensagem enviada por você
        const msgSuaHTML = `
            <div class="msg-box sent">
                <strong>Você:</strong> ${texto}
            </div>
        `;
        chatLog.insertAdjacentHTML('beforeend', msgSuaHTML);
        input.value = "";
        
        // Auto scroll para a última mensagem
        chatLog.scrollTop = chatLog.scrollHeight;
        
        // Resposta simulada após 1.5 segundos para demonstrar a troca
        setTimeout(() => {
            const msgRespostaHTML = `
                <div class="msg-box received">
                    <strong>Dr. Marcos:</strong> Excelente ponto. Vou analisar com o meu comitê e te dou o retorno em seguida.
                </div>
            `;
            chatLog.insertAdjacentHTML('beforeend', msgRespostaHTML);
            chatLog.scrollTop = chatLog.scrollHeight;
        }, 1500);
    }
}
