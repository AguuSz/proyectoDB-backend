// Imports de librerias
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Importing routes
const usersRoutes = require("./src/routes/users.routes");
const profileRoutes = require("./src/routes/profile.routes");
const postsRoutes = require("./src/routes/posts.routes");

const app = express();
