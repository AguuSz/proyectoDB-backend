// Cosas de mongoDB

const mongoose = require("mongoose");
require("dotenv").config();

const atlasUrl = process.env.ATLAS_URL;
mongoose.connect(atlasUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connected!");
});

module.exports = mongoose;
