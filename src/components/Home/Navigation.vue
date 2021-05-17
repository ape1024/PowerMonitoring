<template>
  <el-row>
    <el-col :span="24" class="Navigation">
      <div class="navTitle">{{title}}</div>
      <div class="signOut">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            北工大
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="information">
        <el-badge :value="tidings" class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
  data() {
    return {
      title: '',
      tidings: 100
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.title = '智能电力监控系统'
  }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.Navigation
  position relative
  overflow hidden
  .navTitle
    float left
    line-height 70px
    color $font-color-white
    font-weight bold
    font-size $font-size-Title
  .signOut
    color $font-color-white
    line-height 70px
    float right
    font-size 22px
    cursor pointer
    position relative
    overflow hidden
    .el-dropdown
      color $font-color-white
  .information
    color $font-color-white
    font-size 22px
    position relative
    padding 0px 30px 0 30px
    margin 20px 30px 0 0
    float right
    border-right 1px solid #fff
    border-left 1px solid #fff
</style>
