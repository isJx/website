import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Index from "@/layout/Index.vue";
import { isLogin } from "@/utils/is";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Other from "@/views/Other.vue";
import { ref } from "vue";

export const baseRouter: Array<RouteRecordRaw> = [
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
  {
    path: "/other",
    name: "other",
    redirect: "/other",
    children: [
      {
        name: "other",
        path: "/other",
        component: Other,
      },
    ],
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    redirect: "/home",
    children: baseRouter,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory("/website/"),
  routes,
});

export const routePath = ref<string>("");

router.afterEach((to, from) => {
  routePath.value = to.name as string;
});

router.beforeEach((to, form, next) => {
  if (to.name === "login") {
    next();
    return;
  }
  if (!isLogin()) {
    next({ name: "login" });
  }
  next();
});

export default router;
