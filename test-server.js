const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Test Server is running!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Test Server listening at http://localhost:${port}`);
  console.log(`On Your Network: http://172.17.123.99:${port}`);
});
