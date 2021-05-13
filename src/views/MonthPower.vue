<template>
  <el-row class="MonthPowerElrow">
    <!-- 月用电量统计 -->
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
          <div class="Condition-module_explain">查询时间:</div>
          <div class="Condition-module_content">
            <el-date-picker size="small" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
        <div class="Condition-module_row">
          <div class="Condition-module_explain"></div>
          <div class="Condition-module_date">
            <el-button size="small" type="primary">
              <i class="el-icon-printer"></i>
              打印
            </el-button>
          </div>
        </div>
      </div>
      <div class="powerTable">
        <h4 class="powerTitle">管理员 2021-05-06日 用电量统计报表</h4>
        <el-table
          :header-cell-style="{background:'#0068b8',color:'#fff'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column align="center" fixed prop="date" label="日期/电量"></el-table-column>
          <el-table-column align="center" prop="a" label="01" width="120"></el-table-column>
          <el-table-column align="center" prop="b" label="02" width="120"></el-table-column>
          <el-table-column align="center" prop="c" label="03" width="120"></el-table-column>
          <el-table-column align="center" prop="d" label="04" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="05" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="06" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="07" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="08" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="09" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="10" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="11" width="120"></el-table-column>
          <el-table-column align="center" prop="e" label="12" width="120"></el-table-column>
          <el-table-column align="center" prop="h" label="合计"></el-table-column>
        </el-table>
      </div>
      <div class="lineChart">
        <h4 class="powerTitle">管理员 2021-05-06日 用电量统计报表</h4>
        <div id="LineChart" :style="{width: '100%', height: '400px'}"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'MonthPower',
  components: {
    Breadcrumb
  },
  data() {
    return {
      value: '',
      value1: '',
      options: [],
      tableData: [
        {
          date: '2016-05-02',
          a: '877.23',
          b: '670.24',
          c: '457.90',
          d: '739.20',
          e: '435.32',
          h: '2242.51'
        },
        {
          date: '2016-05-02',
          a: '877.23',
          b: '670.24',
          c: '457.90',
          d: '739.20',
          e: '435.32',
          h: '242.51'
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
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('LineChart'))
      myChart.setOption({
        backgroundColor: '#f2f2f2',
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      })
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.MonthPowerElrow
  box-sizing border-box
  padding 6px
  border 1px solid #c6c6c6
  border-radius 6px
  height 100%
  background #fff
.ElectricityCondition
  display flex
  flex-direction row
  min-width 200px
  font-size 14px
  flex-flow row wrap
  border 1px solid #c6c6c6
  border-radius 6px
  margin-top 6px
.Condition-module_row
  min-width 200px
  display flex
  flex-direction row
  flex-flow row wrap
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
.powerTable
  margin 6px 0
  padding 10px
  border 1px solid #c6c6c6
  border-radius 6px
  position relative
  overflow hidden
.powerTitle
  text-align center
  padding-bottom 10px
  font-size $font-size-large
  font-weight normal
  color #333
.lineChart
  padding 10px 10px 20px 10px
  box-sizing border-box
  border-radius 6px
  border 1px solid #c6c6c6
</style>
