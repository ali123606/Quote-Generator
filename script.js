const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");

const api_url = "https://quotes-api-self.vercel.app/quote";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerText = data.quote;
  author.innerText = data.author;
}

getQuote(api_url);