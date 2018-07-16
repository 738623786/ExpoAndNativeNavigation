/* Created by J666 on 2018/1/8 */

import {
  Dimensions,
  findNodeHandle,
  UIManager,
  PixelRatio
} from 'react-native'

const basePx = 375

export const deviceH = Dimensions.get('window').height
export const deviceW = Dimensions.get('window').width
export const pixelRatio = PixelRatio.get()
export const pixel = 1 / pixelRatio
export const fontScale = PixelRatio.getFontScale()
// export const scale = Math.min(deviceW / basePx)
export const scale = deviceW / basePx

export function px2dp(px) {
  return px * deviceW / basePx
}

export function setText(fontSize) {
  fontSize = Math.round((fontSize * scale + 0.5) * pixelRatio / fontScale)
  return fontSize / pixelRatio
}

export function layout(ref) {
  const handle = findNodeHandle(ref)
  if (!handle) {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        resolve({
          x,
          y,
          width,
          height,
          pageX,
          pageY
        })
      })
    }, 1)
  })
}
