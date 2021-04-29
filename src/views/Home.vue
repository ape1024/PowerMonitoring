<template>
  <div class="home">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '../components/Navigation/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
<style lang="stylus">
@import '../assets/css/base.styl'
#app
  font-size $font-size-mini
  font-family Avenir, Helvetica, Arial, sans-serif
</style>
