<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    "
  >
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <MenuItem :baseRouter="menuList" />
      </el-menu>
    </div>
    <div>
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/MenuItem.vue";
import router, { baseRouter, routePath } from "@/router/index";
import { ArrowDown } from "@element-plus/icons-vue";
import { computed, onMounted, ref, unref, watch, watchEffect } from "vue";
import { RouteRecordRaw } from "vue-router";

const activeIndex = ref<string>("");

type UserInfo = {
  userName?: string;
  passWord?: string;
};

const userInfo = ref<UserInfo>({});
const menuList = ref<RouteRecordRaw[]>([]);

watchEffect(() => {
  activeIndex.value = unref(routePath);
});

const userRole = computed((): string => {
  return JSON.parse(window.localStorage.getItem("userInfo") as string).roles[0];
});

const getRoleRouteList = (routes: RouteRecordRaw[]): any => {
  return routes.map((route) => {
    if (
      route.meta?.roles &&
      (route.meta?.roles as string[]).includes(userRole.value)
    ) {
      return route;
    }
    if (route.children) {
      return {
        path: route.path,
        name: route.name,
        children: getRoleRouteList(route.children),
      };
    }
    return;
  });
};

watch(
  () => baseRouter,
  () => {
    menuList.value = getRoleRouteList(baseRouter);
    console.log("整理路由", menuList.value);
  },
  {
    immediate: true,
  }
);

const handleClick = (val: string) => {
  window.localStorage.removeItem("userInfo");
  router.replace({ name: "login" });
};

const getUserInfo = () => {
  userInfo.value = JSON.parse(
    window.localStorage.getItem("userInfo") as string
  );
};

onMounted(() => {
  getUserInfo();
});
</script>

<style></style>
