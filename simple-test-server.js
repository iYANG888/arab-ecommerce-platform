const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
