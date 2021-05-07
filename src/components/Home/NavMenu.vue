<template>
  <el-row>
    <el-col :span="24">
      <!-- router  加上 router 可以直接实现跳转
      不需要加click事件， router地址直接写到index里面即可-->
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        router
        @close="handleClose"
      >
        <el-menu-item index="HomePage">
          <i class="el-icon-s-home"></i>
          <span slot="title">用户首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>运行监视</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="mainWiring">主接线图监视</el-menu-item>
            <el-menu-item index="monitor">回路数据监视</el-menu-item>
            <el-menu-item index="2-4">在线表计监视</el-menu-item>
            <el-menu-item index="2-5">配电设备监视</el-menu-item>
            <el-menu-item index="2-6">表计数据监视</el-menu-item>
            <el-menu-item index="2-7">运行数据监视</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-opportunity"></i>
            <span>报警管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">报警事件查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>电量统计</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="DayPower">日电量统计</el-menu-item>
            <el-menu-item index="MonthPower">月电量统计</el-menu-item>
            <el-menu-item index="YearPower">年电量统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>数据分析</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="ElectricityStatistics">电量统计分析</el-menu-item>
            <el-menu-item index="ElectricityCustom">电量定制分析</el-menu-item>
            <el-menu-item index="HistoricalData">历史数据分析</el-menu-item>
            <el-menu-item index="LoadThan">负荷时比分析</el-menu-item>
            <el-menu-item index="MaximumLoad">最大负荷分析</el-menu-item>
            <el-menu-item index="LoadAnalogy">负荷类比分析</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'NavMenu',
  components: {},
  data() {
    return {
      defaultActive: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen(data) {
      console.log(data, 'handleOpen')
    },
    handleClose(data) {
      console.log(data, 'handleClose')
    }
  },
  created() {
    this.defaultActive = this.$route.path.substr(1)
    console.log(this.$route.path.substr(1), 'this.$route.path')
  }
};
</script>

<style scoped lang='stylus'>
.el-menu
  border none
</style>
