<template>
  <div class="statistics/mean">
    <h1>Mean</h1>
    <div>
      <vue-mathjax :formula="formula"></vue-mathjax>
    </div>
  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: 'HelloWorld',
  mounted () {
    const mathjaxCdn = document.createElement('script')
    mathjaxCdn.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
    document.head.appendChild(mathjaxCdn)
  },
  data () {
    return {
      // formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
      formula: '$$ \\bar x = {\\sum_{i=0}^N x_i \\over N}$$',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
