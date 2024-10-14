import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory('/frontend_spider/'),
  routes,
});

export default router;
