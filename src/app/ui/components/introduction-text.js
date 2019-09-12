import {getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function IntroductionText() {
  const canvas = getCanvas()
  const lines = []
  const text = [
    "You are in bathroom and see that all ",
    "you do over there go back for you. ",
    "But you are hungry, if not eat then you die. ",
    "Yet you can eat bread that falls, ",
    "but the more you eat the more shit ",
    "comes back to you. [PRESS ENTER]"
  ]
  for(let i = 0; i < text.length; i++) {
    lines.push(new Text({
      text: text[i],
      font: "12px Arial",
      textAlign: "left",
      position: {x: canvas.width/6, y: canvas.height/2 - 16 + (12 * i)},
      fillStyle: "black"
    }))
  }
  this.draw = function() {
    lines.forEach((line) => line.draw())
  }
}