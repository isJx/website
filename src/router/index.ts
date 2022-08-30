import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Index from "@/layout/Index.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory("/website/"),
  routes,
});

export default router;
