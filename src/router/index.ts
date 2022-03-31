import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/constant';
import Home from '@/page/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: ROUTES.APP.HOME,
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
