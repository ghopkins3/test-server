import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://telbbmbnfwazsageyezo.supabase.co";
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbGJibWJuZndhenNhZ2V5ZXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NzgxODIsImV4cCI6MjA1MzE1NDE4Mn0.swJF_dpQypl9PRZvblapLrn3y99uja2_Mr3_UzmUzuc";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", async (req, res) => {
    try {
        const { data, error } = await supabase
        .from("test")
        .select("*");

        return res.send(data);
    } catch (error) {
        return res.send(error);
    }
});

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is running on http://localhost:${PORT}`)
    };
});

export default app;