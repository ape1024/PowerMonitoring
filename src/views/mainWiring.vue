<template>
  <el-row class="mainWiringElrow">
    <el-col :span="24" class="mainWiringElcol">
      <!-- 运行监视 -> 主接线图 -->
      <Breadcrumb :breadcrumbData="breadcrumbData" />
      <div class="TabControl">
        <TabControl />
        <TabControl />
      </div>
      <div class="mainWiringSubject"></div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import TabControl from '../components/mainWiring/TabControl.vue'

export default {
  name: 'MainWiring',
  components: {
    Breadcrumb,
    TabControl
  },
  data() {
    return {
      breadcrumbData: ''
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.breadcrumbData = '主接线图监视'
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.mainWiringElrow
  background $background-color-White
  height 100%
  border 1px solid $border-color-one
  border-radius 10px
  box-sizing border-box
  padding 6px
.TabControl
  border 1px solid $border-color-one
  border-radius 6px
  padding 6px
  margin 6px 0 0
.mainWiringSubject
  padding 6px
  margin-top 6px
  min-height 600px
</style>
