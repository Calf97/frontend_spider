import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import( "../views/HomeView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import("../views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory('/frontend_spider/'),
  routes,
});

export default router;
