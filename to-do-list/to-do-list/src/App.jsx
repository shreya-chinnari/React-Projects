import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
	return (
		<center className="to-do-container">
			<AppName />
			<AddTask></AddTask>
			<div className="tasks-container">
				<ToDoItem></ToDoItem>
				<ToDoItem></ToDoItem>
				<ToDoItem></ToDoItem>
			</div>
		</center>
	);
}

export default App;
