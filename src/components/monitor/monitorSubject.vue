<template>
  <el-row>
    <el-col :span="24">
      <el-table
        :data="tableData"
        border
        style="width: 1000px"
        :row-class-name="tableRowClassName"
        :header-cell-style="{background:'#0068b8',color:'#fff'}"
      >
        <el-table-column align="center" prop="date" label width="180">
          <template slot-scope="scope">
            <span @click="tableClick" class="tableSpan">{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              1#进线
              <br />(501)
            </i>
          </template>
          <template slot-scope="scope">
            <span @click="tableClick" class="tableSpan">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              2#进线
              <br />(501)
            </i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              1#变压器出线
              <br />(501)
            </i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              2#变压器出线
              <br />(501)
            </i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              2#变压器出线
              <br />(501)
            </i>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name">
          <template slot="header" slot-scope="scope">
            <i class="monitor-table-header" @click="clearAll(scope)">
              2#变压器出线
              <br />(501)
            </i>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20" v-if="coverLayerSwith" class="coverLayer">
        <el-col :span="12" :offset="6">
          <instrument @close="closeInstrument" />
        </el-col>
      </el-row>
      <el-row :gutter="20" v-if="brokenSwith" class="coverLayer">
        <el-col :span="12" :offset="6">
          <!-- <instrument @close="closeInstrument" /> -->
          <lineChart @close="closeInstrument" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import instrument from './instrument.vue'
import lineChart from './lineChart.vue'

export default {
  name: 'monitorSubject',
  components: {
    instrument,
    lineChart
  },
  data() {
    return {
      coverLayerSwith: false,
      brokenSwith: false,
      tableData: [
        {
          date: 'U1',
          name: 'null'
        }, {
          date: 'P1',
          name: 'null'
        }, {
          date: 'W1',
          name: 'null'
        }, {
          date: 'E1',
          name: 'null'
        }, {
          date: 'Y1',
          name: 'null'
        }, {
          date: 'O1',
          name: 'null'
        }, {
          date: 'Z1',
          name: 'null'
        }, {
          date: 'A1',
          name: 'null'
        }, {
          date: 'B1',
          name: 'null'
        }, {
          date: 'C1',
          name: 'null'
        }, {
          date: 'M1',
          name: 'null'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    closeInstrument() {
      this.coverLayerSwith = false
      this.brokenSwith = false
    },
    tableClick() {
      this.coverLayerSwith = true
    },
    clearAll(data) {
      console.log(data)
      this.brokenSwith = true
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex <= 2) {
        console.log('rowIndex ===1')
        return 'warning-row';
      } if (rowIndex > 2 && rowIndex <= 5) {
        return 'success-row';
      } if (rowIndex > 5) {
        return 'third-row';
      }
      return '';
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.coverLayer
  coverLayer()
.monitor-table-header
  font-style normal
  transition 0.4s
  cursor pointer
.monitor-table-header:hover
  text-decoration underline
.tableSpan
  transition 0.4s
  cursor pointer
.tableSpan:hover
  text-decoration underline
</style>
