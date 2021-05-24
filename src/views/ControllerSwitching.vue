<template>
  <el-row class="controllerSwitchingElrow">
    <!-- 运行监视 -> 配电设备 -->
    <el-col :span="24">
      <Breadcrumb :breadcrumbData="breadcrumbData" />
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
          <h4 class="controllerTitle">测试用户A区配———直流屏</h4>
          <el-table
            :cell-style="columnStyle"
            :show-header="false"
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column prop="date" label="电压箱">
              <template slot-scope="scope">
                <span @click="tableClick" class="tableSpan">{{scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="电压"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <div v-if="coverSiwth" class="coverLayer">
        <div class="coverLayerDiv">
          <vue-drag-resize :isResizable="false">
            <controllerGraph @close="closeFn" />
          </vue-drag-resize>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import controllerGraph from '../components/controllerSwitching/controllerGraph.vue'

export default {
  name: 'controllerSwitching',
  components: {
    Breadcrumb,
    controllerGraph
  },
  data() {
    return {
      coverSiwth: false,
      breadcrumbData: '',
      data: [
        {
          label: '测试用户A区配',
          icon: 'eliconClaim',
          children: [
            {
              label: '1#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '2#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '3#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '4#变压器12',
              icon: 'eliconSuccess'
            }
          ]
        },
        {
          label: '测试用户A3楼配',
          icon: 'eliconClaim',
          children: [
            {
              label: '1#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '2#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '3#变压器12',
              icon: 'eliconSuccess'
            },
            {
              label: '4#变压器12',
              icon: 'eliconSuccess'
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
    columnStyle({ columnIndex }) {
      if (columnIndex === 0) {
        return 'background:#d4eafb;text-align:center'
      }
      return 'text-align:center'
    }
  },
  created() {
    this.breadcrumbData = '配电设备监视'
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.controllerSwitchingElrow
  box-sizing border-box
  padding 6px
  height 100%
  background $background-color-White
  Allborder()
.cotrollerElcol
  min-height 700px
  margin-top 6px
  padding 8px 0
  Allborder()
.controllerAside
  padding 10px 4px 0
  margin-left 6px
  Allborder()
.controllerTitle
  text-align center
  background $font-color-Brand
  padding 6px 0
  font-weight normal
  margin 10px 0 20px
  color $font-color-white
  font-size $font-size-ExtraLarge
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
.coverLayerDiv
  position absolute
  top 200px
  left 50%
  margin-left -400px
</style>
