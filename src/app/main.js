import {load, init, GameLoop, initKeys} from './engine-wrapper'
// Scenes
import SceneController from './scenes/scene-controller'
import ActiveAudioScene from './scenes/active-audio-scene'
import IntroductionScene from './scenes/introduction-scene'
import GameScene from './scenes/game-scene'
// Images
import playerImg from '../../assets/player.png'
import toiletImg from '../../assets/toilet.png'
import shitImg from '../../assets/shit.png'
import breadImg from '../../assets/bread.png'

const {canvas, context} = init()
initKeys()
let sceneController

const loop = new GameLoop({
  update: function(dt) {
    sceneController.update(dt)
  },
  render: function() {
    sceneController.render()
  }
})

load(
  playerImg,
  toiletImg,
  shitImg,
  breadImg
).then(function(assets) {
  sceneController = new SceneController()
  sceneController.add("activeAudio", new ActiveAudioScene(assets), true)
  sceneController.add("introduction", new IntroductionScene(assets))
  sceneController.add("game", new GameScene(assets, loop))
  loop.start()
}).catch(function(err) {
  console.log(err)
})
