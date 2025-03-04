// data
// const { messages } = require("../db/messages");
const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

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
  asyncHandler(async (req, res) => {
    const { user, text } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("form", { user: user, text: text, errors: errors.array() });
    }

    // messages.push({ text: text, user: user, added: new Date() });
    await db.insertMessage({
      text: text,
      user: user,
      added: new Date().toISOString(),
    });

    res.redirect("/");
  }),
];

module.exports = { newControllerGet, newControllerPost };
