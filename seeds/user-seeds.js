const bcrypt = require("bcrypt");
const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Sylvia",
    password: bcrypt.hashSync("Plath123", 10),
  },
  {
    id: 2,
    username: "Jack",
    password: bcrypt.hashSync("Rose123", 10),
  },
  {
    id: 3,
    username: "Antonio",
    password: bcrypt.hashSync("Maria123", 10),
  },
  {
    id: 4,
    username: "Anabelle",
    password: bcrypt.hashSync("Home123", 10),
  },
  {
    id: 5,
    username: "Justine",
    password: bcrypt.hashSync("Just123", 10),
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
