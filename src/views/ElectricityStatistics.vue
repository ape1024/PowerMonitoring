<template>
  <el-row>
    <!-- 数据分析 -> 电力统计 -->
    <el-col :span="24">
      <Breadcrumb />
      <div class="ElectricityCondition">
        <div class="Condition-module_row">
          <div class="Condition-module_explain">配电室:</div>
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
          <div class="Condition-module_explain">配电室:</div>
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
        <div class="Condition-module_date">
          <div class="Condition-module_date_explain">
            <el-radio-group v-model="radio">
              <el-radio :label="1">日</el-radio>
              <el-radio :label="2">月</el-radio>
              <el-radio :label="3">年</el-radio>
              <el-radio :label="4">自定义</el-radio>
            </el-radio-group>
          </div>
          <div class="Condition-module_date_content">
            <div v-if="radio !== 4">
              <el-date-picker
                size="small"
                v-model="pickerValue"
                :type="pickerType"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
            <div v-if="radio === 4">
              <el-date-picker
                size="small"
                v-model="datetimerange"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
          </div>
          <div class="Condition-module_date">
            <el-button size="small" type="primary">查询</el-button>
          </div>
        </div>
      </div>
      <el-col :span="24" class="lineChart">
        <div id="Electricity" :style="{width: '100%', height: '280px'}"></div>
      </el-col>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="histogramHead">有功尖峰平谷分布图</div>
          <!-- pieChart -->
          <pieChart />
        </el-col>
        <el-col :span="12">
          <div class="histogramHead">无功尖峰平谷分布图</div>
          <!-- pieChart -->
          <pieChart />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import pieChart from '../components/public/pieChart.vue'

export default {
  name: 'ElectricityStatistics',
  components: {
    Breadcrumb,
    pieChart
  },
  data() {
    return {
      options: [],
      value: '',
      pickerValue: '',
      datetimerange: [],
      radio: 1,
      pickerType: 'date'
    };
  },
  computed: {},
  watch: {
    radio(data) {
      console.log(data)
      if (data === 1) {
        this.pickerType = 'date'
      } else if (data === 2) {
        this.pickerType = 'month'
      } else if (data === 3) {
        this.pickerType = 'year'
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('Electricity'))
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
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.ElectricityCondition
  display flex
  flex-direction row
  min-width 200px
  font-size $font-size-Base
  flex-flow row wrap
  border-bottom 1px solid $border-color-one
.Condition-module_row
  min-width 200px
  display flex
  flex-direction row
  flex-flow row wrap
  padding 10px 0
.Condition-module_explain
  min-width 80px
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
  padding 10px 0 10px 10px
.Condition-module_date_explain
  min-width 100px
  display flex
  padding 0 10px
  align-items center
  justify-content flex-end
  color $font-color-main
  height 100%
.Condition-module_date_content
  min-width 200px
  align-items center
  justify-content flex-start
  display flex
.lineChart
  padding 20px 0 20px
  margin-bottom 20px
  border-bottom 1px solid $border-color-one
.histogramHead
  height 30px
  line-height 30px
  font-size $font-size-Medium
  color $font-color-white
  width 100%
  text-indent 2em
  background $background-color-Brand
</style>
