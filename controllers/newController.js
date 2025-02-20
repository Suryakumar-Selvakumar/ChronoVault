// data
const messages = require("../db/messages");

const newController = (req, res) => {
  if (req.method === "GET") {
    res.render("form");
  } else if (req.method === "POST") {
    const { user, text } = req.body;

    messages.push({ text: text, user: user, added: new Date() });

    res.redirect("/");
  }
};

module.exports = { newController };
