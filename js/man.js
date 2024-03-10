let createQoute = document.getElementById("createQoute");
let AuthorElement = document.querySelector(".content-qoute span");

let qoutes = [
  {
    qoute: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    qoute: "So many books, so little time.",
    author: "― Frank Zappa",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi",
  },
  {
    qoute: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain",
  },
  {
    qoute: "A friend is someone who knows all about you and still loves you.",
    author: "― Elbert Hubbard",
  },
  {
    qoute:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "― Oscar Wilde",
  },
  {
    qoute:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide",
  },
  {
    qoute: "We accept the love we think we deserve.",
    author: "― Stephen Chbosky",
  },
];

let previousQuote;
function GenerateQoutes() {
  let randomNumber = Math.floor(Math.random() * qoutes.length);
  while (randomNumber === previousQuote) {
    randomNumber = Math.floor(Math.random() * qoutes.length);
  }
  previousQuote = randomNumber;
  //   console.log(previousQuote);
  createQoute.innerHTML = qoutes[randomNumber].qoute;
  AuthorElement.innerHTML = qoutes[randomNumber].author;
}
