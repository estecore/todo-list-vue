<template>
  <li class="todo-item">
    <span :class="{ completed: todo.completed }" @click="toggleCompleted">{{
      todo.text
    }}</span>
    <button @click="$emit('remove-todo')">Remove</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodoItem } from "../types";

export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<ITodoItem>,
      required: true,
    },
  },

  emits: ["remove-todo", "toggle-completed"],

  setup(props, { emit }) {
    const toggleCompleted = () => {
      emit("toggle-completed");
    };

    return {
      toggleCompleted,
    };
  },
});
</script>

<style scoped lang="scss">
.todo-item {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  span {
    word-break: break-word;

    position: relative;
    cursor: pointer;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &::before {
      user-select: none;
      content: "○";
      position: absolute;
      left: -1rem;
      color: inherit;
      transition: content 0.3s ease;
    }

    &.completed {
      user-select: none;
      text-decoration: line-through;
      color: #42b983;
      transition: all 0.3s ease;

      &::before {
        content: "✓";
      }
    }
  }

  button {
    user-select: none;
    padding: 10px;
    background: #ff1111;
    opacity: 0.8;
    color: #fff;
    border-radius: 0.6rem;
    transition: opacity 0.3s ease, background-color 0.3s ease;

    &:hover {
      opacity: 1;
      background: #bb0000;
    }
  }
}
</style>
