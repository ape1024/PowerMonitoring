<template>
  <el-row class="controllerSwitchingElrow">
    <!-- 运行监视 -> 表计数据监视 -->
    <el-col :span="24">
      <Breadcrumb />
      <el-container class="cotrollerElcol">
        <el-aside class="controllerAside" width="250px">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>
                <i :class="data.icon"></i>
                {{ node.label }}
              </span>
            </span>
          </el-tree>
        </el-aside>
        <el-main>
          <h4 class="controllerTitle">
            <span class="controllerSpan">
              <el-button size="small" type="primary">
                <i class="el-icon-printer"></i>
                报表打印
              </el-button>
            </span>
            测试用户A区配———直流屏
          </h4>
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-table
                :data="tableData"
                border
                height="700"
                style="width: 100%"
                :header-cell-style="{background:'#0068b8',color:'#fff'}"
              >
                <el-table-column align="center" prop="date" label="序号"></el-table-column>
                <el-table-column align="center" prop="name" label="名称"></el-table-column>
                <el-table-column align="center" prop="a" label="标识"></el-table-column>
                <el-table-column align="center" prop="b" label="类型"></el-table-column>
                <el-table-column align="center" prop="c" label="采集值"></el-table-column>
                <el-table-column align="center" prop="d" label="含义"></el-table-column>
                <el-table-column align="center" prop="e" label="采集时间"></el-table-column>
                <el-table-column align="center" label="曲线">
                  <template>
                    <!-- slot-scope="scope" -->
                    <span @click="tableClick" class="tableSpan">
                      <i class="eliconData"></i>
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-row :gutter="20" v-if="coverSiwth" class="coverLayer">
        <el-col :span="8" :offset="8">
          <!-- <controllerGraph @close="closeFn" /> -->
          <meterChart @close="closeFn" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import meterChart from '../components/meterData/meterChart.vue'

export default {
  name: 'MeterData',
  components: {
    Breadcrumb,
    meterChart
  },
  data() {
    return {
      coverSiwth: false,
      data: [
        {
          label: '测试用户',
          icon: 'eliconClaim',
          children: [
            {
              label: '测试用户A区配',
              icon: 'eliconClaim',
              children: [
                {
                  label: '201:1#进线',
                  icon: 'eliconSuccess'
                },
                {
                  label: '201:1#进线',
                  icon: 'eliconSuccess'
                },
                {
                  label: '201:1#进线',
                  icon: 'eliconSuccess'
                }
              ]
            },
            {
              label: '测试用户A3楼配',
              icon: 'eliconClaim'
            },
            {
              label: '测试用户B1楼配',
              icon: 'eliconClaim'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [
        {
          date: '1',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        },
        {
          date: '2',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '3',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '4',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '5',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '6',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '7',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '8',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '9',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '10',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '11',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '12',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '13',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '14',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '15',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }, {
          date: '16',
          name: '总功率因数_%',
          a: 'COS',
          b: '模拟量',
          c: '0',
          d: '0',
          e: '2021-05-13 15:15:00'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    tableClick(data) {
      console.log(data)
      this.coverSiwth = true
    },
    handleNodeClick(data) {
      console.log(data);
    },
    closeFn() {
      this.coverSiwth = false
    },
    // eslint-disable-next-line consistent-return
    columnStyle({ columnIndex }) {
      if (columnIndex === 0) {
        return 'background:#d4eafb;text-align:center'
      }
      return 'text-align:center'
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.controllerSwitchingElrow
  box-sizing border-box
  padding 6px
  border 1px solid #c6c6c6
  border-radius 6px
  height 100%
  background #fff
.cotrollerElcol
  min-height 700px
  border 1px solid
  margin-top 6px
  padding 8px 0
  border-radius 6px
  border-color #c6c6c6
.controllerAside
  padding 10px 4px 0
  border-radius 6px
  margin-left 6px
  border 1px solid #c6c6c6
.controllerTitle
  position relative
  overflow hidden
  text-align center
  padding 6px 0 0
  font-weight normal
  color #333
  font-size 18px
.coverLayer
  coverLayer()
.eliconClaim
  width 18px
  min-height 20px
  cursor pointer
  background url('../assets/img/tree_icons.png') no-repeat -224px 0
  vertical-align middle
  display inline-block
.eliconSuccess
  width 16px
  min-height 20px
  cursor pointer
  background url('../assets/img/tree_icons.png') no-repeat -240px 0
  vertical-align middle
  display inline-block
.tableSpan
  tableSpan()
.tableSpan:hover
  text-decoration underline
.eliconData
  display inline-block
  width 20px
  height 18px
  background-image url('../assets/img/line.png')
  background-repeat no-repeat
  background-position center
.controllerSpan
  float left
</style>
