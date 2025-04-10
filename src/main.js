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

const pinia = createPinia();
setupFirebase();
const app = createApp(App);

app.use(pinia);
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingOverlay', Loading);
app.mount('#app');
