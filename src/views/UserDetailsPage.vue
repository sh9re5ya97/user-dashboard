<template>
  <div v-if="user">
    <div class="d-flex p-3 my-2">
      <router-link to="/"><h2>Users</h2></router-link
      ><span
        ><h2>>{{ user.name }}</h2></span
      >
    </div>
    <div class="row w-100 m-0">
      <div class="col-12 col-md-4">
        <!-- large screen view -->
        <div class="card d-none d-md-block p-4" style="height: 100%">
          <h4>Contact Info</h4>
          <div>Username: {{ user.username }}</div>
          <div>
            Email: <a :href="'mailto:' + user.email">{{ user.email }}</a>
          </div>
          <div>
            Phone: <a :href="'tel:' + user.phone">{{ user.phone }}</a>
          </div>
          <div>
            Website:
            <a :href="'http://' + user.website" target="_blank">{{
              user.website
            }}</a>
          </div>
        </div>
        <!-- small screen view -->
        <div class="d-sm-block d-md-none">
          <h4>Contact Info</h4>
          <div>Username: {{ user.username }}</div>
          <div>
            Email: <a :href="'mailto:' + user.email">{{ user.email }}</a>
          </div>
          <div>
            Phone: <a :href="'tel:' + user.phone">{{ user.phone }}</a>
          </div>
          <div>
            Website:
            <a :href="'http://' + user.website" target="_blank">{{
              user.website
            }}</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card d-none d-md-block p-4" style="height: 100%">
          <h4>Address</h4>
          <div>
            {{ user.address.suite }} {{ user.address.street }},
            {{ user.address.city }}, {{ user.address.zipcode }}
          </div>
        </div>
        <!-- small screen view -->
        <div class="d-sm-block d-md-none my-4">
          <h4>Address</h4>
          <div>
            {{ user.address.suite }} {{ user.address.street }},
            {{ user.address.city }}, {{ user.address.zipcode }}
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card d-none d-md-block p-4" style="height: 100%">
          <h4>Company</h4>
          <div>{{ user.company.name }}</div>
          <div>"{{ user.company.catchPhrase }}"</div>
          <div>{{ user.company.bs }}</div>
        </div>
        <!-- small screen view -->
        <div class="d-sm-block d-md-none">
          <h4>Company</h4>
          <div>{{ user.company.name }}</div>
          <div>"{{ user.company.catchPhrase }}"</div>
          <div>{{ user.company.bs }}</div>
          </div>
          <hr class="d-block d-sm-none" />
      </div>
    </div>

    <div v-if="posts.length">
      <h2 class="p-3 mt-md-5 mb-2">Posts by {{ user.name }}</h2>
      <div class="row d-flex m-0">
        <div v-for="post in posts" :key="post.id" class="col-12 col-md-4 mb-3">
          <!-- med/large screen view -->
          <div class="card d-none d-md-block p-4" style="height: 100%">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
          </div>
          <!-- small screen view -->
          <div class="d-sm-block d-md-none">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
          </div>
          <hr class="d-block d-sm-none" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "UserDetailsPage",
  setup() {
    const route = useRoute();
    const user = ref(null);
    const posts = ref([]);

    onMounted(() => {
      const userId = route.params.id;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          user.value = data;
        });

      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          posts.value = data;
        });
    });

    return {
      user,
      posts,
    };
  },
};
</script>

<style>
.card {
  border: 1px solid black;
  border-radius: 0px;
}
</style>
