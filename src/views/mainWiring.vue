<template>
  <div class>
    <!-- 运行监视 -> 主接线图 -->
    <Breadcrumb />
    <div class="TabControl">
      <TabControl />
      <TabControl />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/public/Breadcrumb.vue'
import TabControl from '../components/mainWiring/TabControl.vue'

export default {
  name: 'MainWiring',
  components: {
    Breadcrumb,
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

<style scoped lang='stylus'></style>
