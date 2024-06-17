import express from "express";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())

app.get("/api/recipes/search", async (req, res) => {
    res.json({ message: "seccess" })

})

app.listen(5000, () => {
    console.log("server is running on port 5000");

})