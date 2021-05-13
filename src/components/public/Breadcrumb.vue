<template>
  <el-row class="Breadcrumb">
    <el-col :span="24">
      <!-- 页头 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Breadcrumb',
  components: {},
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
@import '../../assets/css/base.styl'
.Breadcrumb
  border-radius 5px
  border 1px solid #c6c6c6
  padding 7px 10px
</style>
