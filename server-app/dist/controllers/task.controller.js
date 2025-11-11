import {} from 'express';
import Task, {} from '../models/Task.model.js';
// @desc    Get all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error while fetching tasks.' });
    }
};
// @desc    Create a new task
export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            res.status(400).json({ message: 'Title is required.' });
            return;
        }
        const newTask = new Task({ title, description });
        const task = await newTask.save();
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// @desc    Update a task
export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// @desc    Delete a task
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(44).json({ message: 'Task not found' });
            return;
        }
        res.status(200).json({ message: 'Task removed successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error while deleting task.' });
    }
};
//# sourceMappingURL=task.controller.js.map