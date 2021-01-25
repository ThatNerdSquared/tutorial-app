import React from "react"

function TodoItem(props) {
	let checked
	let checkedStyle = {
		color: "grey",
		fontStyle: "italic",
		textDecoration: "line-through"
	}
	let nonCheckedStyle = {
		color: props.list==="To-do" ? "red" : props.list==="In progress" ? "#00c3ff" : null
	}
	if (props.list === "Complete") {
		checked = true
	}
	else {
		checked = false
	}
	return (
		<div className="todo-item">
			{/* <input
				type="checkbox"
				checked={checked}
				onChange={() => props.handleChange(props.id)}
			/> */}
			<form>
				<select
					id={props.id}
					value={props.list}
					onChange={props.handleChange}
				>
					<option value="Complete">Complete</option>
					<option value="In progress">In progress</option>
					<option value="To-do">To-do</option>
				</select>
			</form>
				<p style={checked ? checkedStyle : null}>{props.title + ": "}</p>
				<p style={checked ? checkedStyle : nonCheckedStyle}>{props.list}</p>
			<form
				id={props.id}
				onSubmit={props.deleteMe}
			>
				<button>Delete</button>
			</form>
		</div>
	)
}

export default TodoItem