<template>
  <el-row>
    <el-col :span="24">
      <div id="LineChart" :style="{width: '100%', height: '670px'}"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'LineChart',
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
      const myChart = this.$echarts.init(document.getElementById('LineChart'))
      myChart.setOption({
        backgroundColor: '#f2f2f2',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'></style>
