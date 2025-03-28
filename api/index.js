import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    return res.json({ message: "this works!" });
});

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is running on http://localhost:${PORT}`)
    };
});

export default app;