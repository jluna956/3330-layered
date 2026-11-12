import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import middleware from "./middleware/tasks.middleware.js";

const app = express();

export const db = [
    { id: "1", title: "Take a shower", status: "false" },
    { id: "2", title: "Get wingstop for dinner", status: "false" },
    { id: "3", title: "Work on the project for 3330", status: "true" },
];

app.use(express.json());
app.use("/api/tasks", tasksRoutes);
app.use(middleware.errorHandler);

export default app;
