export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: ITodoItem[];
}

export interface RootState {
  todo: TodoState;
}
