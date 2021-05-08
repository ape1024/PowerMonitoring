<template>
  <el-row>
    <el-col :span="24">
      <Breadcrumb />
      <el-container>
        <el-aside width="500px">
          <el-button @click="getBack" class="meterButton" size="small">返回</el-button>
          <div class="meterAside">
            <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </el-aside>
        <el-main>
          <div class="meterTable">
            <el-table border :data="tableData" style="width: 100%">
              <el-table-column label="状态" prop="date">
                <template slot-scope="scope">
                  <span @click="tableClick" class="tableSpan">{{scope.row.date}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
      <div v-if="coverSiwth" class="coverLayer">
        <meterCoverLayer @close="closeFn" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../public/Breadcrumb.vue'
import meterCoverLayer from './meterCoverLayer.vue'

export default {
  name: 'meterManifestation',
  components: {
    Breadcrumb,
    meterCoverLayer
  },
  data() {
    return {
      coverSiwth: false,
      treeData: [
        {
          label: '一级 1'
        },
        {
          label: '一级 2'
        },
        {
          label: '一级 3'
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
      ],
      tableData2: [
        {
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
    handleNodeClick(data) {
      console.log(data)
    },
    getBack() {
      this.$router.push('OnlineMeter')
    },
    closeFn() {
      this.coverSiwth = false
    },
    tableClick() {
      this.coverSiwth = true
    }
  },
  created() { }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.meterAside
  overflow hidden
  font-size 20px
  padding 30px 0 0
.meterTable
  overflow hidden
  position relative
  width 500px
.meterButton
  margin 20px 0 0
.coverLayer
  coverLayer()
.tableSpan
  cursor pointer
  color $font-color-Brand
  text-decoration underline
</style>
