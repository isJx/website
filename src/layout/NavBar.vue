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
        <MenuItem :baseRouter="baseRouter" />
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
import { onMounted, ref, unref, watchEffect } from "vue";

const activeIndex = ref<string>("");

type UserInfo = {
  userName?: string;
  passWord?: string;
};

const userInfo = ref<UserInfo>({});

watchEffect(() => {
  activeIndex.value = unref(routePath);
});

const handleClick = (val: string) => {
  window.localStorage.removeItem("userInfo");
  router.replace({ name: "login" });
  console.log(11, val);
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
