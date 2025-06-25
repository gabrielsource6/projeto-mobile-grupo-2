const quotes = [

    { quote: "O Sucesso e a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
  
    { quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Albert Einstein" },
  
    { quote: "Se você pode sonhar, pode realizar.", author: "Walt Disney" },
  
    { quote: "O sucesso é cair nove vezes e levantar-se outras dez.", author: "Jon Bon Jovi" },
  
    { quote: "A persistência é o caminho do êxito.", author: "Charles Chaplin" },
  
    { quote: "É importante agradecer pelo hoje sem nunca desistir do amanhã.", author: "Desconhecido" },
  
    { quote: "Transforme seus sonhos em metas e suas metas em conquistas.", author: "Steve Jobs" },

    { quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon"},

    { quote: "Não e mais fortes das éspecies que sobrevive, nem a mais inteligente, mas sim a que se adapta melhor a mudança.", author: "Charles Darwin"},

    { quote: "Acredite em si mesmo. Você é mais corajoso do que pensa, mais talentoso do que sabe e mais capaz do que imagina.", author: "Roy T. Bennet"}

  ];
  
  let currentQuote = {};
  
  function generateQuote() {
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    currentQuote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = `"${currentQuote.quote}"`;
  
    document.getElementById("author").textContent = `– ${currentQuote.author}`;
  
  }
  
  function saveFavorite() {
  
    if (!currentQuote.quote) return;
  
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    const exists = favorites.find(f => f.quote === currentQuote.quote);
  
    if (!exists) {
  
      favorites.push(currentQuote);
  
      localStorage.setItem("favorites", JSON.stringify(favorites));
  
      alert("Frase favoritada com sucesso!");
  
    } else {
  
      alert("Essa frase já está nos favoritos.");
  
    }
  
  }
  
  function showFavorites() {
  
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    const favoritesDiv = document.getElementById("favorites");
  
    favoritesDiv.innerHTML = "<h3>  ✮ Frases Favoritas:</h3>";
  
    if (favorites.length === 0) {
  
      favoritesDiv.innerHTML += "<p>Nenhuma frase favoritada ainda.</p>";
  
      return;
  
    }
  
    favorites.forEach(fav => {
  
      favoritesDiv.innerHTML += `
  
        <div style="margin-bottom:10px;">
  
          <p>"${fav.quote}"</p>
  
          <strong>– ${fav.author}</strong>
  
          <hr/>
  
        </div>
  
      `;
  
    });
  
  }