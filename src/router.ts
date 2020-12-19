import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home.vue';
import Doc from './Doc.vue';
import Button from './components/Button.vue';
import Tabs from './components/Tabs.vue';
import Dialog from './components/Dialog.vue';
import DocDemo from './components/DocDemo.vue';
import Switch from './components/Switch.vue';


const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},

      ]
    }
  ]
});

export {router}