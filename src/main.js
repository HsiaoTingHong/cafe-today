import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';
import './assets/all.css';
import './assets/fonts.css';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingOverlay', Loading);
app.mount('#app');
