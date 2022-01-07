const router = require("express").Router();
const { Comment } = require("../../models");

// New Comment rufen und in die Datebank packen.
router.post("/", async (req, res) => {
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
