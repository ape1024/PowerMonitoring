<template>
  <el-row>
    <el-col :span="24">
      <!-- router  加上 router 可以直接实现跳转
      不需要加click事件， router地址直接写到index里面即可-->
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu :key="item.id" v-for="item in submenuData" :index="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group :key="data.id" v-for="data in item.childArr">
            <el-menu-item :index="data.url">{{data.name}}</el-menu-item>
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
      console.log(val, 'val')
      this.defaultActive = val.name
    },
    authsData(data) {
      this.originalData = JSON.parse(JSON.stringify(data))
      this.submenuData = this.handleAuth(this.originalData)
      console.log(this.submenuData)
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
      if (key === 'HomePage') {
        this.defaultActive = 'HomePage'
      }
    },
    handleClose(key) {
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
          const obj = {
            routerId: item.routerId ? item.routerId : '',
            name: item.name,
            icon: item.icon,
            id: `${item.id}`,
            childArr: []
          }
          routers.forEach((val) => {
            if (Number(val.id) === Number(item.routerId)) {
              obj.id = val.url
            }
          })
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
    }
  },
  created() {
    console.log(this.$route.path.substr(1))
    this.defaultActive = this.$route.path.substr(1)
  }
};
</script>

<style scoped lang='stylus'>
.el-menu
  border none
</style>
