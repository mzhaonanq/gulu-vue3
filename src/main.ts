import './index.scss';
import './lib/gulu.scss'
import {createApp} from 'vue';
import {router} from './router';
import App from './App.vue';
import 'github-markdown-css'

const app = createApp(App);
app.use(router);
app.mount('#app');
