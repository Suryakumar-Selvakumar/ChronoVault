const { Router } = require("express");
const messagesRouter = new Router();
const { messagesController } = require("../controllers/messagesController");

// data
const messages = require("../db/messages");

messagesRouter.get("/:messageId", messagesController);

module.exports = messagesRouter;
