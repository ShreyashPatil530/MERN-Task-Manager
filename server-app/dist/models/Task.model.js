import mongoose, { Schema } from 'mongoose';
const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Task = mongoose.model('Task', TaskSchema);
export default Task;
//# sourceMappingURL=Task.model.js.map