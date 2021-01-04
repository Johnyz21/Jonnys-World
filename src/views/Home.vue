<template>
  <div class="home">
    <div class="container landing-img">
      <img alt="Vue logo" class="img-fluid" src="../assets/landing_page_logo.jpg">
    </div>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .landing-img {
    max-width: 500px;
  }
</style>
