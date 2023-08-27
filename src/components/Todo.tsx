import styles from "../App.module.css";
import ListItem from "./ListItem";
function Todo() {
	return (
		<div className={styles["todoList_container"]}>
			<ul className={styles["todoList"]}>
				<ListItem title="first item" id="1" />
			</ul>
		</div>
	);
}

export default Todo;
