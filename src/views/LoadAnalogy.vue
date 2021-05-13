<template>
  <el-row>
    <!-- 数据分析 -> 负荷类比 -->
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
        <div class="Condition-module_row">
          <div class="Condition-module_explain"></div>
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
        <LineChart />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import LineChart from '../components/public/LineChart.vue'

export default {
  name: 'LoadAnalogy',
  components: {
    Breadcrumb,
    LineChart
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
  padding 4px 10px 4px 10px
.curveGraph
  padding 20px 0
  overflow hidden
</style>
