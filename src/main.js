import "./assets/main.css";

import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // add icon
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Enable CORS for all origins
// app.use(cors());

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// const app = express();


// app.use(cors({
//   origin: 'backend-final-zk84.onrender.com/v1', // Địa chỉ của ứng dụng Vue.js
//   credentials: true // Cho phép sử dụng cookie trong yêu cầu
// }));

// Cấu hình các tuyến đường và middleware khác ở đây

// app.listen(8081, () => {
//   console.log('Server is running on port 8081');
// });



const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //add thư viện icon
  app.component(key, component);
} // add icon



router.beforeEach((to, from, next) => {
  const logged =
    localStorage.getItem("jwtToken") &&
    localStorage.getItem("jwtToken") !== "null" &&
    localStorage.getItem("jwtToken") !== "undefined";
  if (logged && to.path === "/login") {
    return next({ path: "/" });
  }
  if (!logged && !to.path.includes("/login")) {
    return next({ path: "/login" });
  }
  next();
});

router.beforeEach((to, from, next) => {
  const logged = localStorage.getItem("jwtToken") && localStorage.getItem("jwtToken") !== "null" && localStorage.getItem("jwtToken") !== "undefined";
  if (!logged && !to.path.includes("/login")) {
    next({ path: "/login" });
  } else if (logged && to.path === "/login") {
    next({ path: "/" });
  } else {
    next();
  }
});


app.use(ElementPlus);
app.use(router);
app.mount("#app");
