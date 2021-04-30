import { createApp } from 'vue';
import App from './App.vue';
import Router from '../src/router/index';

// const app = createApp(App);
// app.use(router);
// app.mount('#app');

createApp(App)
.use(Router)
.mount('#app')