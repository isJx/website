<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
  >
    <MenuItem :baseRouter="baseRouter" />
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import MenuItem from "@/components/MenuItem.vue";
import { baseRouter, routePath } from "@/router/index";
import { ref, unref, watchEffect } from "vue";

const activeIndex = ref<string>("");

watchEffect(() => {
  activeIndex.value = unref(routePath);
});
</script>

<style></style>
