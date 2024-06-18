// build your `/api/resources` router here

const express = require("express");
const Resources = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("get resources");
});

module.exports = router;
