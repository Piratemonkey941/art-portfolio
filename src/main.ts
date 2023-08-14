import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'quasar/src/css/index.sass';
import './style.css';

import App from './App.vue';

const myApp = createApp(App);
createApp(App).mount('#app');

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.mount('#app');
