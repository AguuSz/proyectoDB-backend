const express = require("express");
const router = express.Router();

// Importando modelos
const { List } = require("../models/List");

router.get("/", (req, res) => {
	List.find()
		.then((lists) => {
			res.send(lists);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.post("/", (req, res) => {
	let title = req.body.title;
	let newList = new List({
		title,
	});
	newList.save().then((listDoc) => {
		// El document entero es retornado con su id
		res.send(listDoc);
	});
});

router.put("/:id", (req, res) => {
	// Vamos a actualizar un registro (lista).
	List.findOneAndUpdate(
		{ _id: req.params.id },
		{
			$set: req.body,
		}
	).then(() => {
		// Envia el status 200 (todo ok)
		res.sendStatus(200);
	});
});

router.delete("/delete/:id", (req, res) => {
	// Vamos a eliminar un registro por medio de su id.
	List.findOneAndRemove({
		_id: req.params.id,
	}).then((removedListDoc) => {
		res.send(removedListDoc);
	});
});

module.exports = router;
