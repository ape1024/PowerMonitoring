<template>
  <el-row class="AlarmEventsElrow">
    <!-- 报警事件 -->
    <el-col :span="24">
      <Breadcrumb :breadcrumbData="breadcrumbData" />
      <div class="ElectricityCondition">
        <div class="Condition-module_row">
          <div class="Condition-module_explain">级别:</div>
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
          <div class="Condition-module_explain">类别:</div>
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
          <div class="Condition-module_explain">状态:</div>
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
          <div class="Condition-module_explain">是否确认:</div>
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
        <div class="Condition-module_row">
          <div class="Condition-module_explain"></div>
          <div class="Condition-module_date">
            <el-button size="small" type="primary">
              <i class="el-icon-search"></i>
              查询
            </el-button>
            <el-button size="small" type="primary">确认所有事件</el-button>
            <el-button size="small" type="primary">
              <i class="el-icon-printer"></i>
              导出
            </el-button>
          </div>
        </div>
      </div>
      <div class="AlarmEventsTable">
        <el-table
          height="680"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{background:'#0068b8',color:'#fff'}"
        >
          <el-table-column align="center" prop="date" label="配电室"></el-table-column>
          <el-table-column align="center" prop="name" label="设备"></el-table-column>
          <el-table-column align="center" prop="a" label="发生事件"></el-table-column>
          <el-table-column align="center" prop="b" label="触发值" width="100"></el-table-column>
          <el-table-column align="center" prop="c" label="级别" width="100"></el-table-column>
          <el-table-column align="center" prop="d" label="告警时间" width="160"></el-table-column>
          <el-table-column align="center" prop="e" label="结束时间" width="160"></el-table-column>
          <el-table-column align="center" prop="f" label="状态" width="120"></el-table-column>
          <el-table-column align="center" prop label="操作" width="180"></el-table-column>
        </el-table>
        <div class="pagingDevice">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'AlarmEvents',
  components: {
    Breadcrumb
  },
  data() {
    return {
      value: '',
      value1: '',
      options: [],
      breadcrumbData: '',
      datetimerange: [],
      tableData: [
        {
          date: '配电室',
          name: '电机',
          a: '发生事件',
          b: '123',
          c: '1级',
          d: '2021-01-01 10:00:00',
          e: '2021-01-02 10:00:00',
          f: '报警'
        }, {
          date: '配电室',
          name: '电机',
          a: '发生事件',
          b: '123',
          c: '1级',
          d: '2021-01-01 10:00:00',
          e: '2021-01-02 10:00:00',
          f: '报警'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.breadcrumbData = '报警事件查询'
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.AlarmEventsElrow
  PackageBox()
.ElectricityCondition
  padding 4px 0 0
  display flex
  flex-direction row
  font-size $font-size-Base
  flex-flow row wrap
  margin-top 6px
  Allborder()
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
.AlarmEventsTable
  position relative
  overflow hidden
  border 1px solid $border-color-one
  border-radius 6px
  padding 10px
  margin-top 6px
.pagingDevice
  margin-top 10px
  text-align center
</style>
