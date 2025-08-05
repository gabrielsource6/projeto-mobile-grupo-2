document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do DOM
    const phraseElement = document.getElementById('phrase');
    const newPhraseBtn = document.getElementById('newPhraseBtn');
    const likeBtn = document.getElementById('gosteiBtn');
  
    // Array de frases motivacionais
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
  
    // Objeto para armazenar o status de "curtido" de cada frase
    // A chave é a frase e o valor é um booleano (true se curtida, false caso contrário)
    const favoritePhrasesStatus = {};
  
    /**
     * Retorna uma frase aleatória do array de frases.
     * @returns {string} Uma frase selecionada aleatoriamente.
     */
    function getRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      return phrases[randomIndex];
    }
  
    /**
     * Atualiza o estado do botão "Gostei" com base na frase atual exibida.
     * Adiciona/remove a classe 'clicked' e altera o texto do botão.
     */
    function updateLikeButtonStatus() {
      const currentPhrase = phraseElement.textContent; // Obtém a frase atual do elemento
  
      // Verifica se a frase atual está marcada como favorita
      if (favoritePhrasesStatus[currentPhrase]) {
        likeBtn.classList.add('clicked'); // Adiciona classe para estilização de "curtido"
        likeBtn.textContent = 'Gostei ❤️'; // Altera o texto do botão
      } else {
        likeBtn.classList.remove('clicked'); // Remove classe se não for favorita
        likeBtn.textContent = 'Gostei (:' // Altera o texto para o padrão
      }
    }
  
    // Event Listener para o botão "Nova Frase"
    newPhraseBtn.addEventListener('click', () => {
      phraseElement.textContent = getRandomPhrase(); // Exibe uma nova frase aleatória
      updateLikeButtonStatus(); // Atualiza o status do botão "Gostei" para a nova frase
    });
  
    // Event Listener para o botão "Gostei"
    likeBtn.addEventListener('click', () => {
      const currentPhrase = phraseElement.textContent; // Obtém a frase atualmente exibida
  
      // Inverte o status de "curtido" da frase atual
      favoritePhrasesStatus[currentPhrase] = !favoritePhrasesStatus[currentPhrase];
      updateLikeButtonStatus(); // Atualiza o visual do botão "Gostei"
    });
  
    // Inicialização: Exibe uma frase aleatória e atualiza o status do botão "Gostei"
    // quando a página é carregada.
    phraseElement.textContent = getRandomPhrase();
    updateLikeButtonStatus();
  });
