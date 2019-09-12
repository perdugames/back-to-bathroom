export default function Joints(rootObj) {
  this.rootObj = rootObj
  this.joints = []
  this.isEmpty = () => this.joints.length <= 0
  this.add = (name, obj) => {
    this.joints.push({
      name: name,
      obj: obj
    })
  }
  this.remove = (name) => {
    const index = this.joints.findIndex((el) => el.name = name)
    if(index > -1)
      this.joints.splice(index, 1)
  }
  this.walk = (fn) => {
    for(let i = 0; i < this.joints.length; i++) {
      fn(this.joints[i])
    }
  }
}
