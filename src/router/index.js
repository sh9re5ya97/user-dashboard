import { createRouter, createWebHistory } from 'vue-router';
import UserListPage from '../views/UserListPage.vue';
import UserDetailsPage from '../views/UserDetailsPage.vue';

const routes = [
  { path: '/', name: 'UserList', component: UserListPage },
  { path: '/user/:id', name: 'UserDetails', component: UserDetailsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
