module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  // Register User
  router.post("/register", auth.register);

  app.use("/api/auth", router);
};
