/* ==========================================================================
   1. CONFIGURAÇÕES INICIAIS E MODO NOTURNO (CAMPO DE NOITE)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    inicializarModoNoturno();
    inicializarQuiz();
    configurarRolagemSuave();
});

function inicializarModoNoturno() {
    // Cria o botão de alternar modo dinamicamente no cabeçalho
    const header = document.querySelector("header");
    const botaoModo = document.createElement("button");
    
    botaoModo.innerHTML = "🌙 Modo Noturno";
    botaoModo.id = "btn-modo-noturno";
    botaoModo.style.cssText = `
        background-color: var(--laranja);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        margin-left: 1.5rem;
        transition: all 0.3s ease;
    `;
    
    header.appendChild(botaoModo);

    // Verifica se o usuário já tinha uma preferência salva
    if (localStorage.getItem("agroMirimTema") === "escuro") {
        ativarModoEscuro(botaoModo);
    }

    botaoModo.addEventListener("click", () => {
        if (document.body.classList.contains("modo-escuro")) {
            desativarModoEscuro(botaoModo);
        } else {
            ativarModoEscuro(botaoModo);
        }
    });
}

function ativarModoEscuro(botao) {
    document.body.classList.add("modo-escuro");
    botao.innerHTML = "☀️ Modo Dia";
    localStorage.setItem("agroMirimTema", "escuro");
    
    // Altera variáveis de cor dinamicamente para o tema noturno
    document.documentElement.style.setProperty('--fundo-suave', '#121b13');
    document.documentElement.style.setProperty('--texto', '#e0e0e0');
    document.documentElement.style.setProperty('--branco', '#1e2b20');
}

function desativarModoEscuro(botao) {
    document.body.classList.remove("modo-escuro");
    botao.innerHTML = "🌙 Modo Noturno";
    localStorage.setItem("agroMirimTema", "claro");
    
    // Restaura as cores originais do CSS
    document.documentElement.style.setProperty('--fundo-suave', '#f1f8e9');
    document.documentElement.style.setProperty('--texto', '#333333');
    document.documentElement.style.setProperty('--branco', '#ffffff');
}

/* ==========================================================================
   2. QUIZ EDUCATIVO AGRO MIRIM
   ========================================================================== */
function inicializarQuiz() {
    // Insere a seção do Quiz dinamicamente antes do rodapé
    const main = document.querySelector("main");
    const secaoQuiz = document.createElement("section");
    
    secaoQuiz.id = "jogos";
    secaoQuiz.style.cssText = `
        max-width: 800px;
        margin: 4rem auto;
        padding: 2rem;
        background: var(--branco);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        text-align: center;
        border-left: 6px solid var(--laranja);
    `;

    secaoQuiz.innerHTML = `
        <h2 style="color: var(--verde-escuro); margin-bottom: 1rem;">🎮 Desafio Agro Mirim</h2>
        <p id="pergunta-quiz" style="font-size: 1.2rem; margin-bottom: 1.5rem; font-weight: bold;"></p>
        <div id="alternativas-quiz" style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto;"></div>
        <p id="resultado-quiz" style="margin-top: 1.5rem; font-weight: bold; font-size: 1.1rem;"></p>
    `;

    main.parentNode.insertBefore(secaoQuiz, main.nextSibling);

    // Dados das perguntas do quiz
    const perguntas = [
        {
            pergunta: "Qual dessas tecnologias ajuda o agricultor a ver a plantação do alto?",
            alternativas: ["Submarino", "Drone", "Trator subterrâneo"],
            correta: 1
        },
        {
            pergunta: "O que é fundamental para uma horta crescer saudável de forma sustentável?",
            alternativas: ["Economia de água e solo protegido", "Muito refrigerante na terra", "Luz 24 horas por dia"],
            correta: 0
        }
    ];

    let perguntaAtual = 0;

    function carregarPergunta() {
        const dados = perguntas[perguntaAtual];
        document.getElementById("pergunta-quiz").innerText = dados.pergunta;
        
        const containerAlternativas = document.getElementById("alternativas-quiz");
        containerAlternativas.innerHTML = "";
        document.getElementById("resultado-quiz").innerText = "";

        dados.alternativas.forEach((alternativa, index) => {
            const btn = document.createElement("button");
            btn.innerText = alternativa;
            btn.style.cssText = `
                background-color: var(--fundo-suave);
                color: var(--texto);
                border: 2px solid var(--verde-claro);
                padding: 0.8rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.2s;
            `;
            
            btn.addEventListener("mouseover", () => btn.style.backgroundColor = "var(--verde-claro)");
            btn.addEventListener("mouseout", () => btn.style.backgroundColor = "var(--fundo-suave)");
            
            btn.addEventListener("click", () => verificarResposta(index, dados.correta));
            containerAlternativas.appendChild(btn);
        });
    }

    function verificarResposta(escolhida, correta) {
        const resultado = document.getElementById("resultado-quiz");
        const botoes = document.getElementById("alternativas-quiz").querySelectorAll("button");

        // Desabilita os botões após a resposta
        botoes.forEach(b => b.disabled = true);

        if (escolhida === correta) {
            resultado.innerText = "🎉 Parabéns! Você acertou! 🌱";
            resultado.style.color = "var(--verde-claro)";
        } else {
            resultado.innerText = "❌ Ah, quase lá! A resposta certa era: " + perguntas[perguntaAtual].alternativas[correta];
            resultado.style.color = "red";
        }

        // Avança para a próxima pergunta após 3 segundos se houver mais perguntas
        setTimeout(() => {
            perguntaAtual = (perguntaAtual + 1) % perguntas.length;
            carregarPergunta();
        }, 3500);
    }

    // Inicializa a primeira pergunta
    carregarPergunta();
}

/* ==========================================================================
   3. ROLAGEM SUAVE DOS LINKS
   ========================================================================== */
function configurarRolagemSuave() {
    const links = document.querySelectorAll('nav a, .btn');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Só aplica se for um link interno (âncora)
            if (href.startsWith('#')) {
                e.preventDefault();
                const elementoDestino = document.querySelector(href);
                
                if (elementoDestino) {
                    elementoDestino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
