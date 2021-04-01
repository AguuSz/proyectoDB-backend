// Imports de librerias
const express = require("express");

// Connection to DB
const { mongoose } = require("./src/db/mongoose");

// Importing routes
const listController = require("./src/routes/lists.controller");

// Modelos
const { List } = require("./src/models/List");
const { Task } = require("./src/models/Task");

require("dotenv").config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/lists", listController);

app.listen(port, () => {
	console.log(`Server running on port: http://localhost:${port}`);
});
