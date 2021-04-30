<template>
  <div class="exhibiting">
    <div class="exhibitingTitle" :style="{background: color}">
      <i :class="icon"></i>
      {{title}}
    </div>
    <div class="exhibitingContent">
      <div class="exhibiting_left">总容量</div>
      <div class="exhibiting_right">
        <div class="exhibiting_number">10400</div>
        <div class="exhibiting_unit">kVA</div>
      </div>
    </div>
    <div class="exhibitingContent">
      <div class="exhibiting_left">总容量</div>
      <div class="exhibiting_right">
        <div class="exhibiting_number">10400</div>
        <div class="exhibiting_unit">kVA</div>
      </div>
    </div>
    <div class="exhibitingContent">
      <div class="exhibiting_left">总容量</div>
      <div class="exhibiting_right">
        <div class="exhibiting_number">10400</div>
        <div class="exhibiting_unit">kVA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exhibiting',
  components: {},
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
  height 35px
  line-height 35px
  color $font-color-white
  text-align center
  font-size $font-size-large
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
    padding 4px 0
    background-color $background-color-Info
    flex 1
    font-size $font-size-Medium
    color $font-color-white
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
      text-align center
      color $font-color-routine
    .exhibiting_unit
      width 40px
      font-size $font-size-Medium
      color $font-color-Brand
</style>
