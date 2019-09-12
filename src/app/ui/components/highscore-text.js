import {getCanvas} from '../../engine-wrapper'
import GradientText from '../gradient-text'

export default function HighScoreText() {
  const canvas = getCanvas()
  return new GradientText({
    text: "High Score: 0",
    font: "12px Arial",
    textAlign: "center",
    position: {x: canvas.width/2, y: canvas.height/2 + 8}
  })
}
