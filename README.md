# 14 Model-View-Controller (MVC): Tech Blog

Table of content

- [14 Model-View-Controller (MVC): Tech Blog](#14-model-view-controller-mvc-tech-blog)
- [Description](#description)
- [Installation](#installation)
- [Usage and Screenshots](#usage-and-screenshots)
- [Tech/Framework used](#techframework-used)
- [Tests](#tests)
- [Repositery content/Building structure + deployed links](#repositery-contentbuilding-structure--deployed-links)

# Description

This CMS style (Content Management System) Blog application allows the user to singup and login to their account, publish and delete own blog posts and comment on other users blog posts.

It is build using HTML, CSS, Bottstrap v5.1.3, jQuery, Handlebars.js, Express.js, Node.js, Sequelize, MySQL2 and Express-Sessions.

In addition to that the application includes a cookies to expiere the login time, using bcrypt for password hashing fuction and using two different navbar-page to control the visibility of the navbar items depends on the login-status.

# Installation

The User navigates to the deployed URL and by clicking on "Login" the user gets guided to "Sing up" where anyone can create an personal account to be able to post own posts (including deleting them), viewing all posts with comments and contributing own comments to already existing posts.

![Getting Started](./image/ScreenShot_5.png)

![Getting Started](./image/ScreenShot_1.png)

![Getting Started](./image/ScreenShot_2.png)

# Usage and Screenshots

By clicking on "Login" a user who have already an account can be taken to their personal dashboard.

![Getting Started](./image/ScreenShot_1.png)

![Getting Started](./image/ScreenShot_3.png)

On the dashboard the user is able to delete own posts or to create new post.

![Getting Started](./image/ScreenShot_4.png)

A active user (login) can navigate to "Home" to be able to comment on already excisting post from other blog users.

![Getting Started](./image/ScreenShot_6.png)

By click on a post headline the user gets guided to the page on which the comment can be created.

![Getting Started](./image/ScreenShot_7.png)

![Getting Started](./image/ScreenShot_8.png)

# Tech/Framework used

- Node.js
- npm packages: require, bcrypt, connect-session-sequelize dotenv, express, express-handlebars, express-session, moment, sequelize
- JavaScript
- mySQL2
- jQuery
- Bootsstrap v5.1.3

# Tests

No test has been impletmented.

# Repositery content/Building structure + deployed links

```bash
├── README.md
├── backup-whateverfolder-2022-01-09.txt
├── config
│   └── connection.js
├── controllers
│   ├── api
│   │   ├── comment_routes.js
│   │   ├── index.js
│   │   ├── post_routes.js
│   │   └── user_routes.js
│   ├── home_routes.js
│   └── index.js
├── db
│   └── schema.sql
├── helpers
│   └── index.js
├── image
├── models
│   ├── Comment.js
│   ├── Post.js
│   ├── User.js
│   └── index.js
├── node_modules
│   ├── ...
│   │   └── ...
├── package-lock.json
├── package.json
├── public
│   ├── css
│   └── js
│   ├── comment.js
│   ├── delete-post.js
│   ├── login.js
│   ├── post.js
│   └── singup.js
├── seeds
│   ├── comment-seeds.js
│   ├── index.js
│   ├── post-seeds.js
│   └── user-seeds.js
├── server.js
└── views
├── comment-post.handlebars
├── dashboard.handlebars
├── home.handlebars
├── layouts
│   └── main.handlebars
├── login.handlebars
├── newpost.handlebars
├── partials
│   ├── private-navbar.handlebars
│   └── public-navbar.handlebars
├── show-post-comment.handlebars
└── singup.handlebars
```

- GitHub (dev branch): https://github.com/JenBerlin/Employee-Tracker/pull/1
- Heroku: https://cryptic-castle-55329.herokuapp.com/
