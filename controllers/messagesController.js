// data
const messages = require("../db/messages");

const messagesController = (req, res) => {
  const { messageId } = req.params;

  const message = messages[Number(messageId) - 1];

  res.render("messages/messagePage", { message: message });
};

module.exports = { messagesController };
