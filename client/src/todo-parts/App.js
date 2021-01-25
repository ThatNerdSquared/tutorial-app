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
		this.deleteMe = this.deleteMe.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.formChange = this.formChange.bind(this)
		this.callAPI = this.callAPI.bind(this)
	}

	async handleCheck(event) {
		const id = event.target.id
		const list = event.target.value
		let data = {
			id: id,
			list: list
		}
		console.log("editTask")
		console.log(data)
		// let res = await fetch("http://localhost:9000/api/edit", {
		let res = await fetch("http://192.168.228.111:9000/api/edit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		})
		console.log(res)
		this.callAPI()
	}

	async deleteMe(event) {
		event.preventDefault()
		let id = event.target.id
		let data = {
			id: id
		}
		// let res = await fetch("http://localhost:9000/api/delete", {
		let res = await fetch("http://192.168.228.111:9000/api/delete", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		})
		console.log(res)
		this.callAPI()
	}

	async handleSubmit(event) {
		event.preventDefault()
		let newName = this.state.newTask
		let setList = this.state.newList
		let data = {
			title: newName,
			list: setList
		}
		console.log("handleSubmit-data")
		console.log(data)
		// let res = await fetch("http://localhost:9000/api", {
		let res = await fetch("http://192.168.228.111:9000/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		})
		console.log(res)
		this.callAPI()
		return
	}

	formChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}

	callAPI() {
		// fetch("http://localhost:9000/api")
		fetch("http://192.168.228.111:9000/api")
			.then(response => response.json())
			.then(response => {
				const data = response.data
				console.log("callAPI-data")
				console.log(data)
				this.setState({
					isLoading: false,
					todos: data,
					newTask : "",
					newList: ""
				})
			})
	}

	componentDidMount() {
		this.callAPI()
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
			console.log("render-State")
			console.log(this.state)
			const components = this.state.todos.map(todo => <TodoItem
				key={todo.id}
				id={todo.id}
				title={todo.title}
				list={todo.list}
				handleChange={this.handleCheck}
				deleteMe={this.deleteMe}
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