// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// const app = createApp(App);
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// app.use(BootstrapVue);
// app.use(IconsPlugin);
// app.use(router);

// app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).mount('#app');
