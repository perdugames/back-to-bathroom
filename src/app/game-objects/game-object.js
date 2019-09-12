import {Sprite} from '../engine-wrapper'

class GameObject {
  constructor(properties) {
    this.show = true
    this.inactive = false
    this.sprite = new Sprite(properties)
  }
  
  render() {
    if(this.show)
      this.sprite.draw()
  }
}

export default GameObject
