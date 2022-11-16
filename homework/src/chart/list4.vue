<template>
  <div>
    <div id="myChart" style="width: 500px;height: 435px;"></div>
  </div>
</template>
<script>
export default {
  name: "list4",
  data() {
    return {
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: { text: "guet野生动物数量统计" },
        tooltip: {},
        xAxis: {
          data: ["猕猴", "亚洲象", "藏原羚", "中华斑羚", "云豹", "高鼻羚羊"],
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>
 
<style>
</style>