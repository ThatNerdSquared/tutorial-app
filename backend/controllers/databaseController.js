const models = require("../models")

exports.add_task = function(req, res, next) {
	let data = req.body
	return models.todo.create({
		title: data.title,
		list: data.list
	}).then(todo => {
		console.log(todo)
	})
}
exports.get_tasks = function(req, res, next) {
	return models.todo.findAll().then(todos => {
		res.send(todos)
	})
}