import {keyPressed, setStoreItem, getStoreItem} from './engine-wrapper'
import Shit from './game-objects/shit'

export default function ShitPool(img, nShits) {
  this.objectsPool = []
  this.maxSpeed = 3
  this.minSpeed = 1
  
  for(let i = 0; i < nShits; i++) {
    const shit = new Shit(img)
    shit.active = false
    shit.show = true
    shit.stopped = false
    this.objectsPool.push(shit)
  }
  
  this.new = function() {
    const inactiveShit = this.objectsPool.find((shit) => shit.active === false)
    inactiveShit.sprite.y = -64
    inactiveShit.sprite.x = Math.floor(Math.random() * 210) + 12
    inactiveShit.active = true
    inactiveShit.speed.x = (Math.floor(Math.random() * 3) + 1) * (Math.random() >= 0.5 ? -1 : 1) 
    setStoreItem('xShit', getStoreItem('xShit') + 1)
  }
  
  this.reset = function(shit) {
    shit.show = false
    shit.sprite.y = -64
    shit.sprite.x = Math.floor(Math.random() * 210) + 12
    shit.speed.x = (Math.floor(Math.random() * 3) + 1) * (Math.random() >= 0.5 ? -1 : 1) 
    setTimeout(() => shit.show = true, 500 + Math.round(22000/getStoreItem('xShit')))
  }
  
  this.update = function() {
    const actives = this.notStoppedObjects()
    actives.forEach((shit) => {
      shit.update()
      shit.sprite.y += ((Math.floor(Math.random() * this.maxSpeed + Math.round(getStoreItem('xShit')/3)) + this.minSpeed) * 0.1)
      shit.sprite.x += shit.speed.x * 0.05
    })
  }

  this.render = function() {
    const actives = this.activeObjects()
    actives.forEach((shit) => shit.sprite.render())
  }
  
  this.stoppedObjects = function() {
    return this.objectsPool.filter((shit) => shit.active === true && shit.stopped === true && shit.show === true)
  }
  
  this.notStoppedObjects = function() {
    return this.objectsPool.filter((shit) => shit.active === true && shit.stopped === false && shit.show === true)
  }
  
  this.activeObjects = function() {
    return this.objectsPool.filter((shit) => shit.active === true && shit.show === true)
  }

}
