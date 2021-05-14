<template>
  <el-row>
    <el-col :span="24">
      <!-- router  加上 router 可以直接实现跳转
      不需要加click事件， router地址直接写到index里面即可-->
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        router
        @select="handSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- <el-submenu :key="item.id" v-for="item in submenuData" :index="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <div v-if="item.childSwith">
            <el-menu-item-group :key="data.id" v-for="data in item.childArr">
              <el-menu-item :index="data.url">{{data.name}}</el-menu-item>
            </el-menu-item-group>
          </div>
        </el-submenu>-->

        <component
          class="menu-item"
          v-for="item in submenuData"
          :key="item.id"
          :index="item.id"
          :is="(item.childArr && item.childArr.length > 0) ? 'el-submenu':'el-menu-item'"
        >
          <template slot="title">
            <i :class="[item.icon]"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-if="item.childArr&&item.childArr.length>0">
            <el-menu-item
              class="menu-item"
              v-for="(v) in item.childArr"
              :key="v.url"
              :index="v.url"
            >
              <i :class="[v.icon]"></i>
              <span slot="title">{{v.name}}</span>
            </el-menu-item>
          </template>
        </component>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'NavMenu',
  components: {},
  props: ['authsData'],
  data() {
    return {
      defaultActive: '',
      originalData: {},
      submenuData: []
    };
  },
  computed: {},
  watch: {
    $route(val) {
      // $route 有两个参数 val 当前路由, old 上一个路由
      this.defaultActive = this.HandlingSpecial(val.name)
    },
    authsData(data) {
      this.originalData = JSON.parse(JSON.stringify(data))
      this.submenuData = this.handleAuth(this.originalData)
      this.$emit('auths', this.submenuData)
      console.log(this.submenuData)
    }
  },
  methods: {
    handSelect(index) {
      console.log(index, 'handSelect')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath, 'handleOpen')
      if (key === 'HomePage') {
        this.defaultActive = 'HomePage'
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, 'handleClose')
      if (key === 'HomePage') {
        this.defaultActive = 'HomePage'
      }
    },
    handleAuth(data) {
      const { menus } = data
      const { routers } = data
      const arr = []
      menus.forEach((item) => {
        if (!item.parentId) {
          let obj = {}
          let routerId = ''
          if (item.routerId) {
            routers.forEach((val) => {
              if (Number(val.id) === Number(item.routerId)) {
                routerId = val.url
              }
            })
          } else {
            routerId = item.id
          }
          obj = {
            routerId: item.routerId,
            name: item.name,
            icon: item.icon,
            id: `${routerId}`,
            childArr: []
          }
          arr.push(obj)
        }
      })
      arr.forEach((item) => {
        menus.forEach((val) => {
          if (Number(val.parentId) === Number(item.id)) {
            const obj = {
              name: val.name,
              routerId: val.routerId,
              id: val.id,
              createTime: val.createTime,
              url: ''
            }
            routers.forEach((routersVal) => {
              if (routersVal.id === val.routerId) {
                obj.url = routersVal.url
              }
            })
            item.childArr.push(obj)
          }
        })
      })
      return arr
    },
    HandlingSpecial(routeText) {
      let txt = ''
      if (routeText === 'meterManifestation') {
        txt = 'OnlineMeter'
      } else {
        txt = routeText
      }
      return txt
    }
  },
  created() {
    console.log(this.$route.path.substr(1))
    this.defaultActive = this.HandlingSpecial(this.$route.path.substr(1))
  }
};
</script>

<style scoped lang='stylus'>
.el-menu
  border none
</style>
