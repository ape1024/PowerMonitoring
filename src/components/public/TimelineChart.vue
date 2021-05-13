/* eslint-disable no-const-assign */
<template>
  <el-row>
    <!-- 折线图 -->
    <el-col :span="24">
      <div id="TimelineChart" :style="{width: '100%', height: '670px'}"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TimelineChart',
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
      let base = +new Date(1988, 9, 3);
      const oneDay = 24 * 3600 * 1000;
      const data = [[base, Math.random() * 300]];
      for (let i = 1; i < 20000; i += 1) {
        const now = new Date(base += oneDay);
        data.push([
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])
        ]);
      }
      const myChart = this.$echarts.init(document.getElementById('TimelineChart'))
      myChart.setOption({
        backgroundColor: '#f2f2f2',
        tooltip: {
          trigger: 'axis',
          position(pt) {
            return [pt[0], '10%'];
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 20
          }, {
            start: 0,
            end: 20
          }
        ],
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data
          }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'></style>
