import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/Students/View.vue";
import NavbarView from "@/components/layouts/NavbarView.vue";
import LoginViewVue from "@/components/layouts/LoginLayout.vue";
import LoginLayoutVue from "@/components/layouts/LoginLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: NavbarView,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: NavbarView,
      },
    },
    {
      path: "/students",
      name: "students",
      component: StudentView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
