<template>
  <el-row class="LoadThanElrow">
    <!-- 数据分析 -> 负荷时比 -->
    <el-col :span="24">
      <Breadcrumb />
      <div class="ElectricityCondition">
        <div class="Condition-module_row">
          <div class="Condition-module_explain">测量位置:</div>
          <div class="Condition-module_content">
            <el-select size="small" v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Condition-module_row">
          <div class="Condition-module_explain">第一时间:</div>
          <div class="Condition-module_content">
            <el-date-picker size="small" v-model="pickerValue" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
        <div class="Condition-module_row">
          <div class="Condition-module_explain">第二时间:</div>
          <div class="Condition-module_content">
            <el-date-picker size="small" v-model="pickerValue" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
        <div class="Condition-module_row">
          <div class="Condition-module_content">
            <div class="Condition-module_date">
              <el-button size="small" type="primary">
                <i class="el-icon-search"></i>
                查询
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="LoadThanWrapper">
        <h4 class="LoadThanTitle">测试用户A区配 负荷时比分析 (2021-05-11 : 2021-05-12)</h4>
        <div id="LoadThan" :style="{width: '100%', height: '670px'}"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'LoadThan',
  components: {
    Breadcrumb
  },
  data() {
    return {
      value: '',
      pickerValue: '',
      options: []
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('LoadThan'))
      myChart.setOption({
        backgroundColor: '#f2f2f2',
        legend: {
          data: ['高度与气温']
        },
        tooltip: {
          trigger: 'axis',
          formatter: 'Temperature : <br/>{b} : {c}'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: true
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { onZero: false },
          axisLabel: {
            formatter: '{value} '
          },
          boundaryGap: false,
          data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        },
        series: [
          {
            name: '气温',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            smooth: true,
            data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
          },
          {
            name: '高度',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            smooth: true,
            data: [50, -50, -30, 20, 22.1, 5, -27.7, 55.7, 76.5]
          }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.ElectricityCondition
  display flex
  flex-direction row
  font-size $font-size-Base
  flex-flow row wrap
  border 1px solid #c6c6c6
  border-radius 6px
  margin 6px 0 10px
.Condition-module_row
  display flex
  flex-direction row
  flex-flow row wrap
  padding 4px 0
.Condition-module_explain
  display flex
  padding 0 10px
  align-items center
  justify-content flex-end
  color $font-color-main
  height 100%
.Condition-module_content
  min-width 150px
  align-items center
  justify-content flex-start
  display flex
.Condition-module_date
  min-width 300px
  display flex
  flex-direction row
  flex-flow row wrap
  padding 4px 10px 4px 10px
.LoadThanElrow
  box-sizing border-box
  padding 6px
  border 1px solid #c6c6c6
  border-radius 6px
  height 100%
  background #fff
.LoadThanWrapper
  padding 0 10px 10px
  border-radius 6px
  border 1px solid #c6c6c6
.LoadThanTitle
  margin 10px 0
  font-size 18px
  font-weight normal
  text-align center
</style>
