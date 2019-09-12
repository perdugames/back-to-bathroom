export default function collidesWith(obj) {
  if(this.x < obj.x + obj.width &&
   this.x + this.shape2d.width > obj.x &&
   this.y < obj.y + obj.height &&
   this.y + this.shape2d.height > obj.y) {
    return true
  }
  return false
}