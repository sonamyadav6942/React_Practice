// Random quote generator
import React, { useState } from "react";

const quotes = [
  "Worst Phase.",
  "Beleive in God.",
  "You are strong.",
  "Forgiveness is choosing to be happy.",
  "When you forgive you win.",
  "A good relationship is worth the wait.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

function Quote() {
  const [quote, setQuote] = useState(quotes[0]);

  function randomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <div className="App">
      <h2>Random quote generator:-{quote}</h2>
      <button onClick={randomQuote}>Click Me</button>
    </div>
  );
}

export default Quote;
