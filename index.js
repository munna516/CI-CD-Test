
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
