<template>
  <el-row class="monitorElrow">
    <el-col :span="24" class="monitorElcol">
      <!-- 运行监视 -> 回路数据 -->
      <Breadcrumb />
      <div class="TabControlArea">
        <div class="TabControl">
          <TabControl />
        </div>
        <div class="TabControlTwo">
          <TabControl />
          <!-- 主体内容 -->
          <monitorSubject />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import TabControl from '../components/public/TabControl.vue'
import monitorSubject from '../components/monitor/monitorSubject.vue'

export default {
  name: 'monitor',
  components: {
    Breadcrumb,
    monitorSubject,
    TabControl
  },
  data() {
    return {
      tableData: []
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.tableData = [

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
};
</script>

<style scoped lang='stylus'>
.TabControlArea
  border-radius 6px
  margin-top 6px
  border 1px solid #c6c6c6
.monitorElrow
  background #fff
  height 100%
  padding 6px
  border 1px solid #c6c6c6
  border-radius 6px
  box-sizing border-box
.TabControl
  overflow hidden
  box-sizing content-box
  padding 10px 10px 0
.TabControlTwo
  overflow hidden
  box-sizing content-box
  padding 0 20px 10px
</style>
