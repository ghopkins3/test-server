const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("this works!");
});

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is running on http://localhost:${PORT}`)
    };
});

module.exports = app;