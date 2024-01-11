import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import router from './router.js';

import { createApp } from 'vue'
import App from './App.vue'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

createApp(App).use(router).mount('#app');
