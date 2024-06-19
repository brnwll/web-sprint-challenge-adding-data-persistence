// build your `/api/tasks` router here

const express = require("express");
const Tasks = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      tasks.forEach((task) => {
        task.task_completed = !!task.task_completed;
      });
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.addTask(req.body)
    .then((task) => {
      task.task_completed = !!task.task_completed;
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
