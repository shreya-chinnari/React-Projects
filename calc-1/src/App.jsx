import styles from "./App.module.css";
import Input from "./components/Input";
import ButtonContainer from "./components/ButtonContainer";

function App() {
	return (
		<>
			<div
				id="calculator"
				className={styles.container}
			>
				<Input></Input>
				<ButtonContainer></ButtonContainer>
			</div>
		</>
	);
}

export default App;
