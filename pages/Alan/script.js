const quotes = [
  {
      text: '"O único lugar onde o sucesso vem antes do trabalho é no dicionário." - Vidal Sassoon',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
      text: '"Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você." - Cynthia Kersey',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
      text: '"O sucesso é a soma de pequenos esforços repetidos dia após dia." - Robert Collier',
      image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80'
  },
  {
      text: '"Não espere por oportunidades, crie-as." - George Bernard Shaw',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
  },
  {
      text: '"Você é mais forte do que imagina."',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80'
  }
];

let currentIndex = 0;
const quoteElement = document.getElementById('motivational-quote');
const imageElement = document.getElementById('motivational-image');
const favoriteBtn = document.getElementById('favorite-btn');
const nextBtn = document.getElementById('next-btn');

function showQuote(index) {
  const { text, image } = quotes[index];
  quoteElement.textContent = text;
  imageElement.src = image;
  imageElement.alt = `Imagem motivacional ${index + 1}`;
  // Remove o destaque de favorito ao trocar a frase
  favoriteBtn.classList.remove('favorited');
}

favoriteBtn.addEventListener('click', () => {
  favoriteBtn.classList.toggle('favorited');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
});

// Inicializa com a primeira frase
showQuote(currentIndex);
