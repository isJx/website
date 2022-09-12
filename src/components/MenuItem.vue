<template>
  <template v-for="item of props.baseRouter">
    <el-sub-menu v-if="item.children && item.children[0]" :index="item.name">
      <template #title>{{ item.name }}</template>
      <MenuItem :baseRouter="item.children" />
    </el-sub-menu>
    <el-menu-item v-if="item.children == undefined" :index="item.name">
      {{ item.name }}
    </el-menu-item>
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
