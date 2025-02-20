const { Router } = require("express");
const messagesRouter = new Router();

// data
const messages = require("../db/messages");

messagesRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  
  const message = messages[Number(messageId) - 1];

  res.render("messages/messagePage", { message: message });
});

module.exports = messagesRouter;
