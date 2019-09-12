import {getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function CommandsText() {
  const canvas = getCanvas()
  return new Text({
    text: "AWSD=move, SPACE=pull toilet, E=discharge, ENTER=pause",
    font: "9px Arial",
    textAlign: "center",
    position: {x: canvas.width/2, y: canvas.height/2 + 32},
    fillStyle: "blue"
  })
}