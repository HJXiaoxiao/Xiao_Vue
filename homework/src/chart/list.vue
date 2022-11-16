<template>
  <div>
    <el-button :type="dianliuS" size="mini" @click="clickDL">出生率</el-button>
    <el-button :type="dianyaS" size="mini" @click="clickDY">死亡率</el-button>
    <div id="main" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      title: '',
      dianliuS: '',
      dianyaS: '',
      sanxiangS: '',
      series: '', 
      xAxis: [
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
      ], //X轴坐标数据
      danwei: '', //y显示的刻度和单位
    }
  },
  mounted() {
    this.clickDL()
    this.draw()
  },
  methods: {
    clickDL() {
      ;(this.dianliuS = 'primary'), (this.dianyaS = '')
      this.sanxiangS = ''
      this.title = '出生率'
      ;(this.series = [
        {
          name: '猕猴',
          type: 'line',
          data: [1, 3, 9, 27, 22, 33, 33, 44, 32, 43, 21],
        },
        {
          name: '亚洲象',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 23, 25, 34, 27, 11],
        },
        {
          name: '藏原羚',
          type: 'line',
          data: [3, 3, 6, 2, 10, 16, 18, 14, 22, 33, 35],
        },
        {
          name: '中华斑羚',
          type: 'line',
          data: [0, 3, 4, 12, 10, 6, 22, 16, 12, 23, 25],
        },
      ]),
        (this.danwei = { formatter: '{value}' })
      this.draw()
    },
    clickDY() {
      ;(this.dianliuS = ''), (this.dianyaS = 'primary')
      this.sanxiangS = ''
      this.title = '死亡率'
      this.series = [
        {
          name: '亚洲象',
          type: 'line',
          data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
        },
        {
          name: '中华斑羚',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
        },
      ]
      this.danwei = { formatter: '{value}' }
      this.draw()
      console.log(this.series)
    },

    draw() {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      myChart.clear()
      myChart.setOption(this.option())
      // echarts表格自适应
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 200);
    },
    option() {
      var option = {
        title: {
          text: this.title,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
        },
        xAxis: {
          type: 'category',
          name: '时间',
          splitLine: { show: false },
          data: this.xAxis,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          name: '百分比%',
          minorSplitLine: {
            show: true,
          },
          axisLabel: this.danwei,
        },
        series: this.series,
      }
      return option
    },
  },
}
</script>
 
<style scoped></style>
