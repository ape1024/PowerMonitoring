<template>
  <div class="home">
    <el-container>
      <el-header class="homeHeader">
        <Navigation />
      </el-header>
      <el-container class="homeContainer">
        <el-aside width="200px">
          <NavMenu />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navigation from '../components/Home/Navigation.vue'
import NavMenu from '../components/Home/NavMenu.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    NavMenu
  },
  created() {
    // this.$router.push('/homePage')
  }
}
</script>
<style lang="stylus">
@import '../assets/css/base.styl'
.home
  height 100%
  width 100%
  position relative
  overflow hidden
  .el-container
    width 100%
    height 100%
  .homeHeader
    height 70px
    width 100%
    overflow hidden
    position relative
    background $background-color-Brand
  .homeContainer
    width 100%
    height 100%
    padding 10px 0
    box-sizing content-box
  .el-aside
    overflow hidden
    border-right solid 1px #DCDFE6
</style>
