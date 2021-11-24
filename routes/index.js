import { Router } from "express";
import Todo from "../models/Todo.js";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).send({ newTodo: newTodo });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const tasks = await Todo.find().lean();
    res.status(201).send({ all_data: tasks });
  } catch (error) {
    console.log({ error });
    res.status(400).send({ error: error.message });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Todo.findByIdAndUpdate(id, req.body);
    res.status(201).send({ all_data: tasks });
  } catch (error) {
    console.log({ error });
    res.status(400).send({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).send("Deleted Todo");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export default router;
