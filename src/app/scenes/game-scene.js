import {Sprite, SpriteSheet, setStoreItem, getStoreItem, bindKeys, getCanvas, emit} from '../engine-wrapper'
// Game Objects
import Floor from '../game-objects/floor'
import Player from '../game-objects/player'
import Toilet from '../game-objects/toilet'
import Bread from '../game-objects/bread'
import ShitPool from '../shit-pool'
// UI Components
import TitleText from '../ui/components/title-text'
import StartText from '../ui/components/start-text'
import CommandsText from '../ui/components/commands-text'
import XShiftText from '../ui/components/xshit-text'
import ScoreText from '../ui/components/score-text'
import GameOverText from '../ui/components/gameover-text'
import HighScoreText from '../ui/components/highscore-text'
import ProgressBar from '../ui/progressbar'
// Collisions
import playerCollidesToilet from '../collisions/player-collides-toilet'
import shitCollidesToilet from '../collisions/shit-collides-toilet'
import shitCollidesFloor from '../collisions/shit-collides-floor'
import breadCollidesPlayer from '../collisions/bread-collides-player'
import breadCollidesFloor from '../collisions/bread-collides-floor'

class GameScene {
  constructor(assets, loop) {
    this.assets = assets
    this.loop = loop
    this.canvas = getCanvas()
    this.count = 0
    this.delay = 1 * 30
    this.gameState = "new"
    this.floor = null
    this.player = null
    this.toilet = null
    this.bread = null
    this.shitPool = null
    this.titleText = null
    this.startText = null
    this.commandsText = null
    this.xShitText = null
    this.scoreText = null
    this.lifeBar = null
    this.gameOverText = null
    this.HighScoreText = new HighScoreText()
    setStoreItem('highScore', 0)
  }
  
  start() {
    this.gameState = "new"
    this.floor = new Floor()
    this.player = new Player(this.assets[0])
    this.toilet = new Toilet(this.assets[1])
    this.bread = new Bread(this.assets[3])
    this.shitPool = new ShitPool(this.assets[2], 99)
    setStoreItem('shitScore', 0)
    setStoreItem('xShit', 0)
    this.titleText = new TitleText()
    this.startText = new StartText()
    this.commandsText = new CommandsText()
    this.xShitText = new XShiftText()
    this.scoreText = new ScoreText()
    this.gameOverText = new GameOverText()    
    this.lifeBar = new ProgressBar()
    this.player.inactive = true
    this.shitPool.new()
    let canInit = true
    bindKeys('enter', (e) => {
      if(this.gameState === 'new' && canInit) {
        setTimeout(() => {
          emit("createThereminOscillator", 100, 100)
          this.gameState = 'running'
          this.startText.text = ''
          this.player.inactive = false
          this.loop.start()
        }, 1500)
        canInit = false
      }else if(this.gameState === 'paused' && this.loop.isStopped) {
        emit("createThereminOscillator", 100, 100)
        this.gameState = 'running'
        this.startText.text = ''
        this.player.inactive = false
        this.loop.start()
      }else if(this.gameState === 'running') {
        emit("stopThereminOscillator")
        this.gameState = 'paused'
        this.startText.text = 'PAUSED: Press ENTER to Continue'
        this.player.inactive = true
        this.loop.stop()
      }
    })
  }
  
  update() {
    if(this.gameState === 'running') {
      
      if(getStoreItem('xShit') <= 0) {
        this.xShitText.fillStyle = "red"
        if(this.delay <= 0) {
          if(this.xShitText.text) {
            this.xShitText.text = ''
          }else{
            this.xShitText.text = getStoreItem('xShit') + " x"
          }
        }
     }else{
        this.xShitText.fillStyle = "black"
        this.xShitText.text = getStoreItem('xShit') + " x"
     }
      
      if(this.count >= 6) {
        if(getStoreItem('xShit') <= 0) {
          this.player.removeLife(29)
        }else{
          this.player.removeLife((1 + Math.round(this.shitPool.stoppedObjects().length/2)))
        }
        this.count = 0
      }
      
      if(this.delay <= 0) {
        this.count++
        this.delay = 1 * 30
      }
      this.delay--
      this.toilet.update()
      this.player.update()
      this.shitPool.update()
      this.bread.update()
      playerCollidesToilet(this.player, this.toilet, this.shitPool)
      shitCollidesToilet(this.shitPool, this.toilet)
      shitCollidesFloor(this.shitPool, this.floor)
      breadCollidesPlayer(this.bread, this.player)
      breadCollidesFloor(this.bread, this.floor)
      this.lifeBar.value = this.player.life
      this.scoreText.text = "Shit Score: " + getStoreItem('shitScore')
      this.HighScoreText.text = "High Score: " + getStoreItem('highScore')
      if(this.lifeBar.value <= 0) {
        this.player.inactive = true
        emit("changeThereminFrequency", 80, 110)
        this.gameOverText.text = 'GAME OVER'
        setStoreItem('highScore', getStoreItem('shitScore'))
        setTimeout(() => {
          emit("stopThereminOscillator")
          this.start()
        }, 3000)
      }
    }
  }
  
  render() {
    this.floor.render()
    this.toilet.render()
    if(this.gameState === 'running') {
      this.bread.render()
      this.player.render()
      this.lifeBar.draw()
      this.scoreText.draw()
      this.xShitText.draw()
      this.shitPool.render()
      this.gameOverText.draw()
    }else if(this.gameState === 'new' || this.gameState === 'paused') {
      this.titleText.draw()
      this.startText.draw()
      this.commandsText.draw()
      this.HighScoreText.draw()
    }
  }
  
}

export default GameScene
