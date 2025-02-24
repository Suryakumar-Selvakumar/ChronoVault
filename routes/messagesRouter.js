const { Router } = require("express");
const messagesRouter = new Router();
const { messagesController } = require("../controllers/messagesController");

messagesRouter.get("/:messageId", messagesController);

module.exports = messagesRouter;
