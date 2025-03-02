// data
const { messages } = require("../db/messages");
const { body, validationResult } = require("express-validator");

const newControllerGet = (req, res) => {
  res.render("form", { errors: false });
};

const validateMessage = [
  body("user")
    .trim()
    .isAlpha()
    .withMessage("User name must only contain letters.")
    .isLength({ min: 1, max: 15 })
    .withMessage("User name must be less than 15 letters."),
  body("text")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage("Message must be less than 500 characters."),
];

const newControllerPost = [
  validateMessage,
  (req, res) => {
    const { user, text } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("form", { user: user, text: text, errors: errors.array() });
    }

    messages.push({ text: text, user: user, added: new Date() });

    res.redirect("/");
  },
];

module.exports = { newControllerGet, newControllerPost };
