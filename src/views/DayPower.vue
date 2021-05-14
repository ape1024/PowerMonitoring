<template>
  <el-row class="DayPowerElrow">
    <!-- 日用电量统计 -->
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
        <h4 class="powerTitle">
          管理员 2021-05-06日 用电量统计报表
          <span class="powerTitleSpan">单位：kWh</span>
        </h4>
        <el-table
          :header-cell-style="{background:'#0068b8',color:'#fff'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column align="center" fixed prop="date" label="日期/电量" width="180"></el-table-column>
          <el-table-column align="center" prop="a" label="01:00" width="100"></el-table-column>
          <el-table-column align="center" prop="b" label="02:00" width="100"></el-table-column>
          <el-table-column align="center" prop="c" label="03:00" width="100"></el-table-column>
          <el-table-column align="center" prop="d" label="04:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="05:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="06:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="07:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="08:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="09:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="10:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="11:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="12:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="13:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="14:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="15:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="16:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="17:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="18:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="19:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="20:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="21:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="22:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="23:00" width="100"></el-table-column>
          <el-table-column align="center" prop="e" label="24:00" width="100"></el-table-column>
          <el-table-column align="center" prop="h" label="合计" width="150"></el-table-column>
        </el-table>
      </div>
      <div class="lineChart">
        <h4 class="powerTitleTwo">管理员 2021-05-06日 用电量统计报表</h4>
        <div id="LineChart" :style="{width: '100%', height: '400px'}"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'DayPower',
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
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
.DayPowerElrow
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
  margin-top 6px
.Condition-module_row
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
  Allborder()
  position relative
  overflow hidden
.powerTitle
  position relative
  overflow hidden
  text-align center
  padding-bottom 10px
  font-size $font-size-large
  font-weight normal
  color #333
.powerTitleSpan
  float right
.lineChart
  padding 10px 20px 20px
  box-sizing border-box
  Allborder()
.powerTitleTwo
  position relative
  overflow hidden
  text-align center
  padding-bottom 10px
  font-size $font-size-large
  font-weight normal
  color #333
</style>
