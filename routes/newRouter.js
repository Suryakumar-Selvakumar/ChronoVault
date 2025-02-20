const { Router } = require("express");
const newRouter = new Router();
const { newController } = require("../controllers/newController");

newRouter.get("/", newController);
newRouter.post("/", newController);

module.exports = newRouter;
