import React from "react";
import styles from "../App.module.css";
import { initialTodos, reducer } from "../reducer";
import { TodoItem } from "../types/types";
import ListItem from "./ListItem";

function Todo() {
	const [todos, dispatch] = React.useReducer(reducer, initialTodos);

	const handleComplete = (todo: TodoItem): void => {
		dispatch({ type: "COMPLETE", id: todo.id });
	};
	return (
		<div className={styles["todoList_container"]}>
			{todos.map((todo) => (
				<ul className={styles["todoList"]}>
					<ListItem
						title={todo.title}
						id={todo.id}
						complete={todo.complete}
						onClick={() => handleComplete(todo)}
					/>
				</ul>
			))}
		</div>
	);
}

export default Todo;
