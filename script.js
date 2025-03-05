const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");

const api_url = "https://quotes-api-self.vercel.app/quote";
let button = document.querySelector('button');

async function getQuote(url) {

  button.disabled = true;
  button.style.backgroundColor = "rgba(135, 137, 139, 0.855)";


  const response = await fetch(url);
  var data = await response.json();

  quote.innerText = data.quote;
  author.innerText = data.author;


  button.disabled = false;
  button.style.backgroundColor = "rgba(23, 123, 229, 0.855)";
}

getQuote(api_url);