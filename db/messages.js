const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessageById = (messageId) => {
  return messages[messageId - 1];
};

module.exports = { messages, getMessageById };
