// Variável para controlar o slide atual
let currentSlide = 0;

// Função para mover o slide
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Se o índice passar do último slide, volta para o primeiro
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slider = document.querySelector('.slider');
    // Move o slider para o slide atual
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Adicionando um listener de evento para o botão "Próximo"
document.getElementById('nextButton').addEventListener('click', () => {
    moveSlide(1); // Move para o próximo slide
});
