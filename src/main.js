import { createApp } from 'vue';
import { createPinia } from 'pinia';
import setupFirebase from '@/services/firebase';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';
import './assets/all.css';
import './assets/animate.css';
import './assets/fonts.css';
import useCafeStore from './stores/cafes';

const pinia = createPinia();
setupFirebase();
const app = createApp(App);

app.use(pinia);
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingOverlay', Loading);

// 打開首頁後立即預加載台中咖啡店列表資料
const cafeStore = useCafeStore();
cafeStore.initializePreload();

app.mount('#app');
