import mongoose, { Schema, Document } from 'mongoose';

// Define the Customer interface
interface ICustomer extends mongoose.Document {
    fullName: string;
    email: string;
    password: string;
    likedMeals: string[];
    profession: string;   // Profession of the customer
    bio: string;          // Bio information
    profileImage: string; // URL of the profile image
}

const CustomerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likedMeals: { type: [String], default: [] }, // Array to store liked meal IDs
    profession: { type: String, default: "" },   // Profession field
    bio: { type: String, default: "" },          // Bio field
    profileImage: { type: String, default: "" }, // Profile image field
});

// Export the Customer model
const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);
export default Customer;
