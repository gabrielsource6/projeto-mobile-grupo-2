const btn = document.getElementById('favoritarBtn');

btn.addEventListener('click', () => {
  btn.classList.toggle('favorito');
  const isFavorito = btn.classList.contains('favorito');
  btn.setAttribute('aria-pressed', isFavorito);

  // Atualiza texto e ícone no botão conforme estado
  if (isFavorito) {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="#fff" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Removido dos favoritos
    `;
  } else {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Favoritar
    `;
  }
});
