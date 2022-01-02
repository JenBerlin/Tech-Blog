const router = require("express").Router();
const { User, Post } = require("../models");

// CREATE new user
// router.post("/", async (req, res) => {
//   try {
//     const userData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     // Set up sessions with a 'loggedIn' variable set to `true`
//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// New Post rufen und in die Datebank packen.
router.post("/post", async (req, res) => {
  // Body, da wir es mit der post.js so bestimmt haben.
  //   try/catch handling bei Fehlerfall.
  try {
    const postData = req.body;
    await Post.create({
      title: postData.title,
      content: postData.post,
      user_id: req.session.userId,
    });
    // Es wird immer auf ein res gewartet (req, RES); Status 200 wäre dann hier die RES.
    // Man muss dem status noch ein Ende mitgeben.
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
