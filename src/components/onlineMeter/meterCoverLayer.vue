<template>
  <el-row>
    <el-col :span="24">
      <!-- 弹出层 -->
      <div class="coverLayerContent">
        <h4 class="coverLayerTitle">
          啦啦啦
          <span class="coverLayerSpan">2021-05-06 12:00</span>
        </h4>
        <div class="coverLayerParameter">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div class="coverLayerParameter">
          <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div class="coverLayerParameter">
          <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div class="coverLayerOperation">
          <el-button @click="operation" size="small">返回</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
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
    };
  },
  computed: {},
  watch: {},
  methods: {
    operation() {
      this.$emit('close')
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.coverLayerContent
  margin 100px auto 0
  width 1200px
  border-radius 5px
  background $background-color-FFF
.coverLayerTitle
  box-sizing border-box
  position relative
  overflow hidden
  padding 20px
  text-align center
  color $font-color-routine
  font-size $font-size-ExtraLarge
.coverLayerSpan
  font-weight normal
  font-size $font-size-Medium
  color $font-color-secondary
  position absolute
  right 18px
  top 26px
.coverLayerParameter
  padding 20px
  overflow hidden
  box-sizing border-box
.coverLayerOperation
  padding 20px 0
  text-align center
  overflow hidden
</style>
