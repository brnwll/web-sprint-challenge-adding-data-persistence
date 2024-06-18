// build your `/api/projects` router here

const express = require("express");
const Projects = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("get projects");
});

module.exports = router;
