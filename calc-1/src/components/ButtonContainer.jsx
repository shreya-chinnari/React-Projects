import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
	const buttonNames = [
		"C",
		"1",
		"2",
		"+",
		"3",
		"4",
		"-",
		"5",
		"6",
		"+",
		"7",
		"8",
		"/",
		"9",
		"=",
		"0",
		".",
	];

	return (
		<>
			{/* use map method */}

			<div className={styles.buttonsContainer}>
				{buttonNames.map((buttonNames) => (
					<button className={styles.button}>{buttonNames}</button>
				))}

				{/* REPLACED with map()
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button> */}
			</div>
		</>
	);
};

export default ButtonContainer;
