const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const session = require("express-session");
const helpers = require("./helpers");

const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  resave: false,
  // Number of milliseconds for 10 minutes
  cookie: { maxAge: 600000 },
  saveUninitialized: true,
};

app.use(session(sess));

// These two things are required to set-up a handlebar application; this ist the set-up
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Will go to creat the DB by using the connection file;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
