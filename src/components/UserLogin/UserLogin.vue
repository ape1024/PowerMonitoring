<template>
  <el-row>
    <el-col :span="24" class="UserInput">
      <h4 class="userTitle">{{title}}</h4>
      <div class="userName">
        <el-input
          prefix-icon="iconfont el-icon-user"
          v-model="userName"
          placeholder="请输入用户名"
          clearable
        ></el-input>
      </div>
      <div class="userPassword">
        <el-input
          prefix-icon="iconfont el-icon-lock"
          placeholder="请输入密码"
          v-model="userPassword"
          show-password
        ></el-input>
      </div>
      <div class="signIn">
        <el-button @click="signIn" type="primary">登 录</el-button>
      </div>
      <div class="remember">
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      title: '',
      userName: '',
      userPassword: '',
      checked: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    signIn() {
      console.log(this.userName)
      console.log(this.userPassword)
      this.$router.push('HomePage')
    }
  },
  created() {
    this.title = '用户登录';
  }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.UserInput
  width 100%
  position relative
  overflow hidden
  .userTitle
    padding 30px 0
    text-align center
    color $font-color-main
    font-size $font-size-large
  .userName
    margin-bottom 30px
  .userPassword
    margin-bottom 30px
  .signIn
    width 100%
    position relative
    overflow hidden
    margin-bottom 30px
    .el-button
      width 100%
</style>
