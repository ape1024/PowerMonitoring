<template>
  <el-row class="HistoricalDataElrow">
    <!-- 数据分析 -> 历史数据 -->
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
          <div class="Condition-module_explain">测量点:</div>
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
          <div class="Condition-module_explain">时间范围:</div>
          <div class="Condition-module_content">
            <el-date-picker
              size="small"
              v-model="datetimerange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
          <div class="Condition-module_date">
            <el-button size="small" type="primary">
              <i class="el-icon-search"></i>
              查询
            </el-button>
          </div>
        </div>
      </div>
      <!-- curveGraph -->
      <div class="curveGraph">
        <h4 class="curveGraphTitle">测试用户A区配 电能曲线图</h4>
        <TimelineChart />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import TimelineChart from '../components/public/TimelineChart.vue'

export default {
  name: 'HistoricalData',
  components: {
    Breadcrumb,
    TimelineChart
  },
  data() {
    return {
      options: [],
      value: '',
      datetimerange: []
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.HistoricalDataElrow
  box-sizing border-box
  padding 6px
  Allborder()
  height 100%
  background $background-color-White
.ElectricityCondition
  display flex
  flex-direction row
  font-size $font-size-Base
  flex-flow row wrap
  Allborder()
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
.curveGraph
  padding 0 10px 10px
  overflow hidden
  Allborder()
.curveGraphTitle
  margin 10px 0
  font-size 18px
  font-weight normal
  text-align center
</style>
