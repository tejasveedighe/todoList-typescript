export interface TodoItem {
	id: number;
	title: string;
	complete: boolean;
}

interface CompletedItem extends TodoItem {
	onClick: Function;
}

interface CompleteAction {
	type: string;
	id: number;
}

interface AddAction {
	type: string;
	todo: TodoItem;
}

export type Action = CompleteAction;
export type Complete = CompletedItem;
export type Add = AddAction;
