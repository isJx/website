import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
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
];

const router = createRouter({
  history: createWebHashHistory("/website/"),
  routes,
});

export default router;
