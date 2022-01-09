# 14 Model-View-Controller (MVC): Tech Blog

Table of content

- [14 Model-View-Controller (MVC): Tech Blog](#14-model-view-controller-mvc-tech-blog)
- [Description](#description)
- [Installation](#installation)
- [Building Structure](#building-structure)
- [Usage and Screenshots](#usage-and-screenshots)
- [Tech/Framwork used](#techframwork-used)
- [Tests](#tests)
- [Repositery content + link](#repositery-content--link)

# Description

This CMS style (Content Management System) Blog application allows the user to singup and login to their account, publish and delete own blog posts and comment on other users blog posts.

It is build using HTML, CSS, Bottstrap V5, jQuery, Handlebars.js, Express.js, Node.js, Sequelize, MySQL2 and Express-Sessions.

In addition to that the application includes a cookies to expiere the login time, using bcrypt for password hashing fuction and using two different navbar-page to control the visibility of the navbar items depends on the login-status.

# Installation

The User navigates to the deployed URL and by clicking on "Login" anyone can create an personal account to be able to post own posts (including deleting them), viewing all posts with comments and contributing own comments to already existing posts.

Login Screenshot: ...

# Building Structure

The starter code has been modified as followw:

- Install all dependencies ("dotenv", "express", "mysql2", "sequelize")
- Setting up the server.js file to get the server running by using "sequelize"
- Database login gets supported by an .env file
- Setting up the database by completing the database models as requiered
- The connection file establishes the database connection by using "sequelize" in node.js, the .env as well as by naming the host (localhost) and dialect (MySQL)
- The API routes are setting up the relation between the tabels and the requests (get, post, put and delete) by using express.js

# Usage and Screenshots

Usage ...

![Getting Started](./image/ScreenShot_1.png)

# Tech/Framwork used

- Node.js
- npm packages: require, bcrypt, connect-session-sequelize dotenv, express, express-handlebars, express-session, moment, sequelize
- JavaScript
- mySQL2
- jQuery
- Bootsstrap v5

# Tests

No test has been impletmented.

# Repositery content + link

- config
  - connection.js
- controllers
  - api
    - comment_routes.js
    - index.js
    - post_routes.js
    - user_routes.js
  - home_routes.js
  - index.js
- db
  - schema.sql
- helpers
  - index.js
- image
  - 1-Screenshot.png
- models
  - Comment.js
  - index.js
  - Post.js
  - User.js
- node_modules
  - ...
- public
  - css
  - js
    - comment.js
    - delete-post.js
    - login.js
    - post.js
    - singup.js
- seeds
  - comment-seeds.js
  - index.js
  - post-seeds.js
  - user-seeds.js
- views
  - layouts
    - main.handlebars
  - partials
    - private-navbar.handlebars
    - public-navbar.handlebars
  - comment-post.handlebars
  - dashboard.handlebars
  - home.handlebars
  - login.handlebars
  - newpost.handlebars
  - show-post-comment.handlebars
  - singup.handlebars
- .env
- .gitignore
- package-lock.json
- package.json
- README.md
- server.js

- GitHub (dev branch): https://github.com/JenBerlin/Employee-Tracker/pull/1
- Heroku: https://cryptic-castle-55329.herokuapp.com/
