const router = require("express").Router();
// De-Constructed object/variable
const { Post, User, Comment } = require("../models");

// Erster Parameter ist der Pfad und der zweite Parameter die Funktion, die ausgeführt werden soll.; erster Pararmeter /, in diesem Fall Home;
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postMap = posts.map((post) => post.get({ plain: true }));
    // res.render will require the name of the file, which needs to get rendered
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

router.get("/logout", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  req.session.loggedIn = false;
  delete req.session.userId;
  res.redirect("/");
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

router.get("/newpost", (req, res) => {
  res.render("newpost");
});

module.exports = router;
