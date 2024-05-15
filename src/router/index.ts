import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/index/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
    },
  ],
});

export default router;
