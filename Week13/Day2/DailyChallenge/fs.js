const fs = require('fs');

fs.readFile('RightLeft', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const symbols = data.trim(); 

  let position = 0;
  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
    } else if (symbol === '<') {
      position--;
    }
  }
  console.log (`Final position: ${position}`);

  let steps = 0;
  let Position = 0;
  let foundNegativePosition = false;
  while (!foundNegativePosition && Position < symbols.length) {
    const symbol = symbols[Position];
    if (symbol === '>') {
      Position++;
    } else if (symbol === '<') {
      Position--;
    }
    steps++;
    if (Position === -1) {
      foundNegativePosition = true;
    }
  }
  console.log(`Steps to hit position -1:${steps}.`);
});