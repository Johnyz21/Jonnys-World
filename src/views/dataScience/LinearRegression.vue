<template>
  <div class="statistics/mean">
    <div class="container-fluid">
      <h1>Linear Regression</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            We use linear regression when we assume there is a linear relationship between a set of inputs <vue-mathjax formula="$ X^T=(X_1,X_2,...,X_p) $"></vue-mathjax>,
            and a real-valued output we want to predict, <strong>Y</strong>. Linear regression is great for giving us an interoperable prediction of how inputs effect outputs.
            Mathematically we can write this linear relationship as:
            <vue-mathjax formula="$$ f(X) = \beta_0 + {\sum_{j=1}^p X_j \cdot \beta_j }  $$"></vue-mathjax>
            where <vue-mathjax formula="$ \beta_j's$"></vue-mathjax> are unknown parameters or coefficients, and the variables <vue-mathjax formula="$ X_j $"></vue-mathjax> can come from
            different sources such as: qualitiative inputs, transformations of these inputs (squaring, logging etc.), a combination of other inputs (e.g. <vue-mathjax formula="$ X_3=X_2^2+X_1 $"></vue-mathjax>). <br>
            It's also super useful to write the above equation in matrix notation by including the constant 1 in
            X, and <vue-mathjax formula="$ \beta_0 $"></vue-mathjax> in the coefficients of <vue-mathjax formula="$ \beta $"></vue-mathjax>. Thus we can write the model in vector form as an inner product:
            <vue-mathjax formula="$$ \hat Y = X^T \beta $$"></vue-mathjax>
            <small>Note the term <vue-mathjax formula="$ \beta_0 $"></vue-mathjax> is known as the intercept or bias.</small> <br>
            In order to make our predictions for <vue-mathjax formula="$ \hat Y $"></vue-mathjax> we must find <vue-mathjax formula="$ \beta $"></vue-mathjax>. Therefore our goal is in Linear Regression is to find the matrix <vue-mathjax formula="$ \beta $"></vue-mathjax>
          </p>
        </div>
      </div>
      <br>
      <h2>I have the equation, now what?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            It's all well and good we have a nice equation but let's face it. Up until this point we don't really know the
            idea behind linear regression! To truly understand it let's put Maths' aside for a moment and think about a process of plotting a line (or hyperplane) of best fit.
            Imagine your data is plotted on a graph. Wouldn't it be great if we could draw a random line/hyperplane of best fit through our data? Great but how do we know if the line/hyperplane we drew fits the data the best? We would want to find a way to record how poorly our line/hyperplane fits our data,
            then adjust our it to make it better fit our plot (i.e. reducing the error)? Well that's exactly the thought pattern that goes behind what we're going to do! There are many techniques that look at solving this but i'll focus on RSS
            <br>
            With this in mind we can express the maths side in more detail.
            Our aim is to find a linear relationship within our set of inputs to produce an output. We typically separate our Data into Test and Training sets.
            We use the training data <vue-mathjax formula="$ (x_1,y_1)...(x_N,y_N) $"></vue-mathjax>
            to estimate the parameters <vue-mathjax formula="$ \beta $"></vue-mathjax> where each <vue-mathjax formula="$ x_i = {(x_{i1},x_{i2},...,x_{ip})}^T $"></vue-mathjax> is a vector of
            feature measurements for the ith case. (Notice how our training data is supervised, it comprises of input output pairs).<br>
          </p>
        </div>
      </div>
      <h2>Before we get started</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            Remember maths is just a way of conceptualising our thoughts! Don't get too bogged down in it, if you don't care about the proof just skip to the last equation. However if you're as inquisitive as I, here's
            a list of key definitions which will be referred to unless otherwise stated:
          </p>
          <ul class="text-left">
            <li>p is the number of predictors</li>
            <li> <vue-mathjax formula="$\hat Y$"></vue-mathjax> is a K-vector of predictions</li>
            <li>In the (p+1)-dimensional space. <vue-mathjax formula="$ (X,\hat Y)$ "></vue-mathjax> represents a hyperplane. (e.g. If p was 1, we'd be in 2D and the hyperplane would be a line)</li>
            <ul>
              <li>Using our first equation <vue-mathjax formula="$ f(X) $"></vue-mathjax>, <vue-mathjax formula="$ (X,\hat Y) $"></vue-mathjax> is an affine set cutting the Y-Axis at <vue-mathjax formula="$ (0,\beta_0) $"></vue-mathjax> </li>
              <li>Using our matrix equation for Linear Regression, as the constant <vue-mathjax formula="$ X $"></vue-mathjax> is included in the hyperplane. The hyperplane <vue-mathjax formula="$ (X,\hat Y) $"></vue-mathjax> includes the origin and is a subspace of (p+1)-dimensional space.</li>
            </ul>
          </ul>
        </div>
      </div>
      <br>
      <h2>RSS (Residual Sum of Squares)</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
<!--          The thought pattern which goes behind RSS is reducing the error between an actual value and our predicted value.-->
          <p>
            RSS is all about calculating the average lack of fit (a measure of variance for our regression). It does this by calculating the difference between between an actual value and its predicted value. We can write this mathematically as
            <vue-mathjax formula="$$ RSS = \sum_{i=1}^{N} (y_i-f(x_i))^2 $$"></vue-mathjax>
            here <vue-mathjax formula="$ y_i - \hat y_i = e_i $"></vue-mathjax> is the <i>i</i>th error term which is squared to handle negative values. Another way to view the RSS is:
            <vue-mathjax formula="$$ RSS = \sum_{i=1}^{N} e_i^2 $$"></vue-mathjax>
            Cool so now we've got error terms from the RSS, let's look at how to reduce them!
          </p>
        </div>
      </div>
      <h2>Multiple Least Squares Regression</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10 ">
          <p>
            This technique is all about trying to reduce the error terms <vue-mathjax formula="$ e_i $"></vue-mathjax> as much as possible in order to get a value for <vue-mathjax formula="$ \beta $"></vue-mathjax> in our Linear Regression equation.
            This technique minimises the RSS. <br>
            Let <strong> X be the N x (p+1) matrix, with each row an input vector (with a 1 in the first position), and let y be the N-vector of outputs in the training set.</strong> We can rewrite the Residual Sum of Squares as:
            <vue-mathjax formula="$$ RSS = (y - X\beta)^T(y-X\beta)$$"></vue-mathjax>
            Which is a quadratic function in the p + 1 parameters. Now think about your calculus days, we're trying to reduce the RSS. This means we're trying to find the point where
            the rate of change is at its minimum, think about what tool we could use. Thought of it? Great! We use differentiation!
            When we differentiate RSS with respect to <vue-mathjax formula="$ \beta $"></vue-mathjax> we get:
            <vue-mathjax formula="$$ \frac{dRSS}{d\beta} = -2X^T(y-X\beta) $$"></vue-mathjax>
            Now what else must we know? Well let's see what we have. Looking at the RSS equation we have two unknowns: <vue-mathjax formula="$ \beta $"></vue-mathjax> and <vue-mathjax formula="$ \beta^T $"></vue-mathjax>.
            In order to find the minimum point we've got to find out our rate of change for both our unknowns then minimise it.
            If the rate of change for both of our unknowns is positive then the minimum point occurs when the derivative of one is zero! (Picture a bowl and it's minimum point) <br>
            <strong>To do this we are going to assume one thing: </strong>
            <br> <strong>X must have full column rank</strong>. (Which means the no. of vectors in the basis of X is p+1)
            What does this mean? X is linearly independent! Why is this useful?This means we allows us to say <vue-mathjax formula="$ X^TX > 0$"></vue-mathjax> (positive definite which you'll see below).
            <br>
            Let's differentiate with respect to <vue-mathjax formula="$ \beta^T$"></vue-mathjax> <br>
            <vue-mathjax formula="$$ \frac{d^2RSS}{d\beta d\beta^T} = 2X^TX $$"></vue-mathjax> <br>
            Now how do we determine that our the rate of change of our unknowns is strictly positive? Well the values
            <vue-mathjax formula="$ X^TX $"></vue-mathjax> are <strong> positive definite</strong>.This means we can guarantee that every value in that matrix is a positive value! Theres a great video <a href="https://www.youtube.com/watch?v=bp38BKP-xh4">here</a> here explaining why <br>
            Thus we can conclude that if we find where our derivative is 0 we can find the minimum point.
            <vue-mathjax formula="$$ 0 = X^T(y-X\beta) $$"></vue-mathjax>
            <vue-mathjax formula="$$ 0 = X^Ty-X^TX\beta $$"></vue-mathjax>
            <vue-mathjax formula="$$ X^TX\beta = X^Ty $$"></vue-mathjax>
            <vue-mathjax formula="$$ \beta = {(X^TX)}^{-1}X^Ty $$"></vue-mathjax>
            Therefore we have the values we needed for the beta matrix! And we've solved our linear regression problem!
            <vue-mathjax formula="$$ \hat Y = X^T \beta = X{(X^TX)}^{-1}X^Ty $$"></vue-mathjax>
            Or have we? In the real world we can't make the assumption that X has full column rank. Therefore our matrix <vue-mathjax formula="$ X^TX $"></vue-mathjax> is not positive definite, as we can only assume that
            <vue-mathjax formula="$ X^TX \ge 0$"></vue-mathjax>. So what do we do? <br>
            In the real world most algorithms detect if X is linearly dependant. If it is they rewrite X or simply drop the linearly dependent columns. <br>
          </p>
        </div>
      </div>
      <h2>We're done right?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            Wrong. What's to say that another sample set of data would give us the same <vue-mathjax formula="$ \beta $"></vue-mathjax> values?
            We could have hundreds of different samples, each giving us a different <vue-mathjax formula="$ \beta $"></vue-mathjax> values. So we've got to
            create a confidence interval for our <vue-mathjax formula="$ \beta $"></vue-mathjax>'s. <br>
            We've assumed a lot throughout this whole process. We've assumed
          </p>
          <ul class="text-left">
            <li>Linearity</li>
            <li>Constant variance</li>
            <li>Independent error terms</li>
            <li>Normal Errors</li>
            <li>No multi-colinearity</li>
            <li>Exogenity</li>
          </ul>
          <p>
            I may cover these later but i feel like this should be enough to get you going!
          </p>
        </div>
      </div>
      <h2>We've got the coefficients, but is there really a relationship between Y and every feature?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            All this time we've assumed our features have a relationship. But what if none of them do?
            What if <vue-mathjax formula="$ \beta_0=\beta_1=...=\beta_j=0 $"></vue-mathjax>?
            To test if the coefficients of ALL the dummy variables can all be set to zero we use create a null hypothesis test where we use the F statistic! <br>
            To understand the intuition behind F statistic we need to understand a few things: <br>
            An unbiased estimate for the variance <vue-mathjax formula="$ \sigma^2$"></vue-mathjax> we use the formula
            <vue-mathjax formula="$$ \sigma^2 = \frac{1}{N - p - 1} \sum_{i=1}^N (y_i - \hat y_i)^2 $$"></vue-mathjax>
            where <vue-mathjax formula="$ N-P-1$"></vue-mathjax> represents the degrees of freedom. <br>
            The RSS is a measurement which tells us the amount of <strong>variance which is not explained</strong> by the regression.
            <vue-mathjax formula="$$ RSS = \sum_{i=1}^{N} (y_i-\hat y_i)^2 $$"></vue-mathjax>
            The TSS is a measure which tells us the total amount of <strong>variance in the data set before</strong> regression.
            <vue-mathjax formula="$$ TSS = \sum_{i=1}^{N} (y_i-\bar y)^2 $$"></vue-mathjax>
            Therefore TSS-RSS tells us the amount of <strong>variance explained by the regression.</strong> <br>
            Now how could this be helpful? Have a little think about what we're doing. Variance is the measure of the spread of data. Currently we have a measure for the spread
            of our data before and after we plot our least squares regression. Now remember what least squares regression does. We try to reduce our reduce our error terms given by the RSS,
            by doing this we also reduce our spread of data from the mean! What does this mean? Well all along we've essentially plotted a line/plane in an attempt to reduce our variance! Don't believe me? Have another lookat the equations
            aforementioned till this clicks. <br>
            With this knowledge at hand, if we were to compare the <strong>variance explained by the regression</strong> and the <strong>variance which is not explained</strong>
            what would we expect to get? Assuming there is NO relationship between the response and the predictors we'd expect these values to be fairly similar.
            However if there is a relationship we would expect the variance explained by the regression to be much higher than the variance which is not explained by the regression.
            So essentially we want to understand the result of <vue-mathjax formula="$ \frac{ \text{variance explained by the regression}}{ \text{variance which is not explained by the regression}}$"></vue-mathjax> <br>
            Now let's do some math to show this! <br>
            We assume the correct model is linear. We assume the deviations of Y are gaussian (normally distributed) and additive,
            <vue-mathjax formula="$ \epsilon \sim N(0,\sigma^2) $"></vue-mathjax>. Our null hypothesis is,
            <vue-mathjax formula=" $$ H_0 : \beta_0=\beta_1=...=\beta_j=0 $$ "></vue-mathjax>
            versus our alternative
            <vue-mathjax formula=" $$ H_a : \text{At least one } \beta_j \text{ is zero} $$ "></vue-mathjax>
            We perform the hypothesis test by computing the F statistic
            <vue-mathjax formula="$$ F = \frac{(TSS - RSS)/p}{RSS/(n-p-1)} $$"></vue-mathjax>
            Thus we can show that
            <vue-mathjax formula="$$ E\{RSS/(n-p-1)\}  = \sigma^2 $$"></vue-mathjax>
            and provided <vue-mathjax formula="$ H_0 $"></vue-mathjax> is true
            <vue-mathjax formula="$$ E\{(TSS-RSS)/(n-p-1 - (n - 1))\}  = E\{(TSS-RSS)/p\} = \sigma^2 $$"></vue-mathjax>
            Hence when there is no relationship between the response and predictor we would expect the F-statistic to take on a value close to 1 (variance explained by the regression <vue-mathjax formula="$ \approx $"></vue-mathjax>  variance which is not explained). However if
            <vue-mathjax formula="$ H_a $"></vue-mathjax> is true then  <vue-mathjax formula="$ E\{(TSS-RSS)/p\} > \sigma^2 $"></vue-mathjax> (variance explained by the regression >  variance which is not explained)
            so we expect F to be greater than 1.
          </p>
        </div>
      </div>
      <h2> Just about how accurate is our model?</h2>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            Remember the TSS-RSS from the previous section? We can express this as a more meaningful
            value, as a fraction between 0 and 1. This actually has a special name called the <vue-mathjax formula="$ R^2 $"></vue-mathjax> statistic.
            <vue-mathjax formula="$$ R^2 = \frac{TSS-RSS}{TSS} = 1 - \frac{RSS}{TSS} $$"></vue-mathjax>
            An <vue-mathjax formula="$ R^2 $"></vue-mathjax> statistic close to 1 tells us that a large proportion of the variability in the response
            has been explained by the regression. A number near 0 indicates that the regression didn't explain much of the variability. <br>
            Don't let this fool you, it's hard to know what a good <vue-mathjax formula="$ R^2 $"></vue-mathjax> is! Remember we've assumed the true relationship is linear
            model, but what if it isn't? If that's the case we would expect our residual errors to be bigger. If the residual errors are bigger then our
            RSS will also be bigger so our value for <vue-mathjax formula="$ R^2 $"></vue-mathjax> will be smaller! Thus for a relationship that isn't
            truly linear we would expect a small <vue-mathjax formula="$ R^2 $"></vue-mathjax> value as only a small proportion of the variance in Y is explained by the predictors, X. <br>
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
