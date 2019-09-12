import {getContext} from '../engine-wrapper'
  
export default function Text(options={}) {
  const context = getContext()
  this.text = options.text || ""
  this.font = options.font || "12px Arial"
  this.textAlign = options.textAlign || "right"
  this.position = options.position || {x: 0, y: 0}
  this.fillStyle = options.fillStyle || "black"
  this.draw = function() {
    context.fillStyle = this.fillStyle
    context.font = this.font
    context.textAlign = this.textAlign
    context.fillText(this.text, this.position.x, this.position.y)
  }
}
