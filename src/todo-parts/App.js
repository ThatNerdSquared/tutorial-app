import React from "react"
import TodoItem from "./TodoItem"

function App() {
	const uncheckedStyle = {
		fontFamily: "Avenir, Helvetica, sans-serif",
		display: "flex",
		textAlign: "center",
		justifyContent: "center",
	}
	return (
		<div className="todolist">
			<h1 className="todo-header">To-do List</h1>
			<TodoItem name="Be nerdy"/>
			<TodoItem name="Conquer world"/>
			<TodoItem name="Learn more cool stuff"/>
		</div>
	)
}

export default App