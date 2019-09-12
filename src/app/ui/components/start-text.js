import {getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function StartText() {
  const canvas = getCanvas()
  return new Text({
    text: "Press ENTER to Start",
    font: "12px Arial",
    textAlign: "center",
    position: {x: canvas.width/2, y: canvas.height/2 - 8},
    fillStyle: "green"
  })
}