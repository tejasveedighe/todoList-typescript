import React from "react";
import styles from "../App.module.css";

interface ListItemProps {
	title: string;
	id: string;
}

function ListItem(props: ListItemProps) {
	return (
		<li className={styles["listItem"]}>
			<p className={styles["itemName"]}>Firs5t</p>
			<input type="checkbox" />
		</li>
	);
}

export default ListItem;
