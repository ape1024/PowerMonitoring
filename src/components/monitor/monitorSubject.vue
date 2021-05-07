<template>
  <el-row>
    <el-col :span="24">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div v-if="coverLayerSwith" class="coverLayer">
        <instrument @close="closeInstrument" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import instrument from './instrument.vue'

export default {
  name: 'monitorSubject',
  components: {
    instrument
  },
  data() {
    return {
      coverLayerSwith: false,
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
    };
  },
  computed: {},
  watch: {},
  methods: {
    closeInstrument() {
      this.coverLayerSwith = false
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.coverLayer
  coverLayer()
</style>
