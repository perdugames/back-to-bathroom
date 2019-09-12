export default function collidesWith(object) {
  let dx = this.x - object.x
  let dy = this.y - object.y
  let distance = Math.sqrt(dx * dx + dy * dy)
  return distance < (this.radius + object.radius)
}
