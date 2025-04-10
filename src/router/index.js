import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
    path: '/destiny',
    name: 'destiny',
    component: () => import('../views/DestinyView.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue'),
    redirect: '/list/listTaichung', // 預設到子路由
    children: [
      {
        path: 'listTaichung',
        name: 'listTaichung',
        component: () => import('../views/ListTaichungView.vue'),
        meta: { keepAlive: true }, // 這個路由需要被緩存
      },
      {
        path: 'saveListView',
        name: 'saveListView',
        component: () => import('../views/SaveListView.vue'),
        meta: { keepAlive: false }, // 這個路由不需要被緩存
      },
    ],
  },
  {
    path: '/customize',
    name: 'customize',
    component: () => import('../views/CustomizeView.vue'),
    redirect: '/customize/customizeList', // 預設到子路由
    meta: { requiresAuth: true }, // 需登入才能看到的頁面
    children: [
      {
        path: 'customizeList',
        component: () => import('../views/CustomizeListView.vue'),
      },
      {
        path: 'customizeDestiny',
        component: () => import('../views/CustomizeDestinyView.vue'),
      },
      {
        path: 'customizeEdit',
        component: () => import('../views/CustomizeEditView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'registerView',
    component: () => import('../views/RegisterView.vue'),
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

// 進入路由前判斷，若 無登入 且 無找到登入user 就跳轉到登入頁
const getCurrentUser = () => new Promise((resolve, reject) => {
  const removeListener = onAuthStateChanged(
    getAuth(),
    (user) => {
      removeListener();
      resolve(user);
    },
    reject,
  );
});

router.beforeEach(async (to) => {
  const user = await getCurrentUser();

  if (to.meta.requiresAuth && !user) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    };
  }

  // 不阻擋則回傳 true 讓路由繼續
  return true;
});

export default router;
