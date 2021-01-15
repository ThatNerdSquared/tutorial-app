import React from "react"

function AddTask(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					value={props.newTask}
					name="newTask"
					placeholder="Add a task..."
					onChange={props.formChange}
				/>
				<select
					value={props.newList}
					onChange={props.formChange}
					name="newList"
				>
					<option value="Please select">Please Select</option>
					<option value="Complete">Complete</option>
					<option value="In progress">In progress</option>
					<option value="To-do">To-do</option>
				</select>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default AddTask