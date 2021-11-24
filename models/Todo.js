import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, trim: true },
  status: { type: String, required: true },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
