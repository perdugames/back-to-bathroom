import {Sprite, SpriteSheet, getCanvas} from '../../engine-wrapper'
import Text from '../text'

export default function ToiletImage(img, anim) {
  const canvas = getCanvas()
  const toiletImage = new Sprite({
    x: canvas.width/2 - 32,
    y: canvas.height/2 - 24,
    width: 64,
    height: 64
  })
  const spriteSheet = SpriteSheet({
    image: img,
    frameWidth: 32,
    frameHeight: 32,
    animations: {
      shitting: {
        frames: 2,
        loop: false
      },
      idleShit: {
        frames: 0,
        loop: false
      },
      discharge: {
        frames: [0, 1],
        frameRate: 1,
        loop: false
      },
    }
  })
  toiletImage.animations = spriteSheet.animations
  toiletImage.playAnimation(anim)
  return toiletImage
}
