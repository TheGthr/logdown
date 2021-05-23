import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  messages: {
    en: {},
    fr: {},
  },
});

const app = createApp(App);
app.config.productionTip = false;
app.component("font-awesome-icon", FontAwesomeIcon);

app
  .use(router)
  .use(i18n)
  .mount("#app");
