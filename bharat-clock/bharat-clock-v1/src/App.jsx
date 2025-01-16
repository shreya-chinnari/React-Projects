import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<center className="my-4 ">
			<ClockHeading />
			<ClockSlogan />
			<ClockTime />
		</center>
	);
}

export default App;
