<template>
  <div class="statistics/mean">
    <div class="container-fluid">
      <h1>Sampling</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-8 ">
          <p>
            To understand sampling we must first understand what a population is in statistics. A population is simply
            the set of entities we're interested in. For example, if we cared about the average house price in the world,
            our population would be the prices of Houses in the world. <br>
            In statistics we collect data from a population and study it. This study comprises of analysing the data we
            gather and then coming to some type of conclusion about it. Hence we use statistics to gain estimates
            about the population. <br>
            Let's think about the example above, how on Earth would we collect samples about every house price in the world? Getting
            that data would be a feat in itself but suppose we did. We'd have to keep adding/removing houses from our set
            in the event a new houses is created /destroyed. It would be an endless task and well, whose got time
            for that? So the question is, How can we gain inference on a population we can't record? Enter
            Sampling.
          </p>
        </div>
      </div>
      <h2>What is Sampling?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-8 ">
          <p>
            A sample is simply a subset of the population and we use it to estimate values to gain an understanding of the population. <br>
            In a sample we're interested in knowing the <strong>sample mean, confident intervals and calculating a best guess for the
            populations standard deviation</strong>. <br>
            We use the sample mean to guess the population mean. How will this help? Remember the sample is PART of the population. So the sample mean will be
            somewhat close to the mean of the population (by definition), we just need to find out how close it is!
            We do this by calculating a value called the standard error SE(X). The standard error can give us a confidence interval, so
            we can say something like 'The true population mean lies between (100,101)'. We can also do the same for the
            standard deviation. Let's explore this further. <br>
          </p>
        </div>
      </div>
      <div>
        <h2>Example of an infinite Population</h2>
        <div class="row justify-content-center">
          <div class="col-11 col-md-8 ">
            <p>
              Suppose we're trying to estimate the average height (in metres) of a footballer with the following sample
              <vue-mathjax formula="$ \{1.87,1.93,2.01,1.99 \} $"></vue-mathjax>. We have a sample size of
              <vue-mathjax formula="$ n = 4 $"></vue-mathjax> and a sample mean of
              <vue-mathjax formula="$ \bar x = 1.95m $"></vue-mathjax>. At the moment our best estimate for the
              population mean and the population standard deviation is our samples population and standard deviation. <br>
              You may be thinking 'The population of footballers isn't infinite', you're right! However it is large and
              erratic enough  so that we can treat it like one. <br>
              If we took another random sample of footballers we would get a different sample mean.
              So now we ask, how confident are we that our population mean height is 1.95m? How can we measure this
              uncertainty?
              To do this we use the standard error <vue-mathjax :formula=standard_error></vue-mathjax>, where s is the
              standard deviation of the sample. <br>
              To calculate the standard deviation of the population we use <vue-mathjax :formula=standard_deviation></vue-mathjax> (note
              the degrees of freedom is n-1). This gives us <vue-mathjax :formula=standard_deviation_example_value></vue-mathjax>. <br>
              Now we can calculate our standard error <vue-mathjax formula='$ SE(\bar x) = 0.03651483716701101m  $'></vue-mathjax>. <br>
              We can now use the Standard Error to say how sure we are that the true population mean lies between an interval. An interval
              two standard error terms away from the mean gives us 95% confidence
              <vue-mathjax formula='$ \bar x = \pm 2SE(\bar x)  $'></vue-mathjax>. Using this formula we can say we are 95% confident
              that the population mean lies between this in this confidence interval
              <vue-mathjax formula = '$ [1.95 - 0.07302967433402202, 1.95 + 0.07302967433402202] $'></vue-mathjax> <br>
              We've now got our important pieces of info: the mean of the sample, confidence interval and an estimate
              of the populations standard deviation (we use the sample standard deviation).
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Example of an Finite Population</h2>
        <div class="row justify-content-center">
          <div class="col-11 col-md-8 ">
            <p>
              Suppose we're trying to estimate the average height (in metres) of a 5v5 football team with the following sample
              <vue-mathjax formula="$ \{1.87,1.93,2.01,1.99 \} $"></vue-mathjax>. We have a sample size of
              <vue-mathjax formula="$ n = 4 $"></vue-mathjax> and a sample mean of
              <vue-mathjax formula="$ \bar x = 1.95m $"></vue-mathjax>. We also know the Population size <vue-mathjax formula="$ N = 5 $"></vue-mathjax>.
              Have a think, how confident are we that we have a good guess of our population mean from our sample mean? Think about it. We've
              pretty much got the entire population in our sample, so we should be fairly confident right?<br>

              Our confidence is now based  on the ratio between the amount of samples vs the size of our population. The
              closer the sample size is to the size of the population, the more confident we are.
              To calculate this we use a modified standard error  <vue-mathjax :formula=standard_error_true_formula></vue-mathjax>.
              However our formula for the standard deviation hasn't changed <vue-mathjax :formula=standard_deviation></vue-mathjax>.
              So we have a standard deviation of <vue-mathjax :formula=standard_deviation_example_value></vue-mathjax> and a standard error of
              <vue-mathjax formula='$ SE(\bar x) = 0.03651483716701101 \cdot \sqrt \frac{1}{4} = 0.02581988897471607 $'></vue-mathjax>. <br>
              Now we can calculate our confidence interval to conclude that we are 95% sure that the population mean lies in the interval
              <vue-mathjax formula = '$ [1.95 - 0.02581988897471607, 1.95 + 0.02581988897471607] $'></vue-mathjax>. <br>
              Notice how the standard error is less in this section than the last. We shouldn't be surprised because we
              have more information about the population here than in the last example.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Example of the Entire Population</h2>
        <div class="row justify-content-center">
          <div class="col-11 col-md-8 ">
            <p>
              Suppose we're trying to estimate the average height (in metres) of a 4v4 football team with the following sample
              <vue-mathjax formula="$ \{1.87,1.93,2.01,1.99 \} $"></vue-mathjax>. We have a sample size of
              <vue-mathjax formula="$ n = 4 $"></vue-mathjax> and a sample mean of
              <vue-mathjax formula="$ \bar x = 1.95m $"></vue-mathjax>. We also know the Population size <vue-mathjax formula="$ N = 4 $"></vue-mathjax>.
              We no longer need to estimate our population from our sample... because our sample IS our entire population!<br>
              We know our population mean is <vue-mathjax formula="$ \mu = 1.95m $"></vue-mathjax> and how confident are we about that?
              Ha well, trick question! We KNOW it to be true, we are 100% confident! Let's see if our formulas support this.
              We can see that the numerator of this formula will equal zero <vue-mathjax :formula=standard_error_true_formula></vue-mathjax>
              so we have a Standard Error of 0! This means we have a confidence interval only containing the number 1.95m meaning we're 100% confident! <br>
              The astute may be asking, Why did we use this version of the standard error when the formula is seemingly different for an infinite population?
              Well it's actually the same! When we're looking at the standard error for an infinite population we are essentially asking

              <vue-mathjax formula="$$ \lim_{N \to \infty}  SE(\bar x) = \lim_{N \to \infty} \frac{s}{\sqrt n} \sqrt \frac{N-n}{N-1} = \lim_{N \to \infty} \frac{s}{\sqrt n} \cdot  \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} =  \frac{s}{\sqrt n} \cdot  \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} $$"></vue-mathjax>
              where  <vue-mathjax formula="$ N > n > 1 $"></vue-mathjax>. <br>
              Focusing on limit <vue-mathjax formula="$ \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} $"></vue-mathjax>, we can find an lower limit such that
              <vue-mathjax formula="$$ \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} > lim_{N \to \infty} \sqrt \frac{N-n}{N-n} = 1 $$"></vue-mathjax>
              And a upper limit such that<vue-mathjax formula="$$ \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} = \lim_{N \to \infty} \sqrt \frac{N-n}{N} = \lim_{N \to \infty} \sqrt \frac{N}{N} - \lim_{N \to \infty} \sqrt \frac {n}{N} < 1 - \lim_{N \to \infty} \frac {1}{\sqrt N} = 1 $$"></vue-mathjax> <br>
              If we have an upper and lower bound of 1 we can say
              <vue-mathjax formula="$$ \lim_{N \to \infty} \sqrt \frac{N-n}{N-1} = 1 $$"></vue-mathjax>
              We therefore have  <vue-mathjax formula="$$ \lim_{N \to \infty}  SE(\bar x) = \frac{s}{\sqrt n}$$"></vue-mathjax>

            </p>
          </div>
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
      standard_error: '$ SE(\\bar x) = \\frac{s}{\\sqrt n} $',
      standard_error_true_formula: '$ SE(\\bar x) = \\frac{s}{\\sqrt n} \\sqrt \\frac{N-n}{N-1}$',
      standard_deviation: '$ s = \\sqrt {\\sum_{i=1}^n (x_i - \\bar x )^2 \\over n-1}$',
      standard_deviation_example_value: '$ s= 0.06324555320336747m $'
    }
  }
}
</script>

<style>
</style>
