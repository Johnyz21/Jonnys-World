<template>
  <div>
    <div class="container-fluid">
      <h1>Sound</h1>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <p>
            Sound exists all around us! It simply vibrations in the air. Have a little hum now and feel your throat, you
            can feel the vibrations in your throat. This section will focus on how we represent sound digitally and how
            to manipulate it.
            Sound is a mechanical, longitudinal and pressure wave!
          </p>
          <h2>PCM</h2>
          <p>
            Pulse Code Modulation is just a way to digitally represent analog signals. While streaming audio (through a microphone) we take regular
            'snapshots' of the sound wave by recording its amplitude. These snapshots are referred to as samples. It's the process
            of converting continuous signals to digital signals.
            Below i've done just that! I've used the Web Audio API to show PCM in action. All that's happening below is
            that the samples are being graphed as soon as they're being made.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <small style="color: orangered">*Examples do not work on an iPhone, Safari or IE due to lack of support for Web Audio Api *</small>
        </div>
        <div class="col-11 col-md-10 ">
          <button v-on:click="startAudioStream">Record</button>
          <button v-on:click="stopAudioStream">Stop recording</button>
          <p>
          </p>
        </div>
        <div class="col-11 col-md-10">
          <h2>Oscilloscope (Voltage vs Time)</h2>
           <canvas id="oscilloscope" width="800px" ></canvas>
        </div>
        <div class="col-11 col-md-10">
          <h2>Frequency vs Time</h2>
          <p class="text-center">
            Frequencies from 0 to {{ sampleRate * 1/2 }}
          </p>
          <canvas id="frequencyTimeGraph" width="800px"></canvas>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <h2> Live Sample</h2>
          <p style="word-wrap: break-word">
            {{ streamingSample }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <h2>Discrete Fourier Transform</h2>
          <p>
            The fourier transform approximates a function in terms of a sum of sines and cosines. It's used to approximate a continuous
            function however in the land of computers nothing is really continuous! Everything's discrete so we'll focus on the Discrete
            Fourier Transform.
            You might ask why the heck would i need it? Well it's super handy for filtering out frequencies! Say we hear something we don't like.
            That something will have a specific frequency, if we identify what the frequency is we can simply strip it out by setting
            the coefficient of the sine and cosine that represent it equal to zero!
            Before we step through an example of how the discrete fourier transform works try this:
          </p>
          <ol class="text-left">
            <li>Click record above</li>
            <li>Play any song you like out loud</li>
            <li>Play a high frequency like this one at <a href="https://www.youtube.com/watch?v=rXu61z8yiMc">400HZ</a> </li>
            <li>Look at the oscilloscope graph above, notice how we can't see this annoying high pitch noise</li>
            <li>Look at the frequency graph above, notice (towards the left of the graph) the bar representing 400HZ stays stays constant</li>
            <li>Now imagine if we could strip that out!</li>
          </ol>
          <p>
            You may be thinking, how did we get the frequency graph? Well that's what we used the fourier transform for! <br>
            Let's look at the equation for the Discrete Fourier transform:
            <vue-mathjax :formula="dft_formula"></vue-mathjax>
            <vue-mathjax formula="$$\textbf{ F = D f }$$"></vue-mathjax>
            Where <vue-mathjax formula="$ F[N] $"></vue-mathjax> is the fourier transform for the sequence <vue-mathjax formula="$ f[N] $"></vue-mathjax>
            and <vue-mathjax formula="$ W=e^{ \frac{2\pi i}{N}}$"></vue-mathjax> <br>
            Looks like a lot but let's explain what everything means. <br>
            We've already seen <strong>f</strong>, this is the sample in columnar format. <strong>D</strong> is the DFT matrix and
            <strong>F </strong> is the DFT of the sample.
            <br>
            We've already looked at the input (<strong>f</strong>, sound represented digitally) and output (<strong>F</strong>, the frequency graph), now let's take a nose dive into understanding <strong>D</strong> <br>
            Firstly let's break down this W thing. W is what we call a complex number but more importantly it's a special kind which we
            call a root of unity. What's a root of unity? A root of unity is any complex number which, when raised to any positive
            power n equals 1. So aren't we just multiplying by a matrix of 1's? Nope! Remember complex numbers have real and imaginary parts
            and (using Eulers' Formula) we'll see the real parts relate to cosine waves and the imaginary parts relate to sine waves.<br>
            Using Eurlers formula we have:
            <vue-mathjax formula="$$ W=e^{ \frac{2\pi i}{N}}= cos(\frac{2\pi i}{N}) + isin(\frac{2\pi i}{N}) $$"></vue-mathjax>
            Now use the powers of your mind to substitute our newfound <strong>W</strong> into <strong>D</strong>, do you see how
            all we're doing is multiplying our samples by a bunch of sines and cosines? Awesome, now let's look at this roots of Unity business <br>
            Let's look at the definition of 1 in terms of sines, cosines and exponentials. Let N=-1 we can see that <vue-mathjax formula="$$ e^{2\pi i}= cos(2\pi i) + isin(2\pi i)=1 $$"></vue-mathjax>
            Now let's say we wanted to find all the roots of 1, for every integer k we can write
            <vue-mathjax formula="$$ 1^{\frac{k}{N}}=e^{ \frac{2\pi i k}{N}}= cos(\frac{2\pi i k}{N}) + isin(\frac{2\pi i k}{N}) = W^{k}$$"></vue-mathjax> <br>
            It should now be apparent that <strong>D</strong> is a matrix of roots of unities <strong>W</strong>, which we use to computer the fourier transform of <strong>f</strong> into <strong>F</strong>
<!--            <br>Suppose we have the following sample <br>-->
<!--            {{sample}}, so we have N={{ sample_length }}-->
<!--            {{ sample_head }}-->
<!--            {{dft_example}}-->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SoundProcessor from '../../classes/white-noise-processor.js'
import { VueMathjax } from 'vue-mathjax'
const math = require('mathjs')
// const a = math.complex(2, 3)
// console.log(math.exp(a))

export default {
  name: 'Sound',
  components: {
    'vue-mathjax': VueMathjax
  },
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
  methods: {
    createAudioContext: function () {
      if (typeof this.context !== 'undefined') {
        this.context = new AudioContext()
      }
    },
    startAudioStream: function () {
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(this.record)
    },
    stopAudioStream: function () {
      this.context.suspend()
      this.stream.getAudioTracks().forEach(function (track) {
        track.stop()
      })
    },
    record: function (stream) {
      this.stream = stream
      this.createAudioContext()
      this.sampleRate = this.context.sampleRate
      this.context.audioWorklet.addModule('processors/StreamProcessor.js').then(() => {
        const streamProcessorNode = new AudioWorkletNode(this.context, 'StreamProcessor')
        const source = this.context.createMediaStreamSource(stream)
        const analyser = this.context.createAnalyser()

        streamProcessorNode.connect(this.context.destination)
        source.connect(analyser)
        source.connect(streamProcessorNode)
        analyser.fftSize = 2048

        streamProcessorNode.port.onmessage = (event) => {
          this.streamingSample = event.data.sample
        }
        this.drawOscilloscope(analyser)
        this.drawFrequencyBarGraph(analyser)
      }).catch(e => console.log(e + 'ERROR---'))
    },
    drawOscilloscope: function (analyser) {
      var bufferLength = analyser.frequencyBinCount
      var dataArray = new Uint8Array(bufferLength)
      var canvas = document.getElementById('oscilloscope')
      var ctx = canvas.getContext('2d')

      var WIDTH = canvas.width
      var HEIGHT = canvas.height

      function draw () {
        requestAnimationFrame(draw)
        analyser.getByteTimeDomainData(dataArray)
        // console.log(dataArray)
        ctx.fillStyle = 'rgb(200, 200, 200)'
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
        ctx.lineWidth = 2
        ctx.strokeStyle = 'rgb(0, 0, 0)'
        ctx.beginPath()
        var sliceWidth = WIDTH * 1.0 / bufferLength
        var x = 0
        for (var i = 0; i < bufferLength; i++) {
          var v = dataArray[i] / 128.0
          var y = v * HEIGHT / 2

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
          x += sliceWidth
        }
        ctx.lineTo(canvas.width, canvas.height / 2)
        ctx.stroke()
      }
      draw()
    },
    drawFrequencyBarGraph: function (analyser) {
      var bufferLength = analyser.frequencyBinCount
      var dataArray = new Uint8Array(bufferLength)

      var canvas = document.getElementById('frequencyTimeGraph')
      var ctx = canvas.getContext('2d')

      var WIDTH = canvas.width
      var HEIGHT = canvas.height
      canvas.height = HEIGHT
      canvas.width = WIDTH
      function draw () {
        requestAnimationFrame(draw)

        analyser.getByteFrequencyData(dataArray)
        ctx.fillStyle = 'rgb(0, 0, 0)'
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
        var barWidth = (WIDTH / bufferLength) * 2.5
        var barHeight
        var x = 0
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i]

          ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)'
          ctx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight)

          x += barWidth + 1
        }
      }
      draw()
    }
  },
  computed: {
    sample_length: function () {
      return this.sample.length
    },
    dft_head: function () {
      return this.dft_matrix.subset(math.index(4, 4))
    },
    dft_example: function () {
      return math.multiply(this.sample, this.dft_matrix)
    }
  },
  created: function () {
    var w = math.exp(math.divide(math.multiply(2, math.pi, math.i), this.sample.length))
    this.w = w
    this.dft_matrix = math.ones(this.sample.length, this.sample.length).map(function (value, index, matrix) {
      return w.pow(math.multiply(index[0] - 1, index[1] - 1))
    })
    this.columnar_sample = math.transpose(math.matrix(this.sample))
  },
  data () {
    return {
      context: '',
      sampleRate: '',
      stream: '',
      streamingSample: '',
      sample: [-0.04622797667980194, -0.11583438515663147,
        0.18100140988826752, 0.23719137907028198, 0.24722878634929657, 0.23699255287647247],
      w: '',
      dft_matrix: [],
      columnar_sample: [],
      dft_formula: '$$' +
        '    \\begin{pmatrix}' +
        '    F[0] \\\\' +
        '    F[1] \\\\' +
        '    F[2] \\\\' +
        '    \\vdots \\\\' +
        '    F[N-1] \\\\' +
        '    \\end{pmatrix}' +
        '     = ' +
        '    \\begin{pmatrix}' +
        '    1 & 1 & 1 & 1 & ... & 1\\\\' +
        '    1 & W & W^2 & W^3 & ... & W^{N-1}\\\\' +
        '    1 & W^2 & W^4 & W^6 & ... & W^{N-2} \\\\' +
        '    1 & W^3 & W^6 & W^9 & ... & W^{N-3} \\\\' +
        '    \\vdots & \\vdots & \\vdots & \\vdots & & \\vdots \\\\' +
        '    1 & W^{N-1} & W^{N-2} & W^{N-3} & ... & W \\\\' +
        '    \\end{pmatrix}' +
        '    \\begin{pmatrix}' +
        '    f[0] \\\\' +
        '    f[1] \\\\' +
        '    f[2] \\\\' +
        '    \\vdots \\\\' +
        '    f[N-1] \\\\' +
        '    \\end{pmatrix}' +
        '$$'
    }
  }
}
</script>
<style lang="scss">
  canvas {
    width: 100%;
    height: auto;
  }
</style>
