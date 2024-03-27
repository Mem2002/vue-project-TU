import "./assets/main.css";

import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // add icon

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //add thư viện icon
  app.component(key, component);
} // add icon
app.use(router);
app.mount("#app");
