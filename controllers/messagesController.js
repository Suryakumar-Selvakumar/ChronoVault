// libs
const asyncHandler = require("express-async-handler");

// data
const db = require("../db/queries");

// helpers
const { getFormattedDate } = require("../utils/getFormattedDate");

const getMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(messageId);

  res.render("messages/messagePage", {
    message: message,
    getFormattedDate: getFormattedDate,
  });
});

const flagMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  await db.flagMessageById(messageId);
  res.redirect("/");
});

module.exports = { getMessage, flagMessage };
