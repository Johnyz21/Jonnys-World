class StreamProcessor extends AudioWorkletProcessor {
  constructor () {
    super()
  }

  process (inputs, outputs, parameters) {
    // const input = inputs[0]
    // // const output = outputs[0]
    //
    // console.log('-----')
    // console.log(inputs[0])
    // console.log(input.length)
    // for (let channel = 0; channel < input.length; ++channel) {
    //   const inputChannel = input[channel]
    //   // const outputChannel = output[channel]
    //   // for (let i = 0; i < inputChannel.length; ++i) {
    //   //   outputChannel[i] = inputChannel[i]
    //   //   // console.log(inputChannel[i])
    //   // }
    //   // console.log(inputChannel)
    // }
    // console.log('-----')
    // console.log(inputs[0][0])
    this.port.postMessage({
      sample: inputs[0][0]
      // double_sample: this.Float32Concat(inputs[0][0], inputs[0][0])
    })
    return true
  }

  // Float32Concat (first, second) {
  //   var firstLength = first.length
  //   var result = new Float32Array(firstLength + second.length)
  //
  //   result.set(first)
  //   result.set(second, firstLength)
  //
  //   return result
  // }
}

registerProcessor('StreamProcessor', StreamProcessor)
