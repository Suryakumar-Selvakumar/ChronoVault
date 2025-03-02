const { Router } = require("express");
const newRouter = new Router();
const {
  newControllerGet,
  newControllerPost,
} = require("../controllers/newController");

newRouter.get("/", newControllerGet);
newRouter.post("/", newControllerPost);

module.exports = newRouter;
