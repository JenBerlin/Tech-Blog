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

// Login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    const postMap = posts.map((post) => post.get({ plain: true }));
    // To be finished
    res.render("dashboard", { postMap });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
