import {getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function GameOverText() {
  const canvas = getCanvas()
  return new Text({
    text: "",
    font: "16px Arial",
    textAlign: "center",
    position: {x: canvas.width/2, y: canvas.height/2 - 16},
    fillStyle: "red"
  })
}
