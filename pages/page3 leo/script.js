const quotes = [
    {
        quote: "Acredite que você pode e você estará no meio do caminho.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Não importa o quão devagar você vá, desde que você não pare.",
        author: "Confúcio"
    },
    {
        quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "A melhor maneira de prever o futuro é criá-lo.",
        author: "Peter Drucker"
    },
    {
        quote: "Comece onde você está. Use o que você tem. Faça o que você pode.",
        author: "Arthur Ashe"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', generateRandomQuote);


window.onload = generateRandomQuote;