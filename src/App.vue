<template>
  <div id="app">
    <header>
      <h1>User Dashboard</h1>
      <nav>
        <router-link to="/users">User List</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add your styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

main {
  padding: 20px;
}
</style>
