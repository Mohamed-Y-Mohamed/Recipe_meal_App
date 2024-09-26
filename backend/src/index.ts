import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Extract JWT_SECRET and MONGO_URI from environment variables
const JWT_SECRET = process.env.JWT_SECRET as Secret;
const mongoUri = process.env.MONGO_URI || '';

// Ensure JWT_SECRET is defined or throw an error
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
}

// MongoDB Customer schema
interface ICustomer extends mongoose.Document {
    fullName: string;
    email: string;
    password: string;
    likedMeals: string[]; // Array of meal IDs
}

const CustomerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likedMeals: { type: [String], default: [] }, // Array to store liked meal IDs
});

const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);

// MongoDB connection
mongoose
    .connect(mongoUri)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// --------------- SIGNUP ROUTE -----------------
app.post('/api/signup', async (req: Request, res: Response) => {
    const { fullName, email, password, profession, bio, profileImage } = req.body;

    try {
        // Check if the email already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new customer with additional fields
        const newCustomer = new Customer({
            fullName,
            email,
            password: hashedPassword,
            profession,   // Include profession in the signup data
            bio,          // Include bio in the signup data
            profileImage, // Include profile image in the signup data
        });

        await newCustomer.save();
        res.status(201).json({ message: 'Customer registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// --------------- SIGNIN ROUTE -----------------
app.post('/api/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Find the customer by email
        const customer = await Customer.findOne({ email });
        if (!customer) {
            console.log('Customer not found for email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check the password
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) {
            console.log('Invalid password for email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ customerId: customer._id }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token and customer ID
        res.json({ token, customerId: customer._id });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// --------------- RETRIEVE MEALS ROUTE -----------------
app.get('/api/recipes/search', async (req: Request, res: Response) => {
    try {
        // Fetch meals from TheMealDB API
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const meals = response.data.meals;

        // Send meal data to the client
        res.json(meals);
    } catch (error) {
        console.error('Error fetching meal data:', error);
        res.status(500).json({ message: 'Error fetching meal data' });
    }
});

// --------------- LIKE/UNLIKE MEAL ROUTE -----------------
app.post("/api/customer/:customerId/like", async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const { mealId } = req.body;

    // Validate the customerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try {
        // Find the customer by ObjectId
        const customer = await Customer.findById(new mongoose.Types.ObjectId(customerId));
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Handle like/unlike logic
        if (customer.likedMeals.includes(mealId)) {
            // If the meal is already liked, remove it (unlike)
            customer.likedMeals = customer.likedMeals.filter(id => id !== mealId);
        } else {
            // If the meal is not liked, add it to likedMeals (like)
            customer.likedMeals.push(mealId);
        }

        await customer.save();
        return res.status(200).json({ message: 'Liked meals updated successfully', likedMeals: customer.likedMeals });
    } catch (error) {
        console.error('Error updating liked meals:', error);
        return res.status(500).json({ message: 'Error updating liked meals' });
    }
});
// Get the customer's liked meals
app.get("/api/customer/:customerId/favorites", async (req: Request, res: Response) => {
    const { customerId } = req.params;

    // Validate the customerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try {
        // Find the customer by ObjectId
        const customer = await Customer.findById(new mongoose.Types.ObjectId(customerId));
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Return the liked meals (array of meal IDs)
        return res.status(200).json({ likedMeals: customer.likedMeals });
    } catch (error) {
        console.error('Error retrieving liked meals:', error);
        return res.status(500).json({ message: 'Error retrieving liked meals' });
    }
});
// Profile retrieval route
app.get('/api/customer/:customerId', async (req: Request, res: Response) => {
    const { customerId } = req.params;

    // Validate the customerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try {
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer); // Send customer profile data
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Error fetching profile' });
    }
});

app.put('/api/customer/:customerId', async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const { fullName, email, profession, bio, profileImage } = req.body;

    // Validate the customerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            customerId,
            { fullName, email, profession, bio, profileImage },
            { new: true, runValidators: true }
        );

        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.json({ message: 'Profile updated successfully', customer: updatedCustomer });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Error updating profile' });
    }
});


// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
