<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
  >
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("");
</script>

<style></style>
