<template>
  <el-row class="ElectricityStatisticsElrow">
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
            <el-button size="small" type="primary">
              <i class="el-icon-search"></i>
              查询
            </el-button>
          </div>
        </div>
      </div>
      <el-col :span="24" class="lineChart">
        <div id="Electricity" :style="{width: '100%', height: '350px'}"></div>
      </el-col>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="histogramHead">有功尖峰平谷分布图</div>
          <!-- pieChart -->
          <div class="pieChartCol">
            <pieChart :pieChartId="pieChartId" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="histogramHead">无功尖峰平谷分布图</div>
          <!-- pieChart -->
          <div class="pieChartCol">
            <pieChart :pieChartId="pieChartIdTwo" />
          </div>
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
      pickerType: 'date',
      pieChartId: 'pieChartOne',
      pieChartIdTwo: 'pieChartTwo'
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
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
.ElectricityStatisticsElrow
  box-sizing border-box
  padding 6px
  border 1px solid #c6c6c6
  border-radius 6px
  height 100%
  background #fff
.ElectricityCondition
  margin-top 6px
  display flex
  flex-direction row
  font-size $font-size-Base
  flex-flow row wrap
  border 1px solid $border-color-one
  border-radius 6px
.Condition-module_row
  min-width 200px
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
  padding 10px
  margin 6px 0
  border 1px solid #dcdfe6
  border-radius 6px
.histogramHead
  height 30px
  line-height 30px
  font-size $font-size-Medium
  color $font-color-white
  width 100%
  text-indent 2em
  background $background-color-Brand
.pieChartCol
  padding 0 10px
  margin-top 10px
  border-radius 6px
  border 1px solid #c6c6c6
</style>
