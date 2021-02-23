import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import i18n from "@/assets/i18n/i18n";
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(fab);

const app = createApp(App);
app.config.productionTip = false;
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).use(i18n).mount('#app');