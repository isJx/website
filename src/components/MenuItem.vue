<template>
  <el-menu-item v-for="item of props.baseRouter" :index="item.name">
    {{ item.name }}
  </el-menu-item>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from "vue-router";

const props = defineProps({
  baseRouter: {
    type: Array<RouteRecordRaw>,
    default: null,
  },
});
</script>

<style></style>
