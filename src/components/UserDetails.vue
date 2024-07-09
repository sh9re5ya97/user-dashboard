<template>
  <div v-if="user">
    <h2>{{ user.name }} ({{ user.username }})</h2>
    <p>Email: <a :href="'mailto:' + user.email">{{ user.email }}</a></p>
    <p>Phone: <a :href="'tel:' + user.phone">{{ user.phone }}</a></p>
    <p>Website: <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></p>
    <h3>Address</h3>
    <p>{{ user.address.suite }} {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
    <h3>Company</h3>
    <p>{{ user.company.name }}</p>
    <p><i>"{{ user.company.catchPhrase }}"</i></p>
    <p>{{ user.company.bs }}</p>
    <h3>Posts by {{ user.username }}</h3>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      user: null,
      posts: []
    };
  },
  mounted() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then(response => {
        this.user = response.data;
      });
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
      .then(response => {
        this.posts = response.data;
      });
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
}

.post {
  flex: 1 1 calc(33.333% - 10px);
  margin: 5px;
}

@media (max-width: 600px) {
  .post {
    flex: 1 1 100%;
  }
}
</style>
