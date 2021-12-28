const router = require("express").Router();
const models = require("../models");

router.get("/", async (req, res) => {
  const posts = models.Post.findAll();
  // To be finished
  res.render("home");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

module.exports = router;
