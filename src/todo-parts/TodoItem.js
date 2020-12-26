import React from "react"

function TodoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<p>{props.title + ": "}</p>
			<p style={{color: props.list=="To-do" ? "red" : props.list=="In progress" ? "#00c3ff" : "black"}}>{props.list}</p>
		</div>
	)
}

export default TodoItem