<template>
  <div>
    <div class="container-fluid">
      <h1>Median</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            I don't know about you, but i've always wondered why we even care about the Median. It always seemed like another
            metric for measuring the  location of data. However through my research it turns out it's very handy!<br>
            The median is the middle number in a sorted list of data. If we have an even number of values in our data the
            median is taken as the average of the two values that divide the data set. For example in the set
            <vue-mathjax formula="\{2,4,8,10\}"></vue-mathjax> the median is taken as <vue-mathjax formula="\frac{8+4}{2} = 6"></vue-mathjax>.
            Notice that the mean isn't calculated by using all the values in the set, so how is can it be helpful? <br>
            As the mean looks at the center of sorted data it isn't influenced by outliers! Thus in some cases its a
            better estimate for location than using the mean, which is effected by outliers. <br>
            Take the average wage in a company for example. Using the mean the ridiculous wage of the CEO would influence
            the wage. If we used the median it wouldn't matter how much the CEO gets paid, the middle observation would be
            more or less the same.
          </p>
        </div>
      </div>
      <h1>Robustness</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The median is known as a robust estimate of location as it isn't influenced by outliers that could skew our results.
            An outlier is a data point that is very distant than others, this does not mean to say the valid is necessarily invalid
            erroneous however they are often the result of bad data. <br>
            When our data is riddled with outliers the mean will be a bad estimate of location, whereas the median will
            still be valid. <br>
            The mean isn't the only robust estimate. We often use the <router-link to="/statistics/mean"> trimmed mean</router-link>
            to avoid outliers too! It's often seen as a compromise between the mean and median as it's calculated by cutting off the top bottom and top % of the data
            then performing the mean
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: 'Median',
  mounted () {
    const mathjaxCdn = document.createElement('script')
    mathjaxCdn.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
    document.head.appendChild(mathjaxCdn)

    const mathjaxSettings = document.createElement('script')
    mathjaxSettings.textContent = 'MathJax.Hub.Config({\n' +
      '    tex2jax: {\n' +
      '      inlineMath: [[\'$\',\'$\'],[\'\\\\(\',\'\\\\)\']],\n' +
      '    }\n' +
      '  });'
    mathjaxSettings.type = 'text/x-mathjax-config'
    document.head.appendChild(mathjaxSettings)
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>
