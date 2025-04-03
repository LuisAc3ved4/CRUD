const express = require('express');
const routes = express.Router();
const taskController = require("../controllers/taskController")

routes.get("/", taskController.getTasks)
routes.get("/:id", taskController.getTasksById)
routes.post("/", taskController.createTask)
routes.put("/:id", taskController.updateTask)
routes.delete("/:id", taskController.deleteTask)
module.exports = routes

