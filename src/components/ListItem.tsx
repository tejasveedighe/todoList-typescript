import styles from "../App.module.css";
import classNames from "classnames";
import { Complete } from "../types/types";

function ListItem(props: Complete) {
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
				checked={props.complete}
				id="flexCheckDefault"
				onClick={() => props.onClick()}
			/>
		</li>
	);
}

export default ListItem;
