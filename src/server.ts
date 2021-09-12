import path from  'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from  'cors';
import connectDB from './config/db';

// load env vars
dotenv.config({ path: '../config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/location', require('./routes/locations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

  
