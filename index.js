
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello Munna 👋 Your Express server is running!");
});

app.get("/test", (req, res) => {
    res.send("Hello Test test");
});

app.get("/test2", (req, res) => {
    res.send("Hello This is the  test2");
});

app.get("/test3", (req, res) => {
  res.send("Hello This is the  test3");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
