<template>
  <div class="histogram">
    <!-- 页头 -->
    <div class="histogramHead">{{title}}</div>
    <!-- 选项卡 -->
    <div class="TabControl">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="北工大软件园A区配" name="first"></el-tab-pane>
        <el-tab-pane label="北工大软件园B区配" name="second"></el-tab-pane>
        <el-tab-pane label="北工大软件园C区配" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- echarts -->
    <el-row :gutter="20" class="histogramContent">
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <div id="electricity" :style="{width: '100%', height: '300px'}"></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="numericalDisplay_top">
            <h4 class="numericalDisplay_tit">截止昨日本月累计电量</h4>
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
            <h4 class="numericalDisplay_tit">与去年同期对比</h4>
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
  </div>
</template>

<script>
export default {
  name: 'electricity',
  components: {},
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
      const myChart = this.$echarts.init(document.getElementById('electricity'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '20%',
          containLabel: true
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
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
