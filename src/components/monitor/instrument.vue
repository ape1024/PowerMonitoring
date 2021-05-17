<template>
  <el-row class="instrument">
    <el-col :span="24">
      <h4 class="instrumentHeader">
        表盘数据
        <i @click="close" class="instrumentHeaderclose"></i>
      </h4>
      <div class="instrumentSubject">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard :dashBoardId="dashBoardId" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard :dashBoardId="dashBoardIdTwo" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <dashBoard :dashBoardId="dashBoardIdThree" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="instrumentBottom">
        <el-button @click="close" size="mini">退 出</el-button>
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
    return {
      dashBoardId: 'dashBoardId',
      dashBoardIdTwo: 'dashBoardIdTwo',
      dashBoardIdThree: 'dashBoardIdThree'
    };
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
  width 800px
  border-radius 4px
  padding 5px
  box-sizing content-box
  background #e0ecff
.instrumentHeader
  position relative
  overflow hidden
  padding 0 0 4px 4px
  margin-bottom 4px
  border-bottom 1px solid #dcdfe6
  text-align left
  font-size 14px
  color #0E2D5F
.instrumentBottom
  border 1px solid
  padding 10px 10px 10px 0
  text-align right
  width 100%
  box-sizing border-box
  background #F4F4F4
  border-color #dddddd #95B8E7 #95B8E7 #95B8E7
.instrumentSubject
  width 100%
  padding-top 10px
  position relative
  overflow hidden
  background-color #F0FCFF
.instrumentHeaderclose
  float right
  margin-right 4px
  paneltoolClose()
.instrumentHeaderclose:hover
  opacity 1
</style>
