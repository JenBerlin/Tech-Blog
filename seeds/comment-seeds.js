const { Comment } = require("../models");

const commentData = [
  { id: 1, comment: "Nice point of view", user_id: 5 },
  { id: 2, comment: "I really like your post", user_id: 1 },
  { id: 3, comment: "Fascinating", user_id: 3 },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
