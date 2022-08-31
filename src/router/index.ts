import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Index from "@/layout/Index.vue";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import { ref } from "vue";

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

export const routePath = ref<string>("");

router.beforeEach((to, form, next) => {
  routePath.value = to.name as string;
  next();
});

export default router;
