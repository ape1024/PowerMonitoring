<template>
  <el-row class="OperatingDataElrow">
    <!-- 运行监视 -> 运行数据 -->
    <el-col :span="24">
      <Breadcrumb />
      <div class="ElectricityCondition">
        <div class="Condition-module_row">
          <div class="Condition-module_explain">配电室:</div>
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
          <div class="Condition-module_date">
            <el-button size="small" type="primary">
              <i class="el-icon-printer"></i>
              报表打印
            </el-button>
          </div>
        </div>
      </div>
      <div class="operatingTable">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          height="700"
          :header-cell-style="{background:'#0068b8',color:'#fff'}"
        >
          <el-table-column align="center" prop="date" label="序号" width="50"></el-table-column>
          <el-table-column align="center" prop="name" label="表计编号" width="250"></el-table-column>
          <el-table-column align="center" prop="a" label="名称" width="250"></el-table-column>
          <el-table-column align="center" prop="b" label="Ua"></el-table-column>
          <el-table-column align="center" prop="c" label="Ub"></el-table-column>
          <el-table-column align="center" prop="d" label="Uc"></el-table-column>
          <el-table-column align="center" prop="e" label="Ia"></el-table-column>
          <el-table-column align="center" prop="f" label="Ib"></el-table-column>
          <el-table-column align="center" prop="g" label="Ic"></el-table-column>
          <el-table-column align="center" prop="h" label="P"></el-table-column>
          <el-table-column align="center" prop="h" label="Pa"></el-table-column>
          <el-table-column align="center" prop="h" label="Pb"></el-table-column>
          <el-table-column align="center" prop="h" label="Pc"></el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'OperatingData',
  components: {
    Breadcrumb
  },
  data() {
    return {
      value: '',
      options: [],
      tableData: [
        {
          date: '1',
          name: '123',
          a: '143432',
          b: '352324',
          c: '543564',
          d: '654647',
          e: '786785',
          f: '967868',
          g: '234324',
          h: '543535'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.OperatingDataElrow
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
  border 1px solid $border-color-one
  margin-top 6px
  border-radius 6px
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
  align-items center
  justify-content flex-start
  display flex
.Condition-module_date
  display flex
  flex-direction row
  flex-flow row wrap
  padding 4px 10px 4px 10px
.operatingTable
  margin-top 10px
  overflow hidden
  box-sizing border-box
  padding 6px
  Allborder()
</style>
