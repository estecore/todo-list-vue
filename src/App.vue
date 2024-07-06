<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  list-style: none;
  text-decoration: none;
  color: inherit;
  background: none;
}

button {
  cursor: pointer;
}

body {
  overflow: hidden;
  font-family: Arial, Helvetica, system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

section.section {
  width: 100%;
  padding: 40px 0;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
