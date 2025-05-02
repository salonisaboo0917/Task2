const http=require("http");
const express = require("express");
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send("Hello from Home page");
});

app.get('/about', (req, res) => {
  res.send(`Hello from About page${req.query.name}`);
});

app.listen(8000,()=>console.log("Server Started!"));

// Start the server
/*const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});*/
