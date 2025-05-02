// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, '0.0.0.0', () => {  // 👈 CHANGE HERE
  console.log(`Server is running at http://0.0.0.0:${port}`);
});

module.exports = app;  // Export app for testing purposes
