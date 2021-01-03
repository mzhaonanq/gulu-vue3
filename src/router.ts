import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home.vue';
import Doc from './Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import Introduction from './views/Introduction.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '',redirect:'/doc/switch'},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'introduction', component: Introduction},
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStarted},
      ]
    }
  ]
});

export {router}