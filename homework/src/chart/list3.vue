<template>
  <div class="echart">
    <div class="barChart" ref="barChart"></div>
  </div>
</template>

<script>
export default {
    name:'list3',
  mounted() {
    this.initBarChart();
  },
  methods: {
    initBarChart() {
      let myChart = this.$echarts.init(this.$refs.barChart);
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        tooltip: {
          show: true,
          color: "red",
        },
        grid: {
          //调整图表位置
          show: true, //是否显示直角坐标系网格
          top: "15%",
          right: "5%",
          bottom: "10%",
          left: "10%",
        },
        legend: {
          top: "5%",
          data: [
            {
              name: "重点保护动物数量",
              textStyle: {
                color: "#A9DDEE", // 单独设置某一个图列的颜色
              },
            },
            {
              name: "重点保护动物保护率",
              textStyle: {
                color: "#A9DDEE", // 单独设置某一个图列的颜色
              },
            },
          ],
        },
        xAxis: [
          {
            type: "category",
            data: ["大熊猫", "金丝猴", "长臂猿", "白鳍豚", "中华鲟", "黑熊", "玳瑁", "文昌鱼"],
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              show: false, //横轴样式
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#85B0C4",
              },
            },
            axisTick: {
              show: false, //隐藏刻度线
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            barWidth: "35%",
            axisLabel: {
              formatter: "{value} 个",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#08426D"],
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              // y轴 数据格式和颜色
              show: true,
              formatter: "{value} 个",
              textStyle: {
                color: "#85B0C4",
              },
            },
          },
        ],
        series: [
          {
            name: "重点保护动物数量",
            type: "bar",
            barWidth: "20%",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 个";
              },
            },
            data: [40, 50, 60, 65, 54, 65, 60, 50],
            itemStyle: {
              color: {
                type: "linear",
                x: 0, // 右
                y: 1, // 下
                x2: 0, // 左
                y2: 0, // 上
                colorStops: [
                  {
                    offset: 0,
                    color: "#192F68", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#18E0FD", // 90% 处的颜色
                  },
                ],
              },
            },
            label: {
              show: true, 
              position: "top", 
              distance: 10,
              verticalAlign: "middle",
              // 数值样式
              textStyle: {       
                color: "#F4EC03",
                fontSize: 12,
              },
            },
          },
          {
            name: "重点保护动物保护率",
            type: "line",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 个";
              },
            },
            data: [35, 62, 84, 52, 44, 96, 78, 66],
            itemStyle: {
              color: {
                type: "linear",
                x: 0, // 右
                y: 1, // 下
                x2: 0, // 左
                y2: 0, // 上
                colorStops: [
                  {
                    offset: 0,
                    color: "#18E0FD", // 0% 处的颜色
                  },
                  {
                    offset: 0.9,
                    color: "#18E0FD", // 90% 处的颜色
                  },
                ],
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
  .echart {
    width: 500px;
    height: 420px;
    margin: auto;
  }
  .barChart {
    width: 100%;
    height: 420px;
  }
</style>

