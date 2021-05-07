<template>
  <el-row class="instrument">
    <el-col :span="24">
      <!-- 仪表盘 -->
      <h4 class="instrumentHeader">表盘数据</h4>
      <div class="instrumentSubject">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="instrumentBottom">
        <el-button @click="close" size="medium">退 出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import dashBoard from './dashBoard.vue'

export default {
  name: 'instrument',
  components: {
    dashBoard
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    close() {
      this.$emit('close')
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.instrument
  overflow hidden
  width 900px
  height 500px
  padding 20px
  box-sizing content-box
  position absolute
  top 50%
  left 50%
  margin -250px 0 0 -450px
  background $background-color-FFF
.instrumentHeader
  position relative
  overflow hidden
  width 100%
  padding 0 0 16px
  margin-bottom 16px
  border-bottom 1px solid $border-color-one
  text-align center
  font-size $font-size-large
  color $font-color-routine
.instrumentBottom
  border-top 1px solid $border-color-one
  padding-top 10px
  text-align center
  width 100%
.instrumentSubject
  width 100%
  height 400px
  position relative
  overflow hidden
</style>
