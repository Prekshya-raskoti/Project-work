import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Function to create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
}

// Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    
    try {
        // Check if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" });
        }

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a Valid Email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a Strong Password (at least 8 characters)" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user object
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        // Save the new user to the database
        const user = await newUser.save();

        // Create JWT token
        const token = createToken(user._id);

        // Respond with the token
        res.json({ success: true, token });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error occurred during registration" });
    }
}

// Placeholder for login functionality
const loginUser = async (req, res) => {
    // Login logic will go here
}

export { loginUser, registerUser };
