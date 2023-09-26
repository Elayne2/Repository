import React, { useState } from 'react';
import './App.css'; 

import QuotesDatabase from './QuotesDatabase'; 
function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState('#FF0000');
 
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * QuotesDatabase.length);
  }

  function generateQuote() {
    let newQuote = getRandomQuote();

    while (newQuote.quote === currentQuote.quote) { 
      newQuote = getRandomQuote();
    }

    setCurrentQuote(newQuote);

    const randomBackgroundColor = getRandomColor();
   

    setBackgroundColor(randomBackgroundColor);
 

}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

return (

  <div className="App" style={{ backgroundColor }}>
    <div className="quote-container">
      <h1 className="quote-header" style={{ color: backgroundColor }}>
        {currentQuote.quote}
      </h1>
      <p className="quote-author" style={{ color: backgroundColor }}> {currentQuote.author}</p>
      <button
        className="new-quote-button"
        style={{ backgroundColor: backgroundColor }}
        onClick={generateQuote}
      >
       New quote
      </button>
    </div>
  </div>
);
}

export default Quotes;