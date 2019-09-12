import {keyPressed, setStoreItem, getStoreItem} from '../engine-wrapper'
import collidesWith from '../collides-with-circle'

export default function shitCollidesToilet(shitPool, toilet) {
  toilet.sprite.collidesWith = collidesWith
  toilet.sprite.radius = 6
  shitPool.notStoppedObjects().forEach((shit) => {
    shit.sprite.collidesWith = collidesWith
    shit.sprite.radius = 4
    if(shit.sprite.collidesWith(toilet.sprite)) {
      setStoreItem('shitScore', (getStoreItem('shitScore') + (1 * getStoreItem('xShit'))))
      shitPool.reset(shit)
      toilet.sprite.playAnimation('idleShit')
      toilet.withShit = true
    }
  })
}
