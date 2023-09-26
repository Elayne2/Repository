const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid parameter');
  } else {
    res.send(`Hobby: ${hobby}`);
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/formData', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent you a message: "${message}"`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});