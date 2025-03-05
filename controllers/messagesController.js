// libs
const asyncHandler = require("express-async-handler");

// data
const db = require("../db/queries");

// helpers
const { getFormattedDate } = require("../utils/getFormattedDate");

const messagesController = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(messageId);

  res.render("messages/messagePage", {
    message: message,
    getFormattedDate: getFormattedDate,
  });
});

module.exports = { messagesController };
