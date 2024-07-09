<template>
  <div>
    <input v-model="search" placeholder="Search users..."/>
    <select v-model="sortBy">
      <option value="name">Name</option>
      <option value="username">Username</option>
      <option value="email">Email</option>
    </select>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        <router-link :to="'/users/' + user.id">{{ user.name }} ({{ user.username }})</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      search: '',
      sortBy: 'name'
    };
  },
  computed: {
    filteredUsers() {
      let users = this.users.filter(user => {
        return user.name.includes(this.search) || user.username.includes(this.search) || user.email.includes(this.search);
      });
      return users.sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'username') {
          return a.username.localeCompare(b.username);
        } else {
          return a.email.localeCompare(b.email);
        }
      });
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      });
  }
};
</script>
