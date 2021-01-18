const models = require("../models")

exports.add_task = function(req, res, next) {
	return models.todo.create({
		title: req.body.title,
		list: req.body.list
	}).then(todo => {
		console.log(todo)
		models.todo.findAll().then(todos => {
			res.send(todos)
		})
	})
}
exports.get_tasks = function(req, res, next) {
	return models.todo.findAll().then(todos => {
		res.send(todos)
	})
}