<template>
  <div>
    <div id="tianqi" style="width: 500px;height:370px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name:'list1',
    data() {
      return {
        charts: '',
      }
    },

    mounted() {
      this.init("tianqi")
    },

    methods: {
      init(id) {
        this.charts = echarts.init(document.getElementById(id))

        let option = {
          backgroundColor: '#0A2E5D',
          title: [{
            text: 'AQI指数',
            bottom: '80',
            x: 'center',
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 15,
            padding: [7, 14],
            textStyle: {
              fontWeight: 'normal',
              fontSize: 12,
              color: '#fff'
            }
          }],
          angleAxis: {
            show: false,
            max: 100 * 360 / 270, 
            type: 'value',
            startAngle: 225, // 极坐标初始角度
            splitLine: {
              show: false
            }
          },
          barMaxWidth: 14, //圆环宽度
          radiusAxis: {
            show: false,
            type: 'category',
          },
          //圆环位置和大小
          polar: {
            center: ['50%', '50%'],
            radius: '180'
          },
          series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
              value: 91,
              itemStyle: {
                color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1, //从左到右 0-1
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: '#D1E4FE'
                  }, {
                    offset: 1,
                    color: '#F9FFFE'
                  }],
                },
              },
            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 2 //圆环层级，同zindex
          },
          { //下层圆环，显示最大值
            type: 'bar',
            data: [{
              value: 100,
              itemStyle: {
                color: '#80B8FF'
              }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
          },
          //仪表盘
          {
            name: 'AQI',
            type: 'gauge',
            startAngle: 225, 
            endAngle: -45,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            title: {
              offsetCenter: [-20, -10],
              color: '#FFFFFF',
              fontSize: 60,
              fontWeight: 500,
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize: 16,
                  color: '#FFF',
                  padding: [0, 0, 10, 40]
                }
              }
            },
            detail: {
              formatter: function (e) {
                return '优';
              },
              color: '#fff',
              fontSize: 16,
              offsetCenter: [40, -15],
              backgroundColor: '#50c48f',
              borderRadius: 8,
              padding: [4, 12],
            },
            data: [{
              value: 91,
              name: 91 + '\n' + '{a|' + '首要污染物：PM10' + '}'
            }]
          }
          ]
        }
        this.charts.setOption(option);
      }
    },

  }
</script>
<style scoped>

</style>
