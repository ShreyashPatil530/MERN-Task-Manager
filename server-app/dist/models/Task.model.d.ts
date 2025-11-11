import mongoose, { type Document } from 'mongoose';
export interface ITask extends Document {
    title: string;
    description?: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare const Task: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Task;
//# sourceMappingURL=Task.model.d.ts.map