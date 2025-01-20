import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
// import ToDoItem from "./components/ToDoItem";
// import ToDoItem1 from "./components/ToDoItem1";
import TaskItems from "./components/TaskItems";
import "./App.css";

function App() {
	const taskItems = [
		{
			name: "Wash clothes",
			dueDate: "08/03/2023",
		},
		{
			name: "Finish Video",
			dueDate: "10/05/2026",
		},
		{
			name: "Eat food",
			dueDate: "30/06/2025",
		},
	];
	return (
		<center>
			<AppName />
			<div className="to-do-container">
				<AddTask></AddTask>
				<TaskItems taskItems={taskItems}></TaskItems>
			</div>
		</center>
	);
}

export default App;
