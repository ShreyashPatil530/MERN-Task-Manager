import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; // <-- Import delete icon

const TaskItem = ({ task, onUpdateStatus, onDelete }) => {
    
    const toggleComplete = () => {
        onUpdateStatus(task._id, !task.isCompleted);
    };

    return (
        <Card 
            sx={{ 
                mb: 2, 
                opacity: task.isCompleted ? 0.6 : 1, 
                borderLeft: '4px solid',
                borderColor: task.isCompleted ? 'success.main' : 'warning.main'
            }} 
            elevation={2}
        >
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography 
                        variant="h6" 
                        component="div" 
                        gutterBottom
                        sx={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
                    >
                        {task.title}
                    </Typography>
                    
                    <Chip 
                        label={task.isCompleted ? 'Completed' : 'Pending'}
                        color={task.isCompleted ? 'success' : 'warning'}
                        size="small"
                        variant="outlined"
                    />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                    {task.description || 'No description provided.'}
                </Typography>
            </CardContent>
            
            <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
                <Button 
                    size="small"
                    color={task.isCompleted ? "warning" : "success"}
                    variant="outlined"
                    onClick={toggleComplete} 
                >
                    {task.isCompleted ? 'Mark Pending' : 'Mark Complete'}
                </Button>
                
                <IconButton 
                    aria-label="delete" 
                    color="error"
                    onClick={() => onDelete(task._id)}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default TaskItem;