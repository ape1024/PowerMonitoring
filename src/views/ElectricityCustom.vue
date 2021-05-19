<template>
  <el-row class="ElectricityCustomElrow">
    <el-col :span="24">
      <!-- 电量定制 -->
      <Breadcrumb :breadcrumbData="breadcrumbData" />
      <div class="TabControl">
        <TabControl />
      </div>
      <div class="ElectricityConditionWrapper">
        <div class="ElectricityCondition">
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
      </div>

      <div class="electricityTable">
        <div class="electricityTableWrapper">
          <el-table
            :data="tableData"
            border
            height="300"
            style="width: 100%"
            :header-cell-style="{background:'#0068b8',color:'#fff'}"
          >
            <el-table-column align="center" prop="date" label="分项名称"></el-table-column>
            <el-table-column align="center" prop="name" label="尖段"></el-table-column>
            <el-table-column align="center" prop="address" label="峰段"></el-table-column>
            <el-table-column align="center" prop="address" label="谷段"></el-table-column>
            <el-table-column align="center" prop="address" label="总电量"></el-table-column>
          </el-table>
        </div>
      </div>
      <el-row :gutter="20" class="pieChartElrow">
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
import TabControl from '../components/public/TabControl.vue'
import pieChart from '../components/public/pieChart.vue'

export default {
  name: 'ElectricityCustom',
  components: {
    Breadcrumb,
    TabControl,
    pieChart
  },
  data() {
    return {
      pieChartId: 'pieChartId',
      pieChartIdTwo: 'pieChartIdTwo',
      radio: '',
      datetimerange: [],
      pickerValue: '',
      pickerType: 'date',
      breadcrumbData: '',
      conditionSwith: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  computed: {},
  watch: {
    radio(data) {
      if (data === 1) {
        this.pickerType = 'date'
      } else if (data === 2) {
        this.pickerType = 'month'
      } else if (data === 3) {
        this.pickerType = 'year'
      }
    }
  },
  methods: {},
  created() {
    this.breadcrumbData = '电量定制分析'
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.ElectricityCustomElrow
  box-sizing border-box
  padding 6px
  Allborder()
  height 100%
  background $background-color-White
.ElectricityCondition
  display flex
  flex-direction row
  min-width 200px
  font-size $font-size-Base
  flex-flow row wrap
  Allborder()
.TabControl
  overflow hidden
  box-sizing content-box
  padding 10px 0 0
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
.electricityTable
  padding 10px
  margin-bottom 20px
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
.pieChartCol
  padding 0 10px
  margin-top 10px
  Allborder()
.ElectricityConditionWrapper
  box-sizing border-box
  padding 0 10px
  overflow hidden
.electricityTableWrapper
  padding 6px
  Allborder()
.pieChartElrow
  padding 0 10px
</style>
