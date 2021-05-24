<template>
  <el-row class="pieChart">
    <el-col :span="24">
      <!-- 饼状图 -->
      <div :id="pieChartId" :style="{width: '100%', height: '300px'}"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'pieChart',
  components: {},
  props: ['pieChartId'],
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
      const myChart = this.$echarts.init(document.getElementById(this.pieChartId))
      myChart.setOption({
        backgroundColor: '#f2f2f2',
        title: {
          subtext: '单位:  kWh',
          subtextStyle: {
            fontSize: 20
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        color: ['red', 'blue', 'yellow', 'pink'],
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            label: {
              show: true,
              fontWeight: 300,
              fontSize: 14,
              formatter: '{a}: {c} ({d}%)'
            },
            data: [
              {
                value: 1048,
                name: '搜索引擎',
                label: { color: 'red' }
              },
              { value: 735, name: '直接访问', label: { color: 'blue' } },
              { value: 580, name: '邮件营销', label: { color: 'yellow' } },
              { value: 484, name: '联盟广告', label: { color: 'pink' } }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
.pieChart
  margin 20px 0
  border 1px solid $border-color-one
</style>
