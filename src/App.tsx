import styles from "./App.module.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
	return (
		<div className={styles["App"]}>
			<Header />
			<Todo />
		</div>
	);
}

export default App;
