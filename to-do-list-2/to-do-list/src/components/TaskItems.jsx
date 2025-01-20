import ToDoItem from "./ToDoItem";

const TaskItems = ({ taskItems }) => {
	return (
		<>
			<div className="tasks-container">
				{taskItems.map((item) => (
					<ToDoItem
						taskName={item.name}
						taskDate={item.dueDate}
					></ToDoItem>
				))}
			</div>
		</>
	);
};

export default TaskItems;
