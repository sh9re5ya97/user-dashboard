// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import UserListPage  from '../views/UserListPage .vue';
import UserDetailsPage from '../views/UserDetailsPage.vue';

// Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: UserListPage  },
  { path: '/users/:id', component: UserDetailsPage, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// const app = Vue.createApp({})
// app.use(router)

export default router;
