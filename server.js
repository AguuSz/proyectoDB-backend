// Imports de librerias
const express = require("express");

// Importing routes
const listController = require("./src/routes/lists.controller");
const taskController = require("./src/routes/task.controller");

// Modelos
const { List } = require("./src/models/List");
const { Task } = require("./src/models/Task");

require("dotenv").config();

const app = express();
const port = process.env.port || 3000;

// Connection to DB
const { mongoose } = require("./src/db/mongoose");

app.use(express.json());
app.use("/lists", listController);
app.use("/lists/:listId/tasks", taskController);

app.listen(port, () => {
	console.log(`Server running on port: http://localhost:${port}`);
});
