import styles from "../App.module.css";
import classNames from "classnames";

interface ListItemProps {
	title: string;
	id: string;
}

function ListItem(props: ListItemProps) {
	return (
		<li key={props.id} className={classNames(styles["listItem"], "form-check")}>
			<label
				className={classNames("form-check-label", styles["itemName"])}
				htmlFor="flexCheckDefault"
			>
				{props.title}
			</label>
			<input
				className="form-check-input"
				type="checkbox"
				value=""
				id="flexCheckDefault"
			/>
		</li>
	);
}

export default ListItem;
