import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home.vue';
import Doc from './Doc.vue';
import Switch from './components/Switch.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: 'switch', component: Switch}
      ]
    }
  ]
});

export {router}