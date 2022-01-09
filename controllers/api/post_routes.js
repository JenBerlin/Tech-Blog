const router = require("express").Router();
const { Post } = require("../../models");

// New Post rufen und in die Datebank packen.
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

// Delete a post from database (dashboard).
// "/:id" because of the : I'm transforming information directly to the database
router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        // params = "/:id"
        id: req.params.id,
      },
    });
    if (!deletePost) {
      return res.status(404).json({ error: "Failed to delete the post." });
    }
    return res.status(200).json({ data: "It has been delete." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete the post." });
  }
  // localhost:3001/api/posts/:id
});

module.exports = router;
