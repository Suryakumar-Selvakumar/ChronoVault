const { Router } = require("express");
const messagesRouter = new Router();
const {
  getMessage,
  flagMessage,
} = require("../controllers/messagesController");

messagesRouter.get("/:messageId", getMessage);
messagesRouter.get("/flag/:messageId", flagMessage);

module.exports = messagesRouter;
