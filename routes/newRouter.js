const { Router } = require("express");
const newRouter = new Router();

// data
const messages = require("../db/messages");

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  const { user, text } = req.body;

  messages.push({ text: text, user: user, added: new Date() });

  res.redirect("/");
});

module.exports = newRouter;
