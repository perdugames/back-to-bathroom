import {getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function CopyrightText() {
  const canvas = getCanvas()
  return new Text({
    text: "©2019 Perdugames",
    font: "11px Verdana",
    textAlign: "right",
    position: {x: canvas.width - 8, y: canvas.height - 8},
    fillStyle: "#eaffef"
  })
}
