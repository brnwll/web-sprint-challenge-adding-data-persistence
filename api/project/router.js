// build your `/api/projects` router here

const express = require("express");
const Projects = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        project.project_completed = !!project.project_completed;
      });
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.addProject(req.body)
    .then((project) => {
      project.project_completed = !!project.project_completed;
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
