const express = require("express");
const router = express.Router();

// Importando modelos
const { List } = require("../models/List");
const { Task } = require("../models/Task");

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

// ------------- Tasks -------------
router.get("/:listId/tasks/:taskId", (req, res) => {
	Task.findOne({
		_id: req.params.taskId,
		_listId: req.params.listId,
	}).then((task) => {
		res.sen(task);
	});
});

router.get("/:listId/tasks", (req, res) => {
	// Devolvemos las tareas
	Task.find({
		_listId: req.params.listId,
	}).then((tasks) => {
		res.send(tasks);
	});
});

router.post("/:listId/tasks", (req, res) => {
	// Crear una nueva tarea dentro de la lista
	let newTask = new Task({
		title: req.body.title,
		_listId: req.params.listId,
	});
	newTask.save().then((newTaskDoc) => {
		res.send(newTaskDoc);
	});
});

router.put("/:listId/tasks/:taskId", (req, res) => {
	// Devolvemos las tareas
	Task.findOneAndUpdate(
		{
			_id: req.params.taskId,
			_listId: req.params.listId,
		},
		{
			$set: req.body,
		}
	).then(() => {
		// Envia el status 200 (todo ok)
		res.sendStatus(200);
	});
});

router.delete("/:listId/tasks/:taskId", (req, res) => {
	// Devolvemos las tareas
	Task.findOneAndRemove({
		_id: req.params.taskId,
		_listId: req.params.listId,
	}).then((removedTask) => {
		res.send(removedTask);
	});
});

module.exports = router;
