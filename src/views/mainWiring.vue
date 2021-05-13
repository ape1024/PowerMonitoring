<template>
  <el-row class="mainWiringElrow">
    <el-col :span="24" class="mainWiringElcol">
      <!-- 运行监视 -> 主接线图 -->
      <Breadcrumb />
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
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
.mainWiringElrow
  background #fff
  height 100%
  border 1px solid #c6c6c6
  border-radius 10px
  box-sizing border-box
  padding 6px
.TabControl
  border 1px solid #c6c6c6
  border-radius 6px
  padding 6px
  margin 6px 0 0
.mainWiringSubject
  padding 6px
  margin-top 6px
  min-height 800px
</style>
