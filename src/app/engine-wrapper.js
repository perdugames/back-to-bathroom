import {
  load as loadKontra, 
  init as initKontra, 
  GameLoop as GameLoopKontra, 
  Sprite as SpriteKontra,
  SpriteSheet as SpriteSheetKontra,
  initKeys as initKeysKontra, 
  keyPressed as keyPressedKontra,
  setStoreItem as setStoreItemKontra, 
  getStoreItem as getStoreItemKontra,
  bindKeys as bindKeysKontra,
  unbindKeys as unbindKeysKontra,
  getCanvas as getCanvasKontra, 
  getContext as getContextKontra,
  on as onKontra,
  off as offKontra,
  emit as emitKontra
} from 'kontra'

const load = loadKontra
const init = initKontra
const GameLoop= GameLoopKontra
const Sprite = SpriteKontra
const SpriteSheet = SpriteSheetKontra
const initKeys = initKeysKontra
const keyPressed = keyPressedKontra
const setStoreItem = (name, value) => setStoreItemKontra(('backtobathroom_' + name), value)
const getStoreItem = (name) => getStoreItemKontra(('backtobathroom_' + name))
const bindKeys = bindKeysKontra
const unbindKeys = unbindKeysKontra
const getCanvas = getCanvasKontra
const getContext = getContextKontra
const on = onKontra
const off = offKontra
const emit = emitKontra

export {
  load, 
  init,
  GameLoop,
  Sprite,
  SpriteSheet,
  initKeys,
  keyPressed,
  setStoreItem,
  getStoreItem,
  bindKeys,
  unbindKeys,
  getCanvas,
  getContext,
  on,
  off,
  emit
}
