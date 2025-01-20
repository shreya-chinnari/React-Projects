import ToDoItem from "./ToDoItem";
import styles from "./TaskItems.module.css";

const TaskItems = ({ taskItems }) => {
	return (
		<>
			<div className={styles.tasksContainer}>
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
