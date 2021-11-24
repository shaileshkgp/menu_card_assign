import Todo from "../models/Todo.js";

export const getAllTodo = async (req, res) => {
  try {
    const tasks = await Todo.find().lean();
    res.status(201).send({ all_data: tasks });
  } catch (error) {
    console.log({ error });
    res.status(400).send({ error: error.message });
  }
};

export const createTodo = async (req, res, next) => {
  try {
    console.log(req);
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).send({ newTodo: newTodo });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, { ...req.body });
    res.status(200).send("Successfully Updated Todo");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    let { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).send("Deleted Todo");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
