import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import ToDoItem from "./components/ToDoItem";
// import ToDoItem1 from "./components/ToDoItem1";
import "./App.css";

function App() {
	return (
		<center className="to-do-container">
			<AppName />
			<AddTask></AddTask>
			<div className="tasks-container">
				<ToDoItem
					taskName="Wash clothes"
					taskDate="08/03/2003"
				></ToDoItem>
				<ToDoItem
					taskName="Finish Video"
					taskDate="10/05/2026"
				></ToDoItem>
			</div>
		</center>
	);
}

export default App;
