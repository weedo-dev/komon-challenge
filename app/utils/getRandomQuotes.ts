export default function getRandomQuote(quotes: Quote[]): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
