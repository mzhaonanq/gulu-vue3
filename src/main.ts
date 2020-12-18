import {createApp} from 'vue';
import Home from './Home.vue';
import Doc from './Doc.vue'
import App from './App.vue';
import './index.scss';
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    { path:'/doc',component:Doc}
  ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
