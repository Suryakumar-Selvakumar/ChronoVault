const { Router } = require("express");
const newRouter = new Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newRouter;
