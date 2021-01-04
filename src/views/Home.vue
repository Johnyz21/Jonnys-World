<template>
  <div class="home">
    <div class="container landing-img">
      <img alt="Jonnys world" class="img-fluid" src="../assets/landing_page_logo.jpg">
    </div>
    <TypeWriter txt="The life and times of a curious developer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TypeWriter from '@/components/TypeWriter.vue'

export default {
  name: 'Home',
  components: {
    TypeWriter
  }
}
</script>

<style lang="scss" scoped>
  .landing-img {
    max-width: 500px;
  }
</style>
