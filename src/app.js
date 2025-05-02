const express = require("express");
const app = express();

// Define routes here
app.get('/', (req, res) => {
  res.send("Hello from Home page");
});

app.get('/about', (req, res) => {
  res.send("Hello from About page");
});

module.exports = app;
