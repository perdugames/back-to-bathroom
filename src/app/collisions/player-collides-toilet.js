import {keyPressed} from '../engine-wrapper'
import collidesWith from '../collides-with-circle'

let downKey = false

export default function playerCollidesToilet(player, toilet, shitPool) {
  player.sprite.collidesWith = collidesWith
  player.sprite.radius = 9
  toilet.sprite.collidesWith = collidesWith
  toilet.sprite.radius = 9
  
  if(toilet.speed.x === 0) {
    toilet.sprite.x = toilet.limit.minX + 1
    toilet.speed.x = 1
  }
  
  if(keyPressed('left') || keyPressed('a')) 
    player.joints.walk((joint) => joint.obj.sprite.x -= player.speed.x * 1)
  else if(keyPressed('right') || keyPressed('d'))
    player.joints.walk((joint) => joint.obj.sprite.x += player.speed.x * 1)
  
  if(player.sprite.collidesWith(toilet.sprite)) {
    if(keyPressed('space') && !downKey) {
      if(player.joints.isEmpty())
        player.joints.add('toilet', toilet)
      setTimeout(() => {
        player.joints.remove('toilet')
        downKey = false
      }, 1000)
      downKey = true
    }

    if(keyPressed('left') || keyPressed('a') && player.joints.isEmpty())
      toilet.sprite.x -= player.speed.x * 1
    else if(keyPressed('right') || keyPressed('d') && player.joints.isEmpty())
      toilet.sprite.x += player.speed.x * 1

    if(player.toShit && !toilet.withShit) {
      toilet.sprite.playAnimation('shitting')
      player.show = false
      player.speed.x = 0
      player.toShit = false
      player.inactive = true
      setTimeout(() => {
        toilet.sprite.playAnimation('idleShit')
        player.show = true
        player.speed.x = 2
        player.inactive = false
        toilet.withShit = true
      }, 1500)
    }else if(keyPressed('e')) {
      if(toilet.withShit) {
        toilet.sprite.playAnimation('discharge')
        setTimeout(() => shitPool.new(), 2000)
        toilet.withShit = false
      }
    }
  }
}
