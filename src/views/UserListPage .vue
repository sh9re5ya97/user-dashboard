<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search users" />
    <select v-model="sortKey">
      <option value="name">Name</option>
      <option value="username">Username</option>
      <option value="email">Email</option>
    </select>
    <ul>
      <li v-for="user in filteredAndSortedUsers" :key="user.id">
        <router-link :to="'/users/' + user.id">{{ user.name }}</router-link> - 
        <a :href="'mailto:' + user.email">{{ user.email }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'UserListPage',
  setup() {
    const users = ref([]);
    const searchQuery = ref('');
    const sortKey = ref('name');

    const filteredAndSortedUsers = computed(() => {
      return users.value
        .filter(user => {
          return (
            user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
          );
        })
        .sort((a, b) => {
          if (sortKey.value === 'name') {
            return a.name.localeCompare(b.name);
          } else if (sortKey.value === 'username') {
            return a.username.localeCompare(b.username);
          } else if (sortKey.value === 'email') {
            return a.email.localeCompare(b.email);
          }
        });
    });

    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          users.value = data;
        });
    });

    return {
      users,
      searchQuery,
      sortKey,
      filteredAndSortedUsers
    };
  }
};
</script>
 