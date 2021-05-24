<template>
  <el-row class="instrument">
    <el-col :span="24">
      <h4 class="instrumentHeader">
        总功率因数_%--曲线对比分析
        <i @click="close" class="instrumentHeaderclose"></i>
      </h4>
      <div class="instrumentSubject">
        <div id="electricity" :style="{width: '100%', height: '360px'}"></div>
      </div>
      <div class="instrumentBottom">
        <el-button @click="close" size="mini">退 出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'meterChart',
  components: {},
  data() {
    return {
      tableData: [
        {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }
      ],
      tableDataTwo: [
        {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }
      ],
      tableDataThree: [
        {
          date: '电能示值',
          name: '201573600',
          province: '444098848'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('electricity'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    columnStyle({ columnIndex }) {
      if (columnIndex === 0) {
        return 'background:#0068b8;text-align:center;color: #fff;'
      }
      return 'text-align:center'
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.instrument
  overflow hidden
  width 600px
  border-radius 4px
  padding 5px
  box-sizing content-box
  background #e0ecff
.instrumentHeader
  position relative
  overflow hidden
  padding 0 0 4px 4px
  margin-bottom 4px
  border-bottom 1px solid #dcdfe6
  text-align left
  font-size 14px
  color #0E2D5F
.instrumentBottom
  border 1px solid
  padding 10px 10px 10px 0
  text-align right
  width 100%
  box-sizing border-box
  background #F4F4F4
  border-color #dddddd #95B8E7 #95B8E7 #95B8E7
.instrumentSubject
  padding 10px 20px 20px
  position relative
  overflow hidden
  box-sizing border-box
  background-color $background-color-White
.instrumentHeaderclose
  float right
  margin-right 4px
  paneltoolClose()
.instrumentHeaderclose:hover
  opacity 1
.meterCoverTilte
  position relative
  overflow hidden
  text-align center
  font-size 26px
  font-weight bolder
  margin-bottom 10px
.meterCoverTilteSpan
  float right
  font-weight normal
  font-size 16px
  line-height 34px
.meterCoverOne
  margin-bottom 10px
</style>
