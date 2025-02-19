const { Router } = require("express");
const newRouter = new Router();

// data
const messages = require("../db/messages");

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/");

module.exports = newRouter;
