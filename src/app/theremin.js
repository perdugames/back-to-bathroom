import {getCanvas} from './engine-wrapper'

export default function AudioCanvasTheremin() {
  const canvas = getCanvas()
  let context = new AudioContext(),
    gainNode = context.createGain(),
    oscillator = null
  
  gainNode.connect(context.destination)
  
  let calculateFrequency = function(x) {
    let minFrequency = 20,
        maxFrequency = 2000
    return ((x / canvas.width) * maxFrequency) + minFrequency
  }
  
  let calculateGain = function(y) {
    let minGain = 0,
        maxGain = 1
    return 1 - ((y / canvas.height) * maxGain) + minGain
  }
  
  this.createOscillator = function(x, y) {
    let xW = x,
        yW = y
    oscillator = context.createOscillator()
    oscillator.frequency.setTargetAtTime(calculateFrequency(xW), context.currentTime, 0.001)
    gainNode.gain.setTargetAtTime(calculateGain(yW), context.currentTime, 0.001)
    oscillator.connect(gainNode)
    oscillator.start(context.currentTime)
  }
  
  this.stopOscillator = function() {
    if(oscillator) {
      oscillator.stop(context.currentTime)
      oscillator.disconnect()
    }
  }
  
  this.changeFrequency = function (x, y) {
    let xW = x,
        yW = y
    if(oscillator) {
      oscillator.frequency.setTargetAtTime(calculateFrequency(xW), context.currentTime , 0.001)
      gainNode.gain.setTargetAtTime(calculateGain(yW), context.currentTime, 0.001)
    }
  }
}
