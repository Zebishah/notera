require('dotenv').config(); // Load environment variables from .env

const mongoose = require('mongoose');
const mongo_URI = process.env.MONGOURI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_URI);
        console.log("Database is connected on Connection String " + mongo_URI);
    } catch (err) {
        console.log("Database is not connected, we got an error: " + err);
    }
}

module.exports = connectDB;
