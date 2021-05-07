<template>
  <el-row>
    <el-col :span="24">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="北工大软件园A区配" name="first"></el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
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
