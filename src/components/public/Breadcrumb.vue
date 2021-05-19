<template>
  <el-row class="Breadcrumb">
    <el-col :span="24">
      <!-- 页头 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadcrumbData}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['breadcrumbData'],
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
  border 1px solid $border-color-one
  padding 7px 10px
</style>
