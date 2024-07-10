<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row w-100 m-0 justify-content-between align-items-center">
      <div class="col-md-8 align-self-start">
        <h1 class="m-0">Users</h1>
      </div>
      <div class="d-flex flex-column flex-md-row m-0 w-100  m-0 p-0">  
        <div class="w-100 w-md-50 me-md-3">
          <label class="fw-bolder fs-6">Search</label>
          <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          class="form-control mb-3 p-0 ps-1"
          @input="filterUsers"
        />
        </div>
        <div class="w-100 w-md-50 ">
          <label class="fw-bolder fs-6">Sort By</label>
          <select
          v-model="sortOption"
          @change="sortUsers"
          class="form-select mb-3 p-0 ps-1"
        >
          <option value="name">Name</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
        </select>
        </div>
      </div>
    </div>

    <div class="list-group">
       <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from '@/components/UserCard.vue';

export default {
  name: "UserList",
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      searchQuery: "",
      sortOption: "name",
      filteredUsers: [],
    };
  },
  methods: {
    async fetchUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = response.data;
      this.filteredUsers = this.users;
      console.log(this.users)
    },
    filterUsers() {
      const query = this.searchQuery.toLowerCase();
      this.filteredUsers = this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    },
    sortUsers() {
      this.filteredUsers.sort((a, b) => {
        if (this.sortOption === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.sortOption === "username") {
          return a.username.localeCompare(b.username);
        } else {
          return a.email.localeCompare(b.email);
        }
      });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

