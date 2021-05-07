<template>
  <el-row>
    <el-col :span="24" class="histogram">
      <!-- 页头 -->
      <div class="histogramHead">{{title}}</div>
      <!-- 选项卡 -->
      <div class="TabControl">
        <TabControl />
      </div>
      <!-- echarts -->
      <el-row :gutter="20" class="histogramContent">
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <div id="histogram" :style="{width: '100%', height: '240px'}"></div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="numericalDisplay_top">
              <h4 class="numericalDisplay_tit">今日负荷</h4>
              <div class="numericalDisplay_value">
                <i class="el-icon-s-data numericalDisplay_icon"></i>
                <div class="numericalDisplay_value_text">1231313</div>
                <div class="numericalDisplay_value_unit">kW</div>
              </div>
              <div class="numericalDisplay_value">
                <i class="el-icon-alarm-clock numericalDisplay_icon"></i>
                <div class="numericalDisplay_value_textTwo">12 : 00</div>
                <!-- <div class="numericalDisplay_value_unit"></div> -->
              </div>
            </div>
            <div class="numericalDisplay_bottom">
              <h4 class="numericalDisplay_tit">昨日负荷</h4>
              <div class="numericalDisplay_value">
                <i class="el-icon-s-data numericalDisplay_icon"></i>
                <div class="numericalDisplay_value_text">1231313</div>
                <div class="numericalDisplay_value_unit">kW</div>
              </div>
              <div class="numericalDisplay_value">
                <i class="el-icon-alarm-clock numericalDisplay_icon"></i>
                <div class="numericalDisplay_value_textTwo">12 : 00</div>
                <!-- <div class="numericalDisplay_value_unit"></div> -->
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import TabControl from '../public/TabControl.vue'

export default {
  name: 'histogram',
  components: {
    TabControl
  },
  data() {
    return {
      title: '',
      activeName: 'first'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    handleClick() {
      console.log(this.activeName)
    },
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('histogram'))
      myChart.setOption({
        ttitle: {
          x: 'center'
        },
        legend: {
          orient: 'horizontal',
          x: 'center',
          y: 'top',
          data: ['今日负荷', '昨日负荷']
        },
        grid: {
          top: '16%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#000'
            }
          },
          axisLabel: {
            rotate: 0,
            interval: 0
          },
          boundaryGap: false,
          data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
        },

        yAxis: {
          type: 'value',
          min: 0,
          splitNumber: 5
        },

        series: [
          {
            name: '今日负荷',
            data: [820, 932, 301, 1434, 1290, 1330, 1320],
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            smooth: 0.5,
            itemStyle: {
              normal: {
                borderColor: '#409EFF',
                lineStyle: {
                  color: 'rgba(0,0,0,0)'
                }
              }
            }
          },
          {
            name: '昨日负荷',
            data: [120, 232, 541, 134, 290, 130, 120],
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: 'rgba(0,0,0,0)'
                }
              }
            }
          }
        ],
        color: ['#409EFF', '#FF9F7F']
      })
    }
  },
  created() {
    this.title = '日负荷情况'
  }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.histogram
  height 100%
  width 100%
  position relative
  overflow hidden
.histogramHead
  height 30px
  line-height 30px
  font-size $font-size-Medium
  color $font-color-white
  width 100%
  text-indent 2em
  background $background-color-Brand
.TabControl
  overflow hidden
  box-sizing content-box
  padding 10px 20px
.numericalDisplay_top
  overflow hidden
  padding 0 40px
  text-align center
.numericalDisplay_bottom
  margin-top 30px
  overflow hidden
  padding 0 40px
  text-align center
.numericalDisplay_tit
  font-size $font-size-ExtraLarge
  color $font-color-Brand
  margin-bottom 10px
  width 100%
.numericalDisplay_value
  width 100%
  display flex
  font-size $font-size-ExtraLarge
  color $font-color-Brand
  font-weight bolder
  margin-bottom 4px
.numericalDisplay_value_text
  color $font-color-Success
  font-size $font-size-ExtraLarge
  font-weight bold
  flex 1
  text-align right
.numericalDisplay_value_unit
  width 40px
  font-size $font-size-large
  overflow hidden
  color $font-color-secondary
  vertical-align bottom
.numericalDisplay_icon
  font-size 26px
.numericalDisplay_value_textTwo
  color $font-color-main
  font-size $font-size-ExtraLarge
  font-weight bold
  flex 1
  text-align right
  padding-right 10px
</style>
