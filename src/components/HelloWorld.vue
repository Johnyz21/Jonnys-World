<template>
  <div class="hello">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-10 col-md-10 col-lg-8">
              <h1>
                {{message}}
              </h1>
            </div>
        </div>
        <br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      i: 0,
      speed: 80,
      message: '',
      txt: 'The life and times of when a developer gets bored',
      typeWriter: function () {
        if (this.i < this.txt.length) {
          this.message += this.txt.charAt(this.i)
          this.i++
          setTimeout(() => this.typeWriter(), this.speed)
        }
      }
    }
  },
  created () {
    this.typeWriter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
