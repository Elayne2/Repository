const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    res.write('<html><body><h1>Hello, Node.js Server!</h1></body></html>');
    res.write('<p>This is my first response.</p>');
    res.write('<p>This is my second response.</p>');

    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});