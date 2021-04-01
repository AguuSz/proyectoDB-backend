const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Task homepage");
});

router.get("/about", (req, res) => {
	res.send("About homepage");
});

module.exports = router;
