import {Sprite, SpriteSheet, getCanvas, on, emit, bindKeys} from '../engine-wrapper'
import Theremin from '../theremin'
import ToiletImage from '../ui/components/toilet-image'
import Text from '../ui/text'

class ActiveAudioScene {
  constructor(assets) {
    this.theremin = null
    this.initTheremin = true
    this.toiletImage = new ToiletImage(assets[1], "idleShit")
    this.enterText = new Text({
      text: "[PRESS ENTER]",
      font: "12px Arial",
      textAlign: "center",
      position: {x: canvas.width/2, y: canvas.height/2 - 32},
      fillStyle: "black"
    })
  }
  
  start() {
    bindKeys('enter', (e) => {
      if(this.initTheremin) {
        this.theremin = new Theremin()
        this.toiletImage.playAnimation("discharge")
        setTimeout(() => emit("changeScene", "introduction"), 3000)
        this.initTheremin = false
      }
    })
    on("createThereminOscillator", (x, y) => {
      this.theremin.createOscillator(x, y)
    })

    on("changeThereminFrequency", (x, y) => {
      this.theremin.changeFrequency(x, y)
    })

    on("stopThereminOscillator", () => {
      this.theremin.stopOscillator()
    })
  }
  
  update() {
    this.toiletImage.update()
  }
  
  render() {
    this.toiletImage.render()
    this.enterText.draw()
  }
  
}

export default ActiveAudioScene
