<template>
  <el-row class="instrument">
    <el-col :span="24">
      <h4 class="instrumentHeader">
        表盘数据
        <i @click="close" class="instrumentHeaderclose"></i>
      </h4>
      <div class="instrumentSubject">
        <h4 class="meterCoverTilte">
          211:3#变压器出线柜
          <span class="meterCoverTilteSpan">2021-05-13 13:55:39</span>
        </h4>
        <el-row>
          <el-col :span="24">
            <div class="meterCoverOne">
              <el-table
                :data="tableData"
                border
                style="width: 100%"
                :cell-style="columnStyle"
                :header-cell-style="{background:'#0068b8',color:'#fff'}"
              >
                <el-table-column align="center" prop="date" label="表计参数" :cell-style="columnStyle"></el-table-column>
                <el-table-column align="center" prop="name" label="总"></el-table-column>
                <el-table-column align="center" prop="address" label="A相"></el-table-column>
                <el-table-column align="center" prop="address" label="B相"></el-table-column>
                <el-table-column align="center" prop="address" label="C相"></el-table-column>
              </el-table>
            </div>
            <div class="meterCoverOne">
              <el-table
                :data="tableDataTwo"
                border
                style="width: 100%"
                :header-cell-style="{background:'#0068b8',color:'#fff'}"
              >
                <el-table-column
                  align="center"
                  prop="date"
                  label="零序电流(A)"
                  :cell-style="columnStyle"
                ></el-table-column>
                <el-table-column align="center" prop="name" label="频率(HZ)"></el-table-column>
                <el-table-column align="center" prop="address" label="总电压谐波含量(V)"></el-table-column>
                <el-table-column align="center" prop="address" label="总电流谐波含量(A)"></el-table-column>
              </el-table>
            </div>
            <div class="meterCoverOne">
              <el-table
                :data="tableDataThree"
                style="width: 100%"
                :header-cell-style="{background:'#0068b8',color:'#fff'}"
              >
                <el-table-column align="center" prop="date" label="参数"></el-table-column>
                <el-table-column align="center" label="有功(kWh)">
                  <el-table-column align="center" prop="name" label="正向"></el-table-column>
                  <el-table-column align="center" prop="province" label="反向"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label="无功(kVarh)">
                  <el-table-column align="center" prop="name" label="正向"></el-table-column>
                  <el-table-column align="center" prop="province" label="反向"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="instrumentBottom">
        <el-button @click="close" size="mini">退 出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'meterCoverLayer',
  components: {},
  data() {
    return {
      tableData: [
        {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }, {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }
      ],
      tableDataTwo: [
        {
          date: '有功功率(kW)',
          name: '403.598',
          address: '10200.999'
        }
      ],
      tableDataThree: [
        {
          date: '电能示值',
          name: '201573600',
          province: '444098848'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    close() {
      this.$emit('close')
    },
    columnStyle({ columnIndex }) {
      if (columnIndex === 0) {
        return 'background:#0068b8;text-align:center;color: #fff;'
      }
      return 'text-align:center'
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.instrument
  overflow hidden
  width 1200px
  border-radius 4px
  padding 5px
  box-sizing content-box
  background #e0ecff
.instrumentHeader
  position relative
  overflow hidden
  padding 0 0 4px 4px
  margin-bottom 4px
  border-bottom 1px solid #dcdfe6
  text-align left
  font-size 14px
  color #0E2D5F
.instrumentBottom
  border 1px solid
  padding 10px 10px 10px 0
  text-align right
  width 100%
  box-sizing border-box
  background #F4F4F4
  border-color #dddddd #95B8E7 #95B8E7 #95B8E7
.instrumentSubject
  padding 10px 20px 20px
  position relative
  overflow hidden
  box-sizing border-box
  background-color $background-color-White
.instrumentHeaderclose
  float right
  margin-right 4px
  paneltoolClose()
.instrumentHeaderclose:hover
  opacity 1
.meterCoverTilte
  position relative
  overflow hidden
  text-align center
  font-size 26px
  font-weight bolder
  margin-bottom 10px
.meterCoverTilteSpan
  position absolute
  right 0
  font-weight normal
  font-size 16px
  line-height 34px
.meterCoverOne
  margin-bottom 10px
</style>
