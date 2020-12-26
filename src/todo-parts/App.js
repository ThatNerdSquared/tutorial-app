import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./todos"

function App() {
	const components = todoData.map(todo => <TodoItem key={todo.key} title={todo.title} list={todo.list}/>)

	return (
		<div className="todolist">
			<h1 className="todo-header">To-do List</h1>
			{components}
		</div>
	)
}

export default App