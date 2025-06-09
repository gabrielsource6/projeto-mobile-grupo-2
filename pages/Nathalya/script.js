document.addEventListener('DOMContentLoaded', () => {

    const phraseElement = document.getElementById('phrase');

    const newPhraseBtn = document.getElementById('newPhraseBtn');



    const phrases = [
        "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",

        "Acredite no seu potencial e voe alto!",

        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",

        "Seja a mudança que você deseja ver no mundo.",

        "A persistência é o caminho do êxito.",

        "Comece onde você está. Use o que você tem. Faça o que você pode.",

        "Não espere por oportunidades, crie-as.",

        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",

        "Transforme seus muros em pontes.",

        "A jornada de mil milhas começa com um único passo.",

        "Sua atitude determina sua direção."


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