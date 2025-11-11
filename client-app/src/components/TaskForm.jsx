import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; // <-- Make sure this is imported

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!title.trim()) {
            setError('Task title cannot be empty.');
            return;
        }
        onTaskAdded({ title, description }); 
        setTitle('');
        setDescription('');
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>Add New Task</Typography>
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label="Task Title"
                    variant="outlined"
                    fullWidth
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={!!error} // This makes the field red if error exists
                    helperText={error} // This shows the error message
                />
                <TextField
                    label="Task Description (Optional)"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                >
                    Create Task
                </Button>
            </Box>
        </Paper>
    );
};

export default TaskForm;