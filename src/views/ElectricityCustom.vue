<template>
  <el-row>
    <el-col :span="24">
      <!-- 电量定制 -->
      <Breadcrumb />
      <div class="TabControl">
        <TabControl />
      </div>
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
      <div class="electricityTable">
        <el-table :data="tableData" border height="300" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
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
      radio: '',
      datetimerange: [],
      pickerValue: '',
      pickerType: 'date',
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
.TabControl
  overflow hidden
  box-sizing content-box
  padding 10px 10px 0
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
.electricityTable
  padding 20px
  height 300px
  margin-bottom 20px
  border-bottom 1px solid $border-color-one
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
</style>
