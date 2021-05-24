<template>
  <el-row>
    <!-- 折线图 -->
    <el-col :span="24">
      <div id="TimelineChart" :style="{width: '100%', height: '500px'}"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TimelineChart',
  components: {},
  data() {
    return {
      stature: [],
      weight: [],
      reach: [],
      bodyFat: [],
      maximum: '',
      hypotension: [],
      hypertension: []
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    getData() {
      //  需要一个最大数值
      //  身高
      const stature = [0.19, 0.92, 0.19, 0.97, 0.16, 1, 0.16, 0.93, 0.29, 0.91, 0.12, 0.92, 0.12, 0.96, 0.12, 0.92, 0.18, 0.98, 0.18, 0.98, 0.16, 0.98, 0.21]
      this.stature = this.formatterFn(stature, 0)
      //  体重
      const weight = [99, 12, 99, 17, 96, 3, 16, 13, 39, 71, 22, 12, 52, 76, 32, 92, 8, 78, 28, 68, 96, 28, 1, 54]
      this.weight = this.formatterFn(weight, 1)
      //  臂长
      const reach = [99, 62, 69, 67, 66, 70, 66, 39, 69, 61, 62, 92, 32, 66, 82, 42, 88, 8, 48, 68, 36, 78, 61, 23]
      this.reach = this.formatterFn(reach, 2)
      //  体脂率
      const bodyFat = [919, 482, 209, 487, 366, 130, 226, 443, 919, 617, 982, 622, 232, 956, 302, 612, 988, 548, 768, 478, 616, 338, 491, 634]
      this.bodyFat = this.formatterFn(bodyFat, 3)
      //  低血压
      const hypotension = [2999, 1282, 2409, 2087, 2466, 1342, 2226, 2543, 1519, 1161, 2882, 2222, 1232, 2456, 2902, 2112, 1188, 2448, 1168, 1478, 1216, 2238, 2591]
      this.hypotension = this.formatterFn(hypotension, 4)
      //  高血压
      const hypertension = [15190, 29992, 13009, 19087, 15066, 16421, 12526, 14543, 15319, 19161, 11582, 19322, 18632, 13656, 12225, 11252, 15418, 15518, 15528, 15578, 15116, 15248, 15521]
      this.hypertension = this.formatterFn(hypertension, 5)
    },
    formatterFn(data, multiple) {
      const arr = []
      if (data && data.length) {
        const multipleNum = Number(multiple) ? multiple : 0
        const maxNum = Math.max.apply(null, data);
        for (let i = 0; i < data.length; i += 1) {
          const num = Number(((data[i] / maxNum) + multipleNum))
          arr.push(num)
        }
      }
      return arr
    },
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('TimelineChart'))
      myChart.setOption({
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis',
          // formatter: '{a0}: {c0}元<br />{a1}: {c1}元<br />{a2}: {c2}元'
          formatter(c) {
            let str = '';
            c.forEach((item) => {
              const temp = {};
              switch (item.seriesName) {
                case '体脂率':
                  temp.value = ((item.value - 3) * 988).toFixed(2)
                  break;
                case '体重':
                  temp.value = ((item.value - 1) * 99).toFixed(2)
                  break;
                case '臂长':
                  temp.value = ((item.value - 2) * 99).toFixed(2)
                  break;
                case '身高':
                  temp.value = ((item.value - 0) * 1).toFixed(2)
                  break;
                case '低血压':
                  temp.value = ((item.value - 4) * 2999).toFixed(2)
                  break;
                case '高血压':
                  temp.value = ((item.value - 5) * 29992).toFixed(2)
                  break;
                default:
              }
              temp.seriesName = item.seriesName
              str += `${temp.seriesName}: ${temp.value}<br />`
            })
            return str
          }
        },
        legend: {
          data: ['身高', '体重', '臂长', '体脂率', '低血压', '高血压']
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
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        },
        yAxis: [
          {
            axisLabel: {
              formatter() {
                return '';
              }
            }
          }
        ],
        series: [
          {
            name: '身高',
            type: 'line',
            data: this.stature
          },
          {
            name: '体重',
            type: 'line',
            data: this.weight
          },
          {
            name: '臂长',
            type: 'line',
            data: this.reach
          },
          {
            name: '体脂率',
            type: 'line',
            data: this.bodyFat
          },
          {
            name: '低血压',
            type: 'line',
            data: this.hypotension
          },
          {
            name: '高血压',
            type: 'line',
            data: this.hypertension
          }
        ]
      })
    }
  },
  created() {
    this.getData()
  }
};
</script>

<style scoped lang='stylus'></style>
