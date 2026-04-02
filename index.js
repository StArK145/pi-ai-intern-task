import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import alertRoutes from './routes/alertRoutes.js';

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pipeline Alerts API is running...');
});

app.use('/alerts', alertRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});