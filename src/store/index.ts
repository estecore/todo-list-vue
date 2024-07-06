import { createStore } from "vuex";

import { RootState } from "@/types";

import { todo } from "./modules/todo";

const store = createStore<RootState>({
  modules: {
    todo,
  },
});

export default store;
