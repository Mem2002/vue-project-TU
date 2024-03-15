import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/Students/View.vue";
import NavbarLayout from "@/components/layouts/NavbarLayout.vue";
import SidebarLayout from "@/components/layouts/SidebarLayout.vue";
import MarketingManager from "@/views/MarketingManager.vue";
import CharMarketing from '../views/CharMarketing.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: NavbarLayout,
      },
    },
    {
      path: "/homemarketingmanager",
      name: "homemarketingmanager",
      component: () => import("../views/HomeMarketingManagerView.vue"),
      meta: {
        layout: SidebarLayout,
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
        layout: NavbarLayout,
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
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/marketingManager",
      name: "marketingManager",
      component: MarketingManager,
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/listAccount",
      name: "listaccounts",
      component: () => import("../views/ListAccount.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/Edit.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/charMarketing",
      name: "charmarketing",
      component: () => import("../views/CharMarketing.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/dowloadFile",
      name: "dowloadFile",
      component: () => import("../views/DowloadFile.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
  ],
});

export default router;
