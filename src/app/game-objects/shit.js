import {getCanvas} from '../engine-wrapper'
import GameObject from './game-object'

class Shit extends GameObject {
  constructor(img) { 
    super({
      x: 0,
      y: 0,
      width: 64,
      height: 64,
      shape2d: {
        x: 0, 
        y: 0, 
        width: 32, 
        height: 32
      },
      image: img
    })
    this.speed = {x: 0, y: 0}
    this.canvas = getCanvas()
    this.limit = {minX: -12, maxX: this.canvas.width - 68}
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

export default Shit
