import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.send('Pipeline Alerts API is running...');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});