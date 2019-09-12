import {Sprite, SpriteSheet, getCanvas, bindKeys, emit} from '../engine-wrapper'
import TitleText from '../ui/components/title-text'
import IntroductionText from '../ui/components/introduction-text'
import CopyrightText from '../ui/components/copyright-text'
import ToiletImage from '../ui/components/toilet-image'

class IntroductionScene {
  constructor(assets) {
    this.imgShitting = ToiletImage(assets[1], "shitting")
    this.titleText = new TitleText()
    this.introductionText = new IntroductionText()
    this.copyrightText = new CopyrightText()
    this.renderImg = true
  }
  
  start() {
    setTimeout(() => this.renderImg = false, 3000)
    bindKeys('enter', function(e) {
      emit("changeScene", "game")
    })
  }
  
  update() {
    
  }
  
  render() {
    this.titleText.draw()
    if(this.renderImg)
      this.imgShitting.render()
    else
      this.introductionText.draw()
    this.copyrightText.draw()
  }
  
}

export default IntroductionScene
