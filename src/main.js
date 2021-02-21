import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App).use(router).mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;