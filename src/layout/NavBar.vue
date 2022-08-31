<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
  >
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="about">About</el-menu-item>
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import { routePath } from "@/router/index";
import { ref, unref, watchEffect } from "vue";

const activeIndex = ref<string>("");

watchEffect(() => {
  activeIndex.value = unref(routePath);
});
</script>

<style></style>
