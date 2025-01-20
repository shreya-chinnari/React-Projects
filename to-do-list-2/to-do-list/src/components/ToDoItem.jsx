function ToDoItem({ taskName, taskDate }) {
	return (
		<div className="container">
			<div className="row custom-row">
				<div className="col-6">{taskName}</div>
				<div className="col-4">{taskDate}</div>
				<div className="col-2">
					<button
						type="button"
						className="btn btn-danger custom-btn"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default ToDoItem;
