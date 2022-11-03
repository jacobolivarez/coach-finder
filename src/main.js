import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'));

const app = createApp(App);
app.use(router);
app.use(store);
app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseDialog', BaseDialog);
app.component('BaseSpinner', BaseSpinner);
app.mount('#app');
