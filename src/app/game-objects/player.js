import {SpriteSheet, keyPressed, getCanvas, emit} from '../engine-wrapper'
import GameObject from './game-object'
import Joints from '../joints'

class Player extends GameObject {
  constructor(img) {
    const playerSpriteSheet = SpriteSheet({
      image: img,
      frameWidth: 32,
      frameHeight: 32,
      animations: {
        idleLeft: {
          frames: 0,
          loop: false
        },
        walkLeft: {
          frames: '0..3',
          frameRate: 4
        },
        pushingRight: {
          frames: 4,
          loop: false
        },
        idleRight: {
          frames: 5,
          loop: false
        },
        walkRight: {
          frames: '5..8',
          frameRate: 4
        },
        pushingLeft: {
          frames: 9,
          loop: false
        }
      }
    })
    super({
      x: 200,
      y: 72,
      width: 64,
      height: 64,
      animations: playerSpriteSheet.animations,
      shape2d: {
        x: 0, 
        y: 0, 
        width: 32, 
        height: 64
      }
    })
    this.sprite.playAnimation('idleRight')
    this.direction = 'left'
    this.show = true
    this.inactive = false
    this.speed = {
      x: 2,
      y: 0
    }
    this.life = 100
    this.toShit = false
    setTimeout(() => {this.toShit = true}, 5000)
    this.canvas = getCanvas()
    this.joints = new Joints(this)
    this.limit = {minX: 1, maxX: this.canvas.width - 40}
  }
  
  addLife(n) {
    if(this.life + n <= 100)
      this.life += n
    else
      this.life = 100
  }
  
  removeLife(n) {
    if(this.life - n >= 0)
      this.life -= n
    else
      this.life = 0
  }
  
  update() {
    if(this.inactive)
      return false
    
    this.sprite.update()
    // Movement
    if((keyPressed('left') || keyPressed('a')) && !this.joints.isEmpty() && this.direction === 'right') {
      this.speed.x = 2
      this.sprite.x -= this.speed.x * 1
      this.sprite.playAnimation('pushingRight')
      emit("changeThereminFrequency", this.speed.x * 10, this.speed.x * 10)
    }else if((keyPressed('right') || keyPressed('a')) && !this.joints.isEmpty() && this.direction === 'left') {
      this.speed.x = 2
      this.sprite.x += this.speed.x * 1
      this.sprite.playAnimation('pushingLeft')
      emit("changeThereminFrequency", this.speed.x * 20, this.speed.x * 10)
    }else if(keyPressed('left') || keyPressed('a') && this.joints.isEmpty()) {
      this.speed.x = 2
      this.sprite.x -= this.speed.x * 1
      this.sprite.playAnimation('walkLeft')
      this.direction = 'left'
      emit("changeThereminFrequency", this.speed.x * 40, this.speed.x * 10)
    }else if(keyPressed('right') || keyPressed('d') && this.joints.isEmpty()) {
      this.speed.x = 2
      this.sprite.x += this.speed.x * 1
      this.sprite.playAnimation('walkRight')
      this.direction = 'right'
      emit("changeThereminFrequency", this.speed.x * 60, this.speed.x * 10)
    }else{
      this.speed.x = 0
      emit("changeThereminFrequency", 100, 100)
    }

    // Idle Animations
    if(this.speed.x === 0)
      if(this.direction === 'left')
        this.sprite.playAnimation('idleLeft')
      else if(this.direction === 'right')
        this.sprite.playAnimation('idleRight')

    // Limit canvas
    if(this.sprite.x >= this.limit.maxX) {
      this.sprite.x = this.limit.maxX
      this.speed.x = 0
      emit("changeThereminFrequency", 130, 35)
    }else if(this.sprite.x <= this.limit.minX) {
      this.sprite.x = this.limit.minX 
      this.speed.x = 0
      emit("changeThereminFrequency", 105, 63)
    }
  }
  
}

export default Player
