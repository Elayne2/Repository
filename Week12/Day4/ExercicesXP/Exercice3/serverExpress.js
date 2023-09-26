const http = require('http');

const server = http.createServer((req, res) => {
 
    res.setHeader('Content-Type', 'text/html');

    res.write('<html><body><h1><h1>This is an HTML tag</h1></h1></body></html>');
   
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});



