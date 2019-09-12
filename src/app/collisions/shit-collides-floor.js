import {setStoreItem, getStoreItem} from '../engine-wrapper'
import collidesWith from '../collides-with-aabb'

export default function shitCollidesFloor(shitPool, floor) {
  floor.sprite.collidesWith = collidesWith
  shitPool.notStoppedObjects().forEach((shit) => {
    shit.sprite.collidesWith = collidesWith
    if(shit.sprite.collidesWith(floor.sprite)) {
      setStoreItem('xShit', (getStoreItem('xShit') - 1))
      shit.stopped = true
    }
  })
}
