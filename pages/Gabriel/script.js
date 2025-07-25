    document.addEventListener('DOMContentLoaded', () => {

        const phraseElement = document.getElementById('phrase');
    
        const newPhraseBtn = document.getElementById('newPhraseBtn');
    
    
    
        const phrases = [
            "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
    
            "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
    
            "A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
    
            "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
    
            "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
    
            "Não importa que você vá devagar, contanto que você não pare.",
    
            "Conhecer a si mesmo é o começo de toda sabedoria.",
    
            "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.",
    
            "Transforme seus muros em pontes.",
    
            "O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.",
    
            "Pense, só não desista!"
    
    
        ];
    
    
    
        function getRandomPhrase() {
    
            const randomIndex = Math.floor(Math.random() * phrases.length);
    
            return phrases[randomIndex];
    
        }
    
    
    
        newPhraseBtn.addEventListener('click', () => {
    
            phraseElement.textContent = getRandomPhrase();
    
        });
    
    
    
        // Display an initial phrase when the page loads
    
        phraseElement.textContent = getRandomPhrase();
    
    });
    
    const botao = document.getElementById('gosteiBtn');
    
    botao.addEventListener('click', () => {
      botao.classList.toggle('clicked');
      if (botao.classList.contains('clicked')) {
        botao.textContent = 'Gostei ❤️';
      } else {
        botao.textContent = 'Gostei (:';
      }
    });