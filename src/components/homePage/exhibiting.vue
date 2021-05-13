<template>
  <el-row>
    <el-col :span="24" class="exhibiting">
      <div class="exhibitingTitle" :style="{background: exhibitingMessage.color}">
        <i :class="exhibitingMessage.icon"></i>
        {{exhibitingMessage.title}}
      </div>
      <div class="exhibitingContent" :key="index" v-for="(item, index) in exhibitingData">
        <div class="exhibiting_left">{{item.key}}</div>
        <div class="exhibiting_right">
          <div class="exhibiting_number">{{item.value}}</div>
          <div class="exhibiting_unit">{{item.unit}}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'exhibiting',
  components: {},
  props: ['exhibitingMessage', 'exhibitingData'],
  data() {
    return {
      title: '啦啦啦',
      icon: 'el-icon-eleme',
      color: '#409EFF'
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.exhibitingTitle
  height 34px
  line-height 34px
  color $font-color-white
  text-align center
  font-size 20px
  border-radius 5px
  border-bottom-right-radius 0
  border-bottom-left-radius 0
  width 100%
.exhibitingContent
  font-size $font-size-Medium
  margin-top 6px
  display flex
  width 100%
  .exhibiting_left
    background-color #f2f2f2
    color #0068b8
    flex 1
    font-weight bold
    line-height 30px
    font-size $font-size-Base
    text-align center
  .exhibiting_right
    border-top 1px solid $border-color-three
    border-bottom 1px solid $border-color-three
    border-right 1px solid $border-color-three
    box-sizing content-box
    padding 4px 0
    flex 1
    display flex
    .exhibiting_number
      flex 1
      font-size $font-size-Base
      line-height 20px
      text-align center
      color $font-color-routine
    .exhibiting_unit
      width 40px
      font-size $font-size-Base
      line-height 20px
      font-size $font-size-Medium
      color $font-color-Brand
</style>
