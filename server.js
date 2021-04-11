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

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

app.use("/lists", listController);

app.listen(port, () => {
	console.log(`Server running on port: http://localhost:${port}`);
});
