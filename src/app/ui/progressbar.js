import {getContext} from '../engine-wrapper'

export default function ProgressBar(options={}) {
  const context = getContext()
  this.width = options.width || 100
  this.value = options.value || 100
  this.barColor = options.barColor || '#623c3c'
  this.fillColor = options.fillColor || '#b52828'
  this.draw = function() {
    context.fillStyle = '#623c3c'
    context.fillRect(8, 8, this.width, 8)
    context.fillStyle = '#b52828'
    context.fillRect(8, 8, this.value, 8)
  }
}
