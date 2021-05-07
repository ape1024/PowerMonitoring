<template>
  <el-row>
    <!-- 首  页 -->
    <el-col :span="24">
      <!-- 页卡 -->
      <Breadcrumb />
      <!-- 基础信息 -->
      <el-row :gutter="20" class="InformationSubject">
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting />
          </div>
        </el-col>
      </el-row>
      <!-- 日负荷情况 -->
      <div class="loadCondition">
        <overburden />
      </div>
      <div class="loadCondition">
        <electricity />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import exhibiting from '../components/homePage/exhibiting.vue'
import overburden from '../components/homePage/overburden.vue'
import electricity from '../components/homePage/electricity.vue'

export default {
  name: 'HomePage',
  components: {
    Breadcrumb,
    exhibiting,
    overburden,
    electricity
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.InformationSubject
  margin 20px 0
  position relative
  overflow hidden
.InformationBox
  overflow hidden
  width 100%
  box-sizing border-box
.loadCondition
  overflow hidden
  position relative
  border-radius 5px
  border 1px solid $border-color-two
  width 100%
  margin-top 20px
  height 360px
</style>
