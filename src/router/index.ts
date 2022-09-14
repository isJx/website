import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

import Index from "@/layout/Index.vue";
import { isLogin } from "@/utils/is";
import { getUserInfo } from "@/utils/localStorage";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Other from "@/views/Other.vue";
import { ElMessage } from "element-plus/es";
import { ref } from "vue";

export const baseRouter: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      roles: ["admin", "other"],
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      roles: ["admin", "other"],
    },
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
        meta: {
          roles: ["admin"],
        },
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

export const hasRole = (route: RouteLocationNormalized): boolean => {
  const userRole: string[] = getUserInfo();
  return userRole.some((item) =>
    (route.meta?.roles as string[]).includes(item)
  );
};

const routeList = ["/", "/home", "/login"];

router.beforeEach((to, form, next) => {
  if (!isLogin() && to.name !== "login") {
    next({ name: "login" });
    ElMessage.warning("请先登录！");
    return;
  }
  if (routeList.includes(to.path)) {
    next();
    return;
  }
  if (hasRole(to)) {
    next();
    return;
  } else {
    ElMessage.warning("权限错误，已重定向至首页！");
    next({ name: "home" });
  }
});

export default router;
