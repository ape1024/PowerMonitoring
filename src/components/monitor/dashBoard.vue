<template>
  <el-row>
    <el-col :span="24">
      <div :id="dashBoardId" :style="{width: '100%', height: '300px'}"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'dashBoard',
  props: ['dashBoardId'],
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById(this.dashBoardId))
      myChart.setOption({
        title: {
          text: '仪表盘',
          left: 'center',
          textStyle: {
            fontSize: '14',
            color: '#000000'
          }
        },
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                fontSize: 12,
                width: 20,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 40,
              fontSize: 10
            },
            detail: {
              valueAnimation: true,
              formatter: '{value} km/h',
              color: 'auto',
              offsetCenter: [0, '70%'],
              fontSize: 20
            },
            data: [
              {
                value: 70
              }
            ]
          }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'></style>
