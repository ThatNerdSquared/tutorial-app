const models = require("../models")

exports.add_task = function(req, res, next) {
	let data = req.body
	return models.todo.create({
		title: data.title,
		list: data.list
	}).then(todo => {
		console.log(todo)
		res.send("done")
	})
}
exports.get_tasks = function(req, res, next) {
	res.set("Access-Control-Allow-Origin", "*") 
	return models.todo.findAll().then(todos => {
		res.send(JSON.stringify({ data: todos }))
	})
}
exports.edit_task = function(req, res, next) {
	let data = req.body
	data.id
	data.list

	return models.todo.update({
		list: data.list
	}, {
		where: {
			id : data.id
		}
	}).then(todo => {
		console.log(todo)
		res.send("done")
	})
}

exports.delete_task = function(req, res, next) {
	let data = req.body
	data.id
	return models.todo.destroy({
		where: {
			id: data.id
		}
	}).then(result => {
		res.send("done")
	})
}