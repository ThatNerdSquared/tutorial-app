import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todos.js"
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const newState = prevState.todos.map(todo => {
				if (todo.id === id) {
					if (todo.list === "Complete") {
						todo.list = "In progress"
						return todo
					}
					else {
						todo.list = "Complete"
						return todo
					}
				}
				else {
					return todo
				}
			})
			return newState
		})
	}
	
	render() {
		const components = this.state.todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} list={todo.list} handleChange={this.handleChange}/>)
		return (
			<div className="todolist">
				<h1 className="todo-header">To-do List</h1>
				{components}
			</div>
		)
	}
}

export default App