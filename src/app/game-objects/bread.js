import {getCanvas} from '../engine-wrapper'
import GameObject from './game-object'

class Bread extends GameObject {
  constructor(img) { 
    super({
      x: Math.floor(Math.random() * 210) + 12,
      y: -128,
      width: 32,
      height: 32,
      image: img,
      shape2d: {
        x: 0, 
        y: 0, 
        width: 4, 
        height: 4
      }
    })
    this.active = true
    this.speed = {x: 0, y: 0}
    this.canvas = getCanvas()
    this.limit = {minX: 0, maxX: this.canvas.width}
  }
  
  reset() {
    this.active = false
    this.sprite.y = -48
    this.sprite.x = Math.floor(Math.random() * 210) + 12
    this.speed.x = (Math.floor(Math.random() * 3) + 1) * (Math.random() >= 0.5 ? -1 : 1) 
    setTimeout(() => this.active = true, 23000)
  }
  
  update() {
    this.sprite.update()
    if(this.active) {
      this.sprite.y += ((Math.floor(Math.random() * 3) + 1) * 0.1)
      this.sprite.x += this.speed.x * 0.05
    }
    if(this.sprite.x >= this.limit.maxX) {
      this.sprite.x = this.limit.maxX
      this.speed.x = 0
    }else if(this.sprite.x <= this.limit.minX) {
      this.sprite.x = this.limit.minX
      this.speed.x = 0
    }
  }

}

export default Bread
