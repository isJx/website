<template>
  <template v-for="item of props.baseRouter">
    <el-menu-item v-if="!item.children" :index="item.name">
      {{ item.name }}
    </el-menu-item>
    <el-sub-menu v-else :index="item.name">
      <template #title>{{ item.name }}</template>
      <MenuItem :baseRouter="item.children" />
    </el-sub-menu>
  </template>
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
