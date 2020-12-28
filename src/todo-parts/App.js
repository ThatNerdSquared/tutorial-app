import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todos.js"
import LoadScreen from "./LoadScreen"
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoading: true,
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const newState = prevState.todos.map(todo => {
				if (todo.id === id) {
					if (todo.list === "Complete") {
						return {
							...todo,
							list: "In progress"
						}
					}
					else {
						return {
							...todo,
							list: "Complete"
						}
					}
				}
				return todo
			})
			return {
				isLoading: false,
				todos: newState
			}
		})
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState(prevState => {
				let todos = prevState.todos
				return {
					isLoading: false,
					todos: todos
				}
			})
		}, 1500)
	}
	
	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<LoadScreen />
				</div>
			)
		}
		else {
			const components = this.state.todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} list={todo.list} handleChange={this.handleChange}/>)
			return (
				<div className="todolist">
					<h1 className="todo-header">To-do List</h1>
					{components}
				</div>
			)
		}	
	}
}

export default App