import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoUri = process.env.MONGO_URI || '';
mongoose
    .connect(mongoUri)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// API endpoint to fetch meals
app.get("/api/recipes/search", async (req: Request, res: Response) => {
    try {
        // Fetch data from the meal API
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const meals = response.data.meals;

        // Send the meal data to the client
        res.json(meals);
    } catch (error) {
        console.error('Error fetching meal data:', error);
        res.status(500).send('Error fetching meal data');
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
