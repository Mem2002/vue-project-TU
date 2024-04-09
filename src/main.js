import "./assets/main.css";

import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // add icon
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //add thư viện icon
  app.component(key, component);
} // add icon

router.beforeEach((to, from, next) => {
  const logged = localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken') !== "null" && localStorage.getItem('jwtToken') !== "undefined";
  console.log(typeof(localStorage.getItem('jwtToken')), 'login');
  if (logged && to.path === '/login') {
      return next({ path: "/" })
  }
  if (!logged && !to.path.includes('/login')) {
      return next({ path: '/login' })
  }
  next()
})
app.use(ElementPlus)
app.use(router);
app.mount("#app");
