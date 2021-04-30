<template>
  <div class>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="北工大软件园A区配" name="first"></el-tab-pane>
      <el-tab-pane label="北工大软件园B区配" name="second"></el-tab-pane>
      <el-tab-pane label="北工大软件园C区配" name="third"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  components: {},
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClick() {
      console.log(this.activeName)
    }
  },
  created() { }
};
</script>

<style scoped lang='stylus'></style>
