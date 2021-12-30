const router = require("express").Router();
// De-Constructed object/variable
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postMap = posts.map((post) => post.get({ plain: true }));
    // To be finished
    res.render("home", { postMap });
    // res.json(postMap);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

module.exports = router;
