<template>
  <div class="add-todo">
    <input
      type="text"
      placeholder="Add Todo"
      v-model="newTodo"
      @keyup.enter="submitTodo"
    />
    <button @click="submitTodo">Add Todo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddTodo",
  emits: ["add-todo"],
  setup(_, { emit }) {
    const newTodo = ref("");

    const submitTodo = () => {
      if (newTodo.value.trim() !== "") {
        emit("add-todo", newTodo.value);
        newTodo.value = "";
      }
    };

    return {
      newTodo,
      submitTodo,
    };
  },
});
</script>

<style scoped lang="scss">
.add-todo {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #42b983;
    border-radius: 0.6rem;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #009150;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      outline: none;
    }

    &::placeholder {
      color: #ccc;
    }
  }

  button {
    width: 10rem;
    padding: 10px 15px;
    background: #42b983;
    color: #fff;
    border: none;
    border-radius: 0.6rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: #009150;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
