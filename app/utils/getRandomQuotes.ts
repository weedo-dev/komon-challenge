type Quote = {
  id: number;
  quote: string;
  author: string;
  url: string;
};

export default function getRandomQuote(quotes: Quote[]): Quote | undefined {
  if (quotes.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
