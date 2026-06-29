# agro-mirim
# 🌱 Agro Mirim — O Futuro do Campo

O **Agro Mirim** é uma plataforma web educativa desenvolvida para aproximar o público jovem e infantil do universo do agronegócio sustentável, da tecnologia no campo e do cultivo consciente. Através de uma interface visual atraente, interativa e de fácil navegação, o projeto ensina de maneira leve e divertida.

---

## 🚀 Funcionalidades Principais

* **Design Responsivo & Temático:** Visual moderno estruturado com uma paleta de cores inspirada na natureza e no ecossistema agrícola (verdes, tons de terra e laranja). Adaptável para celulares, tablets e computadores.
* **🎮 Desafio Agro Mirim (Quiz Interativo):** Um mini-jogo dinâmico em JavaScript que testa os conhecimentos do usuário sobre o campo e avança as perguntas automaticamente.
* **🌙 Modo Visão Noturna:** Um botão dinâmico para alternar entre o Modo Dia e o Modo Noturno, adaptando as cores e salvando a preferência do usuário diretamente no navegador (`localStorage`).
* **⚓ Rolagem Suave:** Navegação fluida entre as seções da página através de links âncora otimizados.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais (Vanilla Stack), sem a necessidade de frameworks externos, visando leveza e desempenho:

* [HTML5](https://mozilla.org) — Estruturação semântica do conteúdo.
* [CSS3](https://mozilla.org) — Estilização moderna através de CSS Grid, Flexbox e Variáveis Nativas (`:root`).
* [JavaScript (ES6)](https://mozilla.org) — Manipulação dinâmica do DOM, lógica do quiz e controle de estado do tema escuro.

---

## 📁 Estrutura de Arquivos

```text
agro-mirim/
├── index.html     # Estrutura principal da página e seções
├── style.css      # Estilização global, animações e responsividade
└── script.js     # Lógica do Quiz, Modo Noturno e interatividades
```

---

## 💻 Como Executar o Projeto

Como o projeto utiliza tecnologias nativas do navegador, não é necessário instalar dependências ou compiladores.

1. **Baixe ou clone** os arquivos do projeto para uma pasta no seu computador.
2. Certifique-se de que os três arquivos (`index.html`, `style.css` e `script.js`) estão na **mesma pasta**.
3. Dê dois cliques no arquivo `index.html` para abri-lo instantaneamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

---

## ⚙️ Integração dos Arquivos

Para o perfeito funcionamento do ecossistema do site, certifique-se de que as chamadas externas estão presentes no seu `index.html`:

**No `<head>` (Vínculo do CSS):**
```html
<link rel="stylesheet" href="style.css">
```

**Antes do fechamento do `</body>` (Vínculo do JS):**
```html
<script src="script.js"></script>
```

---

## 📝 Próximos Passos (Roadmap)

* [ ] Adicionar efeitos sonoros educativos (sons da natureza/animais e acertos no Quiz).
* [ ] Implementar um sistema de pontuação persistente para as crianças acumularem "sementes virtuais".
* [ ] Integrar fontes lúdicas via Google Fonts (como *Fredoka* ou *Nunito*).

---

<p align="center">🌱 <i>Educando as novas gerações para um agronegócio mais tecnológico e sustentável.</i></p>
