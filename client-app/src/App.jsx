import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './components/TaskItem.jsx';
import TaskForm from './components/TaskForm.jsx';

// Import MUI Components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- 1. API Functions (Defined inside the component) ---

    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('/api/tasks'); 
            setTasks(response.data);
        } catch (err) {
            setError('Failed to fetch tasks. Check your backend server on port 5001.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddTask = async (newTaskData) => {
        try {
            const response = await axios.post('/api/tasks', newTaskData);
            // Add the new task to the top of the list
            setTasks([response.data, ...tasks]); 
        } catch (err) {
            alert(`Error adding task: ${err.response?.data?.message || 'Server error'}`);
        }
    };

    const handleUpdateStatus = async (id, isCompleted) => {
        try {
            const response = await axios.put(`/api/tasks/${id}`, { isCompleted });
            // Update the state by mapping over the old tasks
            setTasks(tasks.map(task => 
                task._id === id ? response.data : task
            ));
        } catch (err) {
            alert('Error updating task status.');
        }
    };

    const handleDeleteTask = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        
        try {
            await axios.delete(`/api/tasks/${id}`);
            // Update the state by filtering out the deleted task
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            alert('Error deleting task.');
        }
    };

    // --- 2. useEffect (Runs only once to fetch tasks) ---
    useEffect(() => {
        fetchTasks();
    }, []); // Empty array is essential!

    // --- 3. Helper Function to Render Tasks ---
    const renderTasks = () => {
        if (loading) {
            // Show a loading spinner
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            );
        }

        if (error) {
            // Show a proper error message
            return <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>;
        }
        
        if (tasks.length === 0) {
            return (
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ my: 4 }}>
                    No tasks yet. Create one above!
                </Typography>
            );
        }

        // Render the list of tasks
        return tasks.map(task => (
            <TaskItem 
                key={task._id} 
                task={task}
                onUpdateStatus={handleUpdateStatus}
                onDelete={handleDeleteTask}
            />
        ));
    };

    // --- 4. The JSX (What you see) ---
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography 
                variant="h3" 
                component="h1" 
                align="center" 
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
                MERN Task Manager
            </Typography>
            
            <TaskForm onTaskAdded={handleAddTask} />
            
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Task List
                </Typography>
                {renderTasks()}
            </Box>
        </Container>
    );
};

export default App;