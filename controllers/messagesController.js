// libs
const asyncHandler = require("express-async-handler");

// data
const { messages, getMessageById } = require("../db/messages");

// helpers
const { getFormattedDate } = require("../utils/getFormattedDate");

const messagesController = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await getMessageById(Number(messageId));

  res.render("messages/messagePage", {
    message: message,
    getFormattedDate: getFormattedDate,
  });
});

module.exports = { messagesController };
