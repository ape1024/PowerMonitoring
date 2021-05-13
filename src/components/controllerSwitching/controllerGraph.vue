<template>
  <el-row>
    <!-- 曲线图 -->
    <el-col :span="24">
      <div class="controllerGraph">
        <div class="graphSubject" @mousedown="move">
          <div>
            <h4 class="graphTitle">变压器曲线数据展示</h4>
          </div>
          <el-switch v-model="switchValue" active-text="单选" inactive-text="多选"></el-switch>
          <div id="graph" :style="{width: '100%', height: '400px'}"></div>
          <div class="operation">
            <el-button @click="operationClick" size="small">关闭</el-button>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'controllerGraph',
  components: {},
  data() {
    return {
      switchValue: false,
      selectedValue: '',
      positionX: '',
      positionY: ''
    };
  },
  computed: {},
  watch: {
    switchValue(data) {
      if (data) {
        this.selectedValue = 'single'
        this.$nextTick(() => {
          this.drawLine()
        })
      } else {
        this.selectedValue = 'multiple'
        this.$nextTick(() => {
          this.drawLine()
        })
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    operationClick() {
      this.$emit('close')
    },
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('graph'))
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          // 'single' 或者 'multiple'
          selectedMode: `${this.selectedValue}`
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    move() {
      // console.log(e, '/////')
      // const odiv = e.target
      // const disX = e.clientX - odiv.offsetLeft;
      // const disY = e.clientY - odiv.offsetTop;
      // // eslint-disable-next-line no-shadow
      // document.onmousemove = (e) => {
      //   const left = e.clientX - disX;
      //   const top = e.clientY - disY;
      //   this.positionX = top;
      //   this.positionY = left;

      //   odiv.style.left = `${left}px`;
      //   odiv.style.top = `${top}px`;
      // };
      // document.onmouseup = () => {
      //   document.onmousemove = null;
      //   document.onmouseup = null;
      // };
    }
  },
  created() {
    this.selectedValue = 'multiple'
  }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.controllerGraph
  margin 200px auto 0
.graphTitle
  padding 4px
  text-align center
  display inline-block
  font-size 14px
  color #fff
  font-weight normal
  background-color #0068b8
  opacity 0.75
.graphSubject
  position relative
  overflow hidden
  padding 0 10px 10px
  border 1px solid #bed1e1
  box-shadow 0 0 5px #bed1e1
  -moz-box-shadow 0 0 5px #bed1e1
  -webkit-box-shadow 0 0 5px #bed1e1
  background-color #fff
  transition 0.2s
.operation
  margin-top 10px
  text-align right
  overflow hidden
</style>
