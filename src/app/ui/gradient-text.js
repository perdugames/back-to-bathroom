import {getCanvas, getContext} from '../engine-wrapper'

export default function GradientText(options={}) {
  const canvas = getCanvas()
  const context = getContext()
  this.color1 = options.color1 || ["0", "brown"]
  this.color2 = options.color2 || ["0.5", "yellow"]
  this.color3 = options.color3 || ["1.0", "red"]
  this.text = options.text || ""
  this.font = options.font || "11px Georgia"
  this.textAlign = options.textAlign || "left"
  this.position = options.position || {x: 0, y: 0}
  this.draw = function() {
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(this.color1[0], this.color1[1])
    gradient.addColorStop(this.color2[0], this.color2[1])
    gradient.addColorStop(this.color3[0], this.color3[1])
    context.fillStyle = gradient
    context.font = this.font
    context.textAlign = this.textAlign
    context.fillText(this.text, this.position.x, this.position.y)
  }
}
