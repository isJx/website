<template>
  <router-view></router-view>
  <el-button-group>
    <el-button @click="toRoute('home')">王敏</el-button>
    <el-button @click="toRoute('about')">靳悦</el-button>
  </el-button-group>
</template>

<script setup lang="ts">
import router from "./router";

const toRoute = (name: string) => {
  router.push({ name });
};
</script>

<style></style>
