import tasksServices from "../services/tasks.services.js";

const getTasks = (req, res, next) => {
    try {
    const tasks = tasksServices.getTasks();
    res.status(200).json({ success: true, data: tasks });
} catch (error) {
    next(error);
    }
};

const createTask = (req, res, next) => {
    try {
    const task = tasksServices.createTask(req.body.title);
    res.status(201).json({ success: true, data: task });
    } catch (error) {
    next(error);
    }
};

export default { getTasks, createTask };
