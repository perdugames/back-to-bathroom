import {getCanvas} from '../../engine-wrapper'
import GradientText from '../gradient-text'

export default function TitleText() {
  const canvas = getCanvas()
  return new GradientText({
    color1: ["0", "SaddleBrown"],
    color2: ["0.5", "Black"],
    color3: ["1.0", "Chocolate"],
    text: "Back to Bathroom",
    font: "bold 26px system-ui",
    textAlign: "center",
    position: {x: canvas.width/2, y: canvas.height/2 - 40}
  })
}