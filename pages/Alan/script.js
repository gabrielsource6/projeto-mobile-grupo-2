const quotes = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em você e todo o resto virá naturalmente.",
  "Não espere por oportunidades, crie-as.",
  "A única limitação que você tem é aquela que você aceita.",
  "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
  "Coragem não é a ausência do medo, mas a vitória sobre ele.",
  "Você é mais forte do que imagina e capaz de mais do que pensa.",
  "A persistência realiza o impossível.",
  "Transforme seus sonhos em planos e seus planos em realidade.",
  "Cada dia é uma nova chance para mudar sua vida."
];

let currentIndex = 0;
const quoteEl = document.getElementById('quote');
const favoriteBtn = document.getElementById('favoriteBtn');
const nextBtn = document.getElementById('nextBtn');

// Chave para armazenar favoritos no localStorage
const STORAGE_KEY = 'favoritedQuotes';

function getFavoritedQuotes() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveFavoritedQuotes(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function updateQuote() {
  quoteEl.textContent = quotes[currentIndex];
  updateFavoriteBtn();
}

function updateFavoriteBtn() {
  const favorites = getFavoritedQuotes();
  const currentQuote = quotes[currentIndex];
  if (favorites.includes(currentQuote)) {
    favoriteBtn.classList.add('favorited');
    favoriteBtn.textContent = '⭐ Favoritado';
  } else {
    favoriteBtn.classList.remove('favorited');
    favoriteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42
          3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
          19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg> Favoritar
    `;
  }
}

favoriteBtn.addEventListener('click', () => {
  const favorites = getFavoritedQuotes();
  const currentQuote = quotes[currentIndex];
  if (favorites.includes(currentQuote)) {
    // Remove da lista
    const index = favorites.indexOf(currentQuote);
    if (index > -1) favorites.splice(index, 1);
  } else {
    favorites.push(currentQuote);
  }
  saveFavoritedQuotes(favorites);
  updateFavoriteBtn();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  updateQuote();
});

// Inicializa com a primeira frase
updateQuote();
