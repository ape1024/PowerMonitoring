<template>
  <el-row>
    <!-- 运行监视 -> 配电设备 -->
    <el-col :span="24">
      <Breadcrumb />
      <el-container>
        <el-aside class="controllerAside" width="300px">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-aside>
        <el-main>
          <h4 class="controllerTitle">啦啦啦啦啦啦啦啦</h4>
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="date" label="电压箱"></el-table-column>
            <el-table-column prop="name" label="电压"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <div v-if="coverSiwth" class="coverLayer">
        <controllerGraph @close="closeFn" />
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
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
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
    handleNodeClick(data) {
      console.log(data);
    },
    closeFn() {
      this.coverSiwth = false
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.controllerAside
  padding 20px 0 0
.controllerTitle
  text-align center
  background $font-color-Brand
  padding 10px 0
  margin-bottom 20px
  color $font-color-white
  font-size $font-size-ExtraLarge
.coverLayer
  coverLayer()
</style>
