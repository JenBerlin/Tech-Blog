const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Because I'm exporting the models in this way. I can import them also in this way by using a de-constructed variabl (see home_routes.js, up) And be doing this I'm reffering to the model directly (see line 6, home_routes.js)
module.exports = { User, Post, Comment };
