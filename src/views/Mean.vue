<template>
  <div class="statistics/mean">
    <div class="container-fluid">
      <h1>Mean</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            Thought there was just one mean? Well you thought wrong! There are several types of means all with their own use case!
            The mean is simply a measure of location, we use it to get a typical value! It's just a estimate of where most
            of the data is located
          </p>
        </div>
      </div>
      <br>
      <h2>Population Mean</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The standard one we all know and love.The mean is an average value. It's simply the sum of all numbers divided by how many their are.
            Consider the following set of numbers {9,5,2,11}. The mean is 9 + 5 + 2 + 11 / 4 = 18.75. The formula to
            calculate the mean for a set of n values <vue-mathjax :formula="x_values"></vue-mathjax> is:
            <vue-mathjax :formula="mean"></vue-mathjax>
          </p>
        </div>
      </div>
      <h2>Trimmed Mean</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The mean sounds great, but imagine we had some outliers. Consider the set {3,5,4,6,7,8,9,1000,2,1} where
            each value represents a judge's rating in a dance competition. We can clearly see one of the judges is biased,
            so would a mean score of 104.5 seem fair? Wouldn't it be great if we could get rid of outliers? <br> <br>
            A variation of the mean is called the trimmed mean which is calculated by sorting the set, then dropping a
            fixed amount of numbers from either end. Let <vue-mathjax :formula="x_values"></vue-mathjax> represent the
            sorted values where <vue-mathjax formula="$ x_1 $"></vue-mathjax> is the smallest and
            <vue-mathjax formula="$ x_n $"></vue-mathjax> is the largest, the formula for the trimmed mean is:
            <vue-mathjax :formula="trimmed_mean"></vue-mathjax>
            Using the trimmed mean on our previous data set where p=1, we get a value of 5.5 which is a less biased score
          </p>
        </div>
      </div>
      <h2>Weighted Mean</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            Another mean?! Why? Well the weighted mean is used when specific values have more 'weight' to them. Confused?
            An example should help remedy that confusion. <br>
            Imagine a tennis match has just taken place and several pundits' have commented on the match. Let's say the
            first two pundits' are ex-professional players, the next two were county players and the final two don't even
            know the game (they're here for a pay cheque). Do you think each of pundits reviews on the game should be
            equal / bear the same weight ? Neither do. Thus we add weights! Let's say the scores of the pundits' are
            {8,8,6,6,3,2} and the weight for each pundit is {4,4,2,2,1,1} our weighted mean is
            <vue-mathjax :formula="weighted_mean_example"></vue-mathjax> as opposed to a population mean
            of 5.5. The formula for the weighted mean is: <vue-mathjax :formula="weighted_mean"></vue-mathjax>
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
  name: 'HelloWorld',
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
      x_values: '$ x_1, x_2,.. x_n $',
      mean: '$$ \\bar x = {\\sum_{i=1}^n x_i \\over n}$$',
      trimmed_mean: '$$ \\bar x = {\\sum_{i=p+1}^{n-p} x_i \\over n-2p}$$',
      weighted_mean_example: '$ {(8x4)+(8x4)+(6x2)+(6x2)+(3x2)+(2x1) \\over 14 }=6.8 $',
      weighted_mean: '$$ \\bar x = {\\sum_{i=1}^{n} w_i n_i \\over \\sum_{i=1}^{n} w_i}$$'
    }
  }
}
</script>
