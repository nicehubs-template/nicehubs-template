import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/constants';
import Home from '@/pages/Home/Home.vue';

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
