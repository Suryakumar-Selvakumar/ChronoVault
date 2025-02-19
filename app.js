const express = require("express");
const path = require("node:path");
const app = express();

// data
const messages = require("./db/messages");

// Routers
const newRouter = require("./routes/newRouter");

// setup path for static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// setup view path and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
