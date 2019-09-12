import GameObject from './game-object'

class Floor extends GameObject {
  constructor() { 
    super({
      x: 0,
      y: 126,
      width: 300,
      height: 32,
      color: '#7b6045',
      shape2d: {
        x: 0, 
        y: 126, 
        width: 300, 
        height: 32
      },
    })
  }
}

export default Floor
