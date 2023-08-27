import { Action, TodoItem } from "../types/types";

const initialTodos: TodoItem[] = [
	{
		id: 1,
		title: "Todo 1",
		complete: false,
	},
	{
		id: 2,
		title: "Todo 2",
		complete: false,
	},
	{
		id: 3,
		title: "Todo 3",
		complete: false,
	},
];

const reducer = (state: TodoItem[], action: Action): TodoItem[] => {
	switch (action.type) {
		case "COMPLETE":
			return state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, complete: !todo.complete };
				} else {
					return todo;
				}
			});

		default:
			return state;
	}
};

export { initialTodos, reducer };
