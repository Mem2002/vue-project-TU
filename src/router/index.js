import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/Students/View.vue";
import StudentListClass from "../views/Students/ListClass.vue";
import NavbarLayout from "@/components/layouts/NavbarLayout.vue";
import SidebarLayout from "@/components/layouts/SidebarLayout.vue";
import MarketingManager from "@/views/MarketingManager.vue";
import CharMarketing from "../views/CharMarketing.vue";
import AdminView from "@/views/AdminView.vue";
import SidebarLayoutMaketing from "@/components/layouts/SidebarLayoutMaketing.vue";
import SidebarLayoutStudent from "@/components/layouts/SidebarLayoutStudent.vue";
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
      path: "/admin",
      name: "Admin",
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
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/listClass",
      name: "listClass",
      component: StudentListClass,
      meta: {
        layout: SidebarLayoutStudent,
      },
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
      name: "Manager Coordinator ",
      component: MarketingManager,
      meta: {
        layout: SidebarLayout,
      },
    },
    // {
    //   path: "/admin",
    //   name: "Admin",
    //   component: AdminView,
    //   meta: {
    //     layout: SidebarLayoutMaketing,
    //   },
    // },
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
        layout: SidebarLayoutStudent,
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
    /////////students////////
    {
      path: "/student/homepage",
      name: "studentHomepage",
      component: () => import("../views/Students/Homepage.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/listclass",
      name: "studentListclass",
      component: () => import("../views/Students/ListClass.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/myassignment",
      name: "studentmyassignment",
      component: () => import("../views/Students/MyAssignment.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/myassignment/submit",
      name: "studentmyassignmentsubmit",
      component: () => import("../views/Students/Submit.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    /////////Marketing////////
    {
      path: "/marketing/Homepage",
      name: "marketinghomepage",
      component: () => import("../views/Marketing/Homepage.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/faculties",
      name: "marketingfaculties",
      component: () => import("../views/Marketing/Faculties.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createfaculties",
      name: "marketingcreatefaculties",
      component: () => import("../views/Marketing/CreateFaculties.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createtopic",
      name: "marketingcreatetopic",
      component: () => import("../views/Marketing/CreateTopic.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createguest",
      name: "marketingcreateguest",
      component: () => import("../views/Marketing/CreateGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/listclass",
      name: "marketinglistclass",
      component: () => import("../views/Marketing/ListClass.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/listguests",
      name: "marketinglistguests",
      component: () => import("../views/Marketing/ListGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createguests",
      name: "marketingcreateguests",
      component: () => import("../views/Marketing/CreateGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/chart",
      name: "marketingchart",
      component: () => import("../views/Marketing/Chart.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/download",
      name: "marketingdownload",
      component: () => import("../views/Marketing/Download.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
  ],
});

export default router;
