const router = require("express").Router();
// De-Constructed object/variable
const { Post, User, Comment } = require("../models");

// Erster Parameter ist der Pfad und der zweite Parameter die Funktion, die ausgeführt werden soll.; erster Pararmeter /, in diesem Fall Home;
router.get("/", async (req, res) => {
  const { loggedIn } = req.session;

  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postMap = posts.map((post) => post.get({ plain: true }));
    // res.render will require the name of the file, which needs to get rendered
    // { postMap, loggedIn } sind von mir frei bestimmte variablen; diese werden dann von handelbars aufgegrifften, wenn angegeben z. B. in handelbar files;
    res.render("home", { postMap, loggedIn });
    // res.json(postMap);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Singup route; rending the singup page after clicking the button.
// /singup is an address which we have stated in login.handlebars.
router.get("/singup", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'singup' template/handlebar
  res.render("singup");
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

router.get("/comment-post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(
      // Warum "id"? Da oben /:id steht
      req.params.id
    );
    console.log(post);
    req.session.postId = req.params.id;
    // In {} übergeben wir die variable
    res.render("comment-post", { post: post.get({ plain: true }) });
  } catch (err) {
    res.status(500).json(err);
  }
});

// neu
// router.get("/show ... "
// mit allen comments und den post selber auch noch
// res.renter ...

module.exports = router;
