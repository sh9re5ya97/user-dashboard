<template>
  <div>
    <router-link to="/users">Users</router-link>
    <div v-if="user">
      <h2>{{ user.name }}</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: <a :href="'mailto:' + user.email">{{ user.email }}</a></p>
      <p>Phone: <a :href="'tel:' + user.phone">{{ user.phone }}</a></p>
      <p>Website: <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></p>
      <p>Address: {{ user.address.suite }} {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      <p>Company: {{ user.company.name }}</p>
      <p><i>"{{ user.company.catchPhrase }}"</i></p>
      <p>{{ user.company.bs }}</p>
    </div>
    <div v-if="posts.length">
      <h3>Posts by {{ user.name }}</h3>
      <div v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'UserDetailsPage',
  setup() {
    const route = useRoute();
    const user = ref(null);
    const posts = ref([]);

    onMounted(() => {
      const userId = route.params.id;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
          user.value = data;
        });

      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          posts.value = data;
        });
    });

    return {
      user,
      posts
    };
  }
};
</script>
