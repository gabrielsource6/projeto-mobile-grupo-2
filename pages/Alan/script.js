document.addEventListener('DOMContentLoaded', function() {
  const favoriteButton = document.getElementById('favorite-btn');

  // Verifica se a página já está marcada como favorita
  if(localStorage.getItem('favorito')) {
    favoriteButton.classList.add('favorito');
    favoriteButton.innerText = 'Desfavoritar';
  }

  favoriteButton.addEventListener('click', function() {
    // Toggle entre favorito ou não favorito
    if(favoriteButton.classList.contains('favorito')) {
      localStorage.removeItem('favorito'); // Elimina o favorito
      favoriteButton.classList.remove('favorito');
      favoriteButton.innerText = 'Favoritar';
    } else {
      localStorage.setItem('favorito', 'true'); // Marca como favorito
      favoriteButton.classList.add('favorito');
      favoriteButton.innerText = 'Desfavoritar';
    }
  });
});