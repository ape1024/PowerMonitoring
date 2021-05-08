<template>
  <el-row>
    <!-- 运行监视 —> 在线表计 -->
    <el-col :span="24">
      <Breadcrumb />
      <h4 class="OnlineMeterTitle">在线表计监视</h4>
      <el-row>
        <el-col :span="24">
          <el-row :gutter="20">
            <el-col @click.native="meterClick" :span="6" class="meterList_Li">
              <div class="meterListLeft">北工大软件园A1</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">11</p>|
                  <p class="meterCircleRight">22</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6" class="meterList_Li">
              <div class="meterListLeft">北工大软件园B</div>
              <div class="meterListRight">
                <div class="meterCircle">
                  <p class="meterCircleLeft">111</p>|
                  <p class="meterCircleRight">222</p>
                </div>
              </div>
            </el-col>
            <el-col :span="6" class="meterList_Li">
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
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    meterClick() {
      console.log('/')
      this.$router.push('meterManifestation')
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.OnlineMeterTitle
  padding 10px 0
  text-align center
  color $font-color-routine
  font-size $font-size-ExtraLarge
.meterList_Li
  width 350px
  height 120px
  cursor pointer
  margin-bottom 20px
  color $font-color-Brand
  border-radius 10px
  display flex
  overflow hidden
  flex-direction row
  flex-flow row wrap
  .meterListLeft
    width 180px
    line-height 120px
    text-align center
    height 100%
    font-size $font-size-large
    background #f3f5f9
  .meterListRight
    text-align center
    background #f9f9f9
    height 100%
    width 140px
    .meterCircle
      display flex
      margin 10px auto 0
      border-radius 50%
      border 8px solid $background-color-Danger
      width 100px
      height 100px
      line-height 84px
      font-size $font-size-ExtraLarge
      box-sizing border-box
      .meterCircleLeft
        flex 1
        color $font-color-Brand
        font-weight bold
      .meterCircleRight
        flex 1
        color $font-color-Danger
        font-weight bold
</style>
