<template>
  <div>
    <div class="container-fluid">
      <h1>Deviations</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            Deviations are a measure of variability! It allows us to identify if data is tightly clustered or spread out.
            A Deviation is simply the difference between the observed data and an estimate of location (mean, median, mode etc.).
            They are also referred to as errors or residuals <br>
            For a data set <vue-mathjax formula="$ \{ 4,6,11\}$"></vue-mathjax> the mean is 7 and the median is 6. The deviations from the mean are the differences:
            <vue-mathjax formula="$ 4-7=-3, 6-7=-1, 11-7=4 $"></vue-mathjax>. The deviations from the median are the differences:
            <vue-mathjax formula="$ 4-6=-2, 6-6=0, 11-6=5 $"></vue-mathjax>. These deviations tell us how dispersed our data
            is around a central value. <br>
            One way to measure variability is to estimate a typical value for these deviations but how would we do that?
          </p>
        </div>
      </div>
      <h1>Mean Absolute Deviation</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The Mean Absolute Deviation looks at deviations centered around the mean. Because of how the mean is calculated,
            taking an average of the deviations from the data set above <vue-mathjax formula="$ \{-3,-1,4\} $"></vue-mathjax> would give us a value of 0! The negative deviations
            cancel out the positive deviations, so what should we do? If the positive deviations cancel out the negative deviations
            let's only use absolute values! Now we can calculate the average absolute value of the deviations. The absolute values of the deviations
            are <vue-mathjax formula="$ \{3,1,4\} $"></vue-mathjax> and the average value is <vue-mathjax formula="$ (3+1+4)/3= \frac{8}{3} $"></vue-mathjax>.
            This is called the Mean Absolute Deviation and is calculated with the formula:
            <vue-mathjax :formula=mean_absolute_deviation></vue-mathjax>
            where <vue-mathjax formula="$ \bar x $"></vue-mathjax> is the sample mean.
          </p>
        </div>
      </div>
      <h1>Variance</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The Variance is another measure of variability which is based on the squared deviations. The variance is just
            an average of the squared deviations given by:
            <vue-mathjax :formula=variance></vue-mathjax>
            The only issue with this is that it is not on the same scale as the original data as we're looking at squared
            values.
          </p>
        </div>
      </div>
      <h1>Standard Deviation</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The Standard deviation is the square root of the variance. It's easier to interpret than the variance as it
            is measured on the same scale as the original data. As it is constructed from the Variance, it is fundamentally
            based on squared deviations. The standard deviation is given by:
            <vue-mathjax :formula=standard_deviation></vue-mathjax>
          </p>
        </div>
      </div>
      <h1>Median Absolute Deviation</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            The Mean Absolute Deviation looks at deviations centered around the median. Why would we do this if we've already
            got the Mean Absolute Deviation? Well... the median is not sensitive to outliers and extreme values! The variance
            and the standard deviance are very sensitive as they're based on squared deviations. Like the median the Median
            absolute deviation is not influenced by extreme values. The Median Absolute Deviation is calculated as follows:
            <vue-mathjax :formula=median_absolute_deviation></vue-mathjax>
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
      mean_absolute_deviation: '$$ \\text{Mean Absolute Deviation} = \\frac{\\sum_{i=1}^n | x_i - \\bar x |}{n} $$',
      median_absolute_deviation: '$$ \\text{Median Absolute Deviation} = \\text{Median}(|x_1 - m|,|x_2-m|,...,|x_N-m|) $$',
      variance: '$$ s^2 = \\frac{\\sum_{i=1}^n ( x_i - \\bar x )^2}{n-1} $$',
      standard_deviation: '$$ s = \\sqrt{\\text{Variance}} $$'
    }
  }
}
</script>
<style lang="scss">

</style>
