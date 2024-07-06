import { ActionContext, Module } from "vuex";
import { TodoState, RootState, ITodoItem } from "@/types";

const defaultState = [
  { id: 1, text: "Learn Vue.js", completed: false },
  { id: 2, text: "Learn Vue Router", completed: false },
  { id: 3, text: "Learn Vuex", completed: false },
];

const storedTodos = localStorage.getItem("todos");
const initialState: TodoState = {
  todos: storedTodos ? JSON.parse(storedTodos) : defaultState,
};

const state: TodoState = {
  todos: initialState.todos,
};

const getters = {
  allTodos: (state: TodoState) => state.todos,
  completedTodos: (state: TodoState) =>
    state.todos.filter((todo) => todo.completed),
  activeTodos: (state: TodoState) =>
    state.todos.filter((todo) => !todo.completed),
};

const mutations = {
  ADD_TODO(state: TodoState, todo: ITodoItem) {
    state.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  REMOVE_TODO(state: TodoState, id: number) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  TOGGLE_TODO(state: TodoState, id: number) {
    state.todos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
};

const actions = {
  addTodoAsync({ commit }: ActionContext<TodoState, RootState>, text: string) {
    const todo: ITodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTimeout(() => {
      commit("ADD_TODO", todo);
    }, 1000);
  },
};

export const todo: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
