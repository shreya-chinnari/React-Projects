function AddTask() {
	return (
		<div className="row custom-row">
			<div className="col-6">
				<input
					type="text"
					placeholder="Enter Task Here"
				/>
			</div>
			<div className="col-4">
				<input type="date" />
			</div>
			<div className="col-2">
				<button
					type="button"
					className="btn btn-success custom-btn"
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default AddTask;
