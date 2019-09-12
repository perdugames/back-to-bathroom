import {getCanvas, getContext, on, unbindKeys} from '../engine-wrapper'

class SceneController {
  constructor() {
    this.scenes = []
    this.currentScene = null
    on("changeScene", (name, data={}) => {
      this.change(name, data)
    })
  }
  
  add(name, scene, autoStarted=false) {
    scene.sceneController = this
    this.scenes.push({
      name: name,
      scene: scene,
      autoStarted: autoStarted
    })
    if(autoStarted) {
      this.currentScene = scene
      this.currentScene.start()
    }
  }
  
  update(dt) {
    if(this.currentScene)
      this.currentScene.update(dt)
  }
  
  render() {
    if(this.currentScene)
      this.currentScene.render()
  }
  
  remove(name) {
    const index = this.scenes.findIndex((el) => el.name === name)
    if(index > -1)
      this.scenes.splice(index, 1)
  }
  
  change(name, data={}) {
    unbindKeys(['enter'])
    const scene = this.scenes.find((el) => el.name === name).scene
    this.currentScene = scene
    const canvas = getCanvas()
    const context = getContext()
    context.clearRect(0, 0, canvas.width, canvas.height)
    this.currentScene.start(data)
  }
}

export default SceneController
