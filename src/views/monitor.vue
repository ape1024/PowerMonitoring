<template>
  <div class>
    <Breadcrumb />
    <div class="TabControl">
      <TabControl />
    </div>
    <div class="TabControlTwo">
      <TabControl />
    </div>
    <!-- 主体内容 -->
    <monitorSubject />
  </div>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import TabControl from '../components/public/TabControl.vue'
import monitorSubject from '../components/monitor/monitorSubject.vue'

export default {
  name: 'monitor',
  components: {
    Breadcrumb,
    monitorSubject,
    TabControl
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() { }
};
</script>

<style scoped lang='stylus'>
.TabControl
  overflow hidden
  box-sizing content-box
  padding 10px 10px 0
.TabControlTwo
  overflow hidden
  box-sizing content-box
  padding 0 20px 10px
</style>
