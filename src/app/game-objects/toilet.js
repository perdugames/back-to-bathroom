import {SpriteSheet, keyPressed, getCanvas} from '../engine-wrapper'
import GameObject from './game-object'

class Toilet extends GameObject {
  constructor(img) { 
    const toiletSpriteSheet = SpriteSheet({
      image: img,
      frameWidth: 32,
      frameHeight: 32,
      animations: {
        idle: {
          frames: 1,
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
        shitting: {
          frames: 2,
          loop: false
        }
      }
    })
    super({
      x: 100,
      y: 80,
      width: 64,
      height: 64,
      animations: toiletSpriteSheet.animations
    })
    this.sprite.playAnimation('idle')
    this.withShit = false
    this.canvas = getCanvas()
    this.speed = {x: 1, y: 0}
    this.limit = {minX: -16, maxX: this.canvas.width - 32}
  }
  
  update() {
    this.sprite.update()
    if(this.sprite.x >= this.limit.maxX) {
      this.sprite.x = this.limit.maxX
      this.speed.x = 0
    }else if(this.sprite.x <= this.limit.minX) {
      this.sprite.x = this.limit.minX
      this.speed.x = 0
    }
  }
}

export default Toilet
