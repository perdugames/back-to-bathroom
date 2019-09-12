import collidesWith from '../collides-with-aabb'

export default function breadCollidesFloor(bread, floor) {
  bread.sprite.collidesWith = collidesWith
  floor.sprite.collidesWith = collidesWith
  if(bread.sprite.collidesWith(floor.sprite)) {
    bread.reset()
  }
}
