const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const user = {
    firstname: 'John',
    lastname: 'Doe'
  };

  res.send(user);
});

app.use(express.static('public'));

const server = app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});