const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  { quote: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

const qoute = document.getElementById("qoute");
const author = document.getElementById("author");
const button = document.getElementById("buttonQoute");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQoute = quotes[randomIndex];
  qoute.textContent = `${randomQoute["quote"]}`;
  author.textContent = `${randomQoute["author"]}`;
});
