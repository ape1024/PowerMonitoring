<template>
  <el-row class="onlineElrow">
    <!-- 运行监视 —> 在线表计 -->
    <el-col :span="24">
      <Breadcrumb :breadcrumbData="breadcrumbData" />
      <h4 class="OnlineMeterTitle">
        <img src="../assets/img/jiaohuanji.png" alt />
        在线表计监视
      </h4>
      <el-row class="OnlineMeterElrow">
        <el-col :span="24">
          <el-row :gutter="20">
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园A1</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">11</p>|
                  <p class="meterCircleRight">22</p>
                </div>
              </div>
            </el-col>
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col @click.native="meterClick" :span="4.8" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'

export default {
  name: 'OnlineMeter',
  components: {
    Breadcrumb
  },
  data() {
    return {
      breadcrumbData: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    meterClick() {
      console.log('/')
      this.$router.push('meterManifestation')
    }
  },
  created() {
    this.breadcrumbData = '在线表计监视'
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.OnlineMeterTitle
  padding 6px 0
  text-align center
  color #333
  font-weight normal
  font-size 26px
.meterList_Li
  height 145px
  cursor pointer
  margin-bottom 20px
  color $font-color-Brand
  border-radius 10px
  display flex
  overflow hidden
  flex-direction row
  flex-flow row wrap
.meterListLeft
  width 178px
  line-height 145px
  text-align center
  height 100%
  font-weight bold
  font-size 18px
  background #f3f5f9
.meterListRight
  text-align center
  background #f9f9f9
  height 100%
  width 135px
  .meterCircle
    display flex
    margin 10px auto 0
    border-radius 50%
    border 8px solid red
    width 120px
    height 120px
    line-height 100px
    font-size 24px
    box-sizing border-box
    .meterCircleLeft
      flex 1
      color #2281fa
      font-weight bold
    .meterCircleRight
      flex 1
      color red
      font-weight bold
.OnlineMeterTitle img
  vertical-align middle
.OnlineMeterElrow
  padding 6px
  Allborder()
.onlineElrow
  padding 6px
  Allborder()
  background $background-color-White
  height 100%
</style>
