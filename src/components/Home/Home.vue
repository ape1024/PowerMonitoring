<template>
  <el-row class="home">
    <!-- 主页 -->
    <el-col class="homeCol" :span="24">
      <el-container>
        <el-header class="homeHeader">
          <Navigation />
        </el-header>
        <el-container class="homeContainer">
          <el-aside class="home-el-aside" width="200px">
            <NavMenu :authsData="authsData" />
          </el-aside>
          <el-main class="HomeElmain">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from './Navigation.vue'
import NavMenu from './NavMenu.vue'
import { checkToken, userDimension, routerPrepare } from '../../api/prepare'

export default {
  name: 'Home',
  components: {
    Navigation,
    NavMenu
  },
  data() {
    return {
      token: '',
      userName: '',
      clientId: '',
      authsData: {}
    }
  },
  watch: {

  },
  computed: {
    ...mapState('variable', ['tokenData'])
  },
  methods: {
    // async / await
    async getInformation() {
      try {
        const res = await checkToken(this.token)
        this.userName = res.data.user_name
        this.clientId = 'powerweb'
        this.$store.commit('variable/setUserName', this.userName)
        sessionStorage.setItem('userName', this.userName)
        const data = await userDimension(this.clientId, this.userName)
        this.authsData = data.data.auths
      } catch (e) {
        console.log(e)
      }
    },
    getLocation() {
      const requireComponent = require.context('@/views', true)
      // console.log(requireComponent, 'requireComponent')
      const arr = []
      const clientId = 'powerweb'
      requireComponent.keys().forEach((res) => {
        const txt = res.substring(2)
        if (txt.indexOf('.vue') === -1) {
          arr.push(txt)
        }
        console.log(txt)
      })
      console.log(arr)
      // powerweb
      try {
        arr.forEach(async (item) => {
          const obj = {
            clientId: item,
            url: clientId
          }
          await routerPrepare(obj)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    // this.getLocation()
    const router = this.$route.path.substr(1) ? this.$route.path.substr(1) : 'HomePage'
    console.log(this.$route.query)
    this.token = '0f30a792-0af1-4bf3-b7c6-18cbc5f6d1b3'
    this.$store.commit('variable/setToken', this.token)
    sessionStorage.setItem('token', this.token)
    this.$router.push(`/${router}`)
    this.getInformation()
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/base.styl'
.home
  height 100%
  width 100%
  position relative
  overflow hidden
  background #f2f2f2
  .el-container
    width 100%
    height 100%
  .homeHeader
    height 70px !important
    width 100%
    padding 0 40px !important
    overflow hidden
    position relative
    background $background-color-Brand
  .homeContainer
    width 100%
    height 100%
    padding 10px 0
    box-sizing content-box
  .home-el-aside
    overflow hidden
    border 1px solid #c6c6c6
    border-radius 6px
    margin-left 6px
    background #fff
.homeCol
  height 100%
  width 100%
.HomeElmain
  padding-bottom 0
</style>
