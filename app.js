const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from my updated CI/CD Pipeline! 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});