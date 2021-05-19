<template>
  <el-row class="homepageElrow">
    <!-- 首  页 -->
    <el-col :span="24" class="homepageElcol">
      <!-- 页卡 -->
      <Breadcrumb :breadcrumbData="breadcrumbData" />
      <!-- 基础信息 -->
      <el-row :gutter="20" class="InformationSubject">
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting :exhibitingMessage="exhibitingMessage" :exhibitingData="exhibitingData" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting :exhibitingMessage="exhibitingMessage" :exhibitingData="exhibitingData" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting :exhibitingMessage="exhibitingMessage" :exhibitingData="exhibitingData" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple InformationBox">
            <exhibiting :exhibitingMessage="exhibitingMessage" :exhibitingData="exhibitingData" />
          </div>
        </el-col>
      </el-row>
      <!-- 日负荷情况 -->
      <div class="loadCondition">
        <overburden />
      </div>
      <div class="loadCondition">
        <electricity />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import exhibiting from '../components/homePage/exhibiting.vue'
import overburden from '../components/homePage/overburden.vue'
import electricity from '../components/homePage/electricity.vue'

export default {
  name: 'HomePage',
  components: {
    Breadcrumb,
    exhibiting,
    overburden,
    electricity
  },
  data() {
    return {
      exhibitingData: {},
      exhibitingMessage: {},
      breadcrumbData: ''
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.breadcrumbData = '首页'
    this.exhibitingMessage = {
      title: '基本信息',
      icon: 'el-icon-document',
      color: '#00a1e8'
    }
    this.exhibitingData = [
      {
        key: '配电室',
        value: '3',
        unit: '个'
      }, {
        key: '变压器',
        value: '3',
        unit: '座'
      }, {
        key: '总容量',
        value: '1033',
        unit: 'kVA'
      }
    ]
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/base.styl'
.homepageElrow
  height 100%
  background #f2f2f2
.homepageElcol
  padding 6px
  height 100%
  box-sizing border-box
  Allborder()
  background $background-color-White
.InformationSubject
  margin 6px 0
  position relative
  overflow hidden
.InformationBox
  overflow hidden
  width 100%
  box-sizing border-box
.loadCondition
  overflow hidden
  position relative
  Allborder()
  width 100%
  margin-top 6px
</style>
