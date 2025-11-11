import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db_Config.js';
import taskRoutes from './routes/task.routes.js';

dotenv.config();

// Connect to the Database
connectDb(); 

const PORT = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// API Routes
app.use('/api/tasks', taskRoutes); 

// Test Route
app.get("/", (req, res) => {
    res.send("Task Manager Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});