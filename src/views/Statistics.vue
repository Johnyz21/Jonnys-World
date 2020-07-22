<template>
  <div class="statistics/mean">
    <div class="container-fluid">
      <h1>Statistics</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
         <p>
           Welcome to my Statistics Journey! This section documents my journey into the land of guessing with confidence!
           I'll try and keep this page updated with my Journey of learning!
         </p>
        </div>
      </div>
      <h1>My Journey</h1>
      <hr>
      <h2>Estimates of Location</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>I started looking at getting a 'typical value' from a bunch of data. My beginings focused on looking at central
          tendencies of data</p>
        </div>
      </div>
      <div class="row justify-content-center align-self-center">
        <router-link to="/statistics/mean">Mean</router-link>
        <br>
      </div>
      <div class="row justify-content-center align-self-center p-3">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <h2>Estimates of Variability</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>I later looked at the spread/dispersion of data. How to measure it, reduce it and identify real from random
            variability
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-self-center">
        <router-link to="/statistics/deviations">Deviations</router-link>
        <br>
      </div>
      <div class="row justify-content-center align-self-center p-3">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <h2>Distributions</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>I later looked at the spread/dispersion of data. How to measure it, reduce it and identify real from random
            variablity
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-self-center">
        <router-link to="/statistics/sampling">Sampling</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
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
