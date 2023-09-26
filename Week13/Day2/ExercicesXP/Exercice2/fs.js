const fs = require('fs');

fs.writeFile('example.txt', 'Some Text To See', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been created successfully');
});

fs.appendFile('example.txt', 'Buy orange juice', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been modified successfully');
});

fs.unlink('example.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been deleted successfully');
});