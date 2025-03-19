import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue'),
    children: [
      {
        path: 'listTaichung',
        component: () => import('../views/ListTaichungView.vue'),
      },
    ],
  },
  {
    path: '/destiny',
    name: 'destiny',
    component: () => import('../views/DestinyView.vue'),
  },
  {
    path: '/customize',
    name: 'customize',
    component: () => import('../views/CustomizeView.vue'),
    children: [
      {
        path: 'customizeList',
        component: () => import('../views/CustomizeListView.vue'),
      },
      {
        path: 'customizeDestiny',
        component: () => import('../views/CustomizeDestinyView.vue'),
      },
    ],
  },
  {
    path: '/storeView',
    name: 'storeView',
    component: () => import('../views/StoreViewComposition.vue'),
  },
  {
    // 若輸入不存在的路由時自動導回根目錄
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/cafe-today/' : '/'),
  routes,
});

export default router;
