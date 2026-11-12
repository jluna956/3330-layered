import tasksController from "../controller/tasks.controller.js";
import express from "express";

const router = express.Router();

router.get("/", tasksController.getTasks);
router.post("/", tasksController.createTask);

export default router;
