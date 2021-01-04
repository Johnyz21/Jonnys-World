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
      <h2>What is Statistics?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            Statistics is all about <b>collecting</b>, <b>analysing</b> and <b> presenting numerical data! </b> Want to know
            something about data? Well then turn to stats! <br>
            There's two types of statistics. <b> Inferential statistics </b> and <b> Descriptive statistics. </b>
            Descriptive statistics is used to summarise and analyse data about a <b>population</b>. <b>Inferential statistics</b> is
            used to analyse  and summarise data about a <b>sample of our population</b>, we then use this inference to conclude
            information about our population. Confused? Let's make it a bit clearer <br>
            Suppose you collected information about 7 billion people in the world and you wanted to know the average
            height of women. We'd calculate the mean height of women (using descriptive statistics)... seems easy right? Wrong.
            You may of overlooked one thing.<br>
            How will we gather information about 7 billion people in the world? People are born and die to
            fast for us to ever count and collect that data. Peoples heights ALSO vary throughout life! There's no way to
            keep up with this.
            So how on Earth can we calculate statistics about our population if we can't gain the information
            about our population? <br>
            We can only collect data about part of our population and we can use that to infer statistical properties
            about the total population. This is inferential statistics. <br>
            We use inferential statistics if we are operating on a sample of our population. We use descriptive statistics
            when we are operating on our entire population.<br>
            There's different philosophies about how to do inferential statistics, both we merits and demerits. The two
            philosophies are called <b>Frequentist Statistics</b> and <b>Baysian Statistics</b>. <br>
            Both Baysians and Frequentist agree that Baysian methods are accurate if we know the true population. The
            difference lies in generating statistics based off a sample. <br>
            Baysians have an initial belief (in terms of probability, a prior) about a hypothesis, they then update their
            belief with data. Baysians conclude their inference in terms of subjective uncertainty. They can say
            things such as 'There is a 95% chance that x exists within a certain interval'<br>
            Frequentist don't have an initial belief. They use repeated samples of data to make predictions. Frequentists
            conclude information in terms of samples. They say things such as '95% of similar sized intervals from
            repeated samples of n will container x' <br>
            There's a great paper <a href="http://www-math.mit.edu/~dav/05.dir/class20-prep.pdf">here</a> on the differences
          </p>
        </div>
      </div>
      <h1>My Journey</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            The below details some of the notes during my journey to understand statistics. After i was comfortable
          with the below i moved to understanding <router-link to="/data-science">Data Science</router-link>
          </p>
        </div>
      </div>
      <hr>
      <h2>Estimates of Location</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p class="text-center">I started looking at getting a 'typical value' from a bunch of data. My beginnings focused on looking at central
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
      <div class="row justify-content-center align-self-center">
        <router-link to="/statistics/median">Median</router-link>
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
          <p class="text-center">I later looked at the spread/dispersion of data. How to measure it, reduce it and identify real from random
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
          <p class="text-center">I later looked at the spread/dispersion of data. How to measure it, reduce it and identify real from random
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
