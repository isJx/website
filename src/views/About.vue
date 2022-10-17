<template>
  <el-button @click="openDialog">关于</el-button>
  <el-dialog
    v-model="dialogVisible"
    title="测试图表"
    @opened="openCallback"
    :destroy-on-close="true"
  >
    <div id="main" style="width: 460px; height: 400px"></div>
  </el-dialog>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

import { ref } from "vue";

const dialogVisible = ref<boolean>(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const openCallback = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("main") as HTMLElement);
  // 绘制图表
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};
</script>

<style></style>
