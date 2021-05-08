<template>
  <el-row class="login">
    <el-col :span="24">
      <el-container>
        <el-header class="loginHeader">{{ title }}</el-header>
        <el-main class="loginMain">
          <div class="UserLogin">
            <UserLogin />
          </div>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import UserLogin from '../components/userLogin/userLogin.vue';

export default {
  name: 'Login',
  data() {
    return {
      title: ''
    };
  },
  components: {
    UserLogin
  },
  watch: {},
  methods: {},
  created() {
    this.title = '智能电力监控系统';
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.login
  height 100%
  width 100%
  position relative
  overflow hidden
  .loginHeader
    font-size $font-size-superLarge
    text-align center
    height 200px !important
    line-height 200px
    color $font-color-Brand
  .loginMain
    width 100%
    min-width 1000px
    height 540px
    position relative
    overflow hidden
    background url('../assets/img/loginBackgroundImgs.jpg')
    background-color #0068b8
    background-position center
    background-repeat no-repeat
    .UserLogin
      width 250px
      height 360px
      padding 0 50px
      background-color #FDFFFF
      opacity 0.85
      position absolute
      top 40%
      left 60%
      margin-top -125px
      border-radius 3px
</style>
