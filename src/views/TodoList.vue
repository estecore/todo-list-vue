<template>
  <section class="section">
    <div class="container">
      <div id="todo-list">
        <h1 class="title">To-Do List on Vue</h1>

        <AddTodo @add-todo="addTodo" />

        <ul class="todo-list-items">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove-todo="removeTodo(todo.id)"
            @toggle-completed="toggleCompleted(todo.id)"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import AddTodo from "../components/AddTodo.vue";
import TodoItem from "../components/TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    AddTodo,
    TodoItem,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.getters["todo/allTodos"]);

    const addTodo = (text: string) => {
      store.dispatch("todo/addTodoAsync", text);
    };

    const removeTodo = (id: number) => {
      store.commit("todo/REMOVE_TODO", id);
    };

    const toggleCompleted = (id: number) => {
      store.commit("todo/TOGGLE_TODO", id);
    };

    return {
      todos,
      addTodo,
      removeTodo,
      toggleCompleted,
    };
  },
});
</script>

<style scoped lang="scss">
#todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .title {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }

  .todo-list-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
