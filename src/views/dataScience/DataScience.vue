<template>
  <div>
    <div class="container-fluid">
      <h1>Data Science</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            Welcome to my Data Science Journey! This section documents my journey into the land of all things Data Science!
            It's a mixture of statistics, linear algebra, programming and domain knowledge. I've tried to cover all i can
            (i can't cover domain knowledge, that's on you!)
            I'll try and keep this page updated with my Journey of learning!
          </p>
        </div>
      </div>
      <h1>My Journey</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            To me Data Science is all about assuming there's relationship between a qualitative response <vue-mathjax formula="$ Y $"></vue-mathjax> and a set of p predictors
            <vue-mathjax formula="$ X = (X_1,X_2,...,X_p)$"></vue-mathjax>. We can write this as
            <vue-mathjax formula="$$ Y = f(x) + \epsilon $$"></vue-mathjax> where f is just a function of <vue-mathjax formula="$ X = (X_1,X_2,...,X_p)$"></vue-mathjax>
            and <vue-mathjax formula="$ \epsilon $"></vue-mathjax> is an error term as we assume we don't have perfect predictors. <br>
            The crux of Data Science seems to be trying and get a 'best guess' for our prediction. We tend to choose methods depending on our use case,
            if we wan't to know what values of <vue-mathjax formula="$ X_p's$"></vue-mathjax> are related to <vue-mathjax formula="$ Y $"></vue-mathjax> we tend to lean towards
            interporable techniques however if all we care about is a prediction, we would tend to lean towards using flexible techniques for a function <vue-mathjax formula="$ f(x) $"></vue-mathjax>.
          </p>
        </div>
      </div>
      <hr>
      <h1>Supervised Learning techniques</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p class="text-center">I started looking at linear estimations for predicting a qualitative response.</p>
        </div>
      </div>
      <div class="row justify-content-center align-self-center">
        <router-link to="/data-science/linear-regression">Linear Regression</router-link>
        <br>
      </div>
      <div class="row justify-content-center align-self-center p-3">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
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
  name: 'Linear Regression',
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
  }
}
</script>
<style lang="scss" scoped>
  a {
    font-weight: bold;
    color: #DB995A;

  }
  .arrow span{
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #654236;
    border-right: 5px solid #654236;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 15s infinite;
  }
  .arrow span:nth-child(2){
    animation-delay: -0.5s;
  }
  .arrow span:nth-child(3){
    animation-delay: -1s;
  }
  @keyframes animate {
    0%{
      opacity: 0;
      transform: rotate(45deg) translate(-10px,-10px);
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: rotate(45deg) translate(5px,5px);
    }
  }
</style>
