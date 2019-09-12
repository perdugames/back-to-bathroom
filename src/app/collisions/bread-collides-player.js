import collidesWith from '../collides-with-aabb'

export default function breadCollidesPlayer(bread, player) {
  bread.sprite.collidesWith = collidesWith
  player.sprite.collidesWith = collidesWith
  if(bread.sprite.collidesWith(player.sprite)) {
    player.addLife(10)
    bread.reset()
    setTimeout(() => player.toShit = true, 7000)
  }
}
