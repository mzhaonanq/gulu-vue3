import {createApp} from 'vue';
import Home from './components/Home.vue';
import Doc from './components/Doc.vue'
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
