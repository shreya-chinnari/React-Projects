import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
	return (
		<>
			<div className={styles.buttonsContainer}>
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button>
				<button className={styles.button}>C</button>
			</div>
		</>
	);
};

export default ButtonContainer;
