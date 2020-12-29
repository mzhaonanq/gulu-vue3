import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

const dynamicCreate = (options) => {
  const {title,content,ok,cancel,closeOnClickOverlay}=options
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    dialog.unmount(div);
    div.remove();
  };
  const dialog = createApp({
    render() {
      return h(Dialog,
        {
          visible: true,
          'onUpdate:visible': (newValue) => {
            if (newValue === false) {
              close();
            }
          },
          ok,cancel,closeOnClickOverlay
        },
        {title, content});
    }
  });
  dialog.mount(div);
};
export {dynamicCreate};