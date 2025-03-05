// libs
const express = require("express");
const path = require("node:path");
const asyncHandler = require("express-async-handler");

// app config
const app = express();
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath)); // setup path for static files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // setup view path and engine

// env
const port = process.env.PORT || 3000;

// utils
const { getFormattedDate } = require("./utils/getFormattedDate");
const { flagMessage } = require("./controllers/messagesController");

// data
const db = require("./db/queries");

// Routers
const newRouter = require("./routes/newRouter");
const messagesRouter = require("./routes/messagesRouter");

// setup express middleware to use form's POST data
app.use(express.urlencoded({ extended: true }));

app.get(
  "/",
  asyncHandler(async (req, res) => {
    const messages = await db.getMessages();

    res.render("index", {
      messages: messages,
      getFormattedDate: getFormattedDate,
    });
  })
);

app.get(
  "/all",
  asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();

    res.render("indexAll", {
      messages: messages,
      getFormattedDate: getFormattedDate,
    });
  })
);

app.use("/new", newRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
