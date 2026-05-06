// src/config/database.js
const mongoose = require('mongoose');
require('dotenv').config(); // This line is crucial!

const connectDB = async () => {
  try {
    // Make sure the name matches what is in your .env file
    await mongoose.connect(process.env.MONGODB_URI); 
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
module.exports = connectDB;