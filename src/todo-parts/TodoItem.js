import React from "react"

function TodoItem(props) {
	let checked
	if (props.list === "Complete") {
		checked = true
	}
	else {
		checked = false
	}
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={checked}
				onChange={() => props.handleChange(props.id)}
			/>
			<p>{props.title + ": "}</p>
			<p style={{color: props.list==="To-do" ? "red" : props.list==="In progress" ? "#00c3ff" : "black"}}>{props.list}</p>
		</div>
	)
}

export default TodoItem