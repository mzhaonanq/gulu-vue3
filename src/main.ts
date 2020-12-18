import {createApp} from 'vue';
import Bruce from './components/Bruce.vue';
import HelloWorld from './components/HelloWorld.vue'
import App from './App.vue';
import './index.css';
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Bruce},
    { path:'/hello',component:HelloWorld}
  ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
