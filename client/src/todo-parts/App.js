import React from "react"
import TodoItem from "./TodoItem"
// import todosData from "./todos.js"
import LoadScreen from "./LoadScreen"
import AddTask from "./AddTask"
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoading: true,
			todos: [],
			newTask : "",
			newList: ""
		}
		this.handleCheck= this.handleCheck.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.formChange = this.formChange.bind(this)
		this.callAPI = this.callAPI.bind(this)
	}

	handleCheck(id) {
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

	handleSubmit(event) {
		event.preventDefault()
		let todosLength = this.state.todos
		let g;
		g = todosLength.length
		let incID = g+1
		let newID = incID.toString()
		let newName = this.state.newTask
		let setList = this.state.newList
		let data = {
			title: newName,
			list: setList
		}
		fetch("http://localhost:9000/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		})
		this.callAPI()
		// this.setState(prevState => {
		// 	let todos = []
		// 	prevState.todos.forEach(item => todos.push(item))
		// 	todos.push({
		// 		id: newID,
		// 		title: newName,
		// 		list: setList
		// 	})
		// 	return {
		// 		isLoading: false,
		// 		newTask: "",
		// 		newList: "",
		// 		todos: todos
		// 	}
		// })
	}

	formChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}

	callAPI() {
		fetch("http://localhost:9000/api")
			.then(res => console.log(JSON.parse(res.body)))
			// .then(res => this.setState(res => {
			// 	let todoData
			// 	res === undefined ? todoData = [] : todoData = res
			// 	console.log(res === undefined)
			// 	console.log(todoData)
			// 	return {
			// 		isLoading: false,
			// 		todos: todoData
			// 	}
			// }))

			.then(res => this.setState({
				isLoading: false,
				todos: res,
			}))
	}

	componentDidMount() {
		this.callAPI()
		// setTimeout(() => {
		// 	this.setState(prevState => {
		// 		let todos = prevState.todos
		// 		return {
		// 			isLoading: false,
		// 			todos: todos
		// 		}
		// 	})
		// }, 1500)
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
			console.log(this.state)
			const components = this.state.todos.map(todo => <TodoItem
				key={todo.id}
				id={todo.id}
				title={todo.title}
				list={todo.list}
				handleChange={this.handleCheck}
			/>)
			return (
				<div className="todolist">
					<h1 className="todo-header">To-do List</h1>
					<AddTask
						newTask={this.state.newTask}
						newList={this.state.newList}
						formChange={this.formChange}
						handleSubmit={this.handleSubmit}
					/>
					{components}
				</div>
			)
		}	
	}
}

export default App