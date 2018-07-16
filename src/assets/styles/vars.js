import {PixelRatio, StatusBar, Platform} from 'react-native'
import {isIphoneX} from 'react-native-iphone-x-helper'
import {setText} from './index'

// color
export const primaryColor = '#4285f4'
export const headerColor = primaryColor
export const buttonColor = primaryColor
export const pageBackgroundColor = '#f2f2f2'
export const lightBackgroundColor = '#f5f5f5'
export const primaryTextColor = '#333'
export const secondaryTextColor = '#999'
export const separatorLineColor = '#dedede'
export const listItemHighlightColor = '#000'
export const touchableHighlightColor = 'rgba(0,0,0,0.03)'
export const riseTextColor = '#4eb772'
export const fallTextColor = '#ec665f'
export const deleteBtnBackgroundColor = '#F4333C'
export const placeholderColor = '#999'
export const borderColor = '#eee'

// size
export const headerHeight = isIphoneX() ? 84 : 64
export const statusBarHeight = StatusBar.currentHeight || (isIphoneX() ? 40 : 20)
export const navigationBarHeight = headerHeight - statusBarHeight
// 系统蒙层到顶部的距离
export const MODAL_OFFSET_Y = Platform.OS === 'ios' ? 0 : statusBarHeight
export const homeTotalAssetHeight = 180

// font-size
export const normalLargeFontSize = setText(18) // 普通大号字体

export const navigationTitleFontSize = setText(17) // 导航头标题字体大小

export const ratherLargeFontSize = setText(16) // 偏大字体

export const primaryFontSize = setText(15) // 主要字体 (一号)
export const firstFontSize = setText(14) // 主要字体 (1.5)

export const secondaryFontSize = setText(13) // 次要字体 (二号)

export const thirdFontSize = setText(12) // (三号)字体

export const fourthFontSize = setText(11) // (四号)字体

export const fontSizeScaler = PixelRatio.get() / PixelRatio.getFontScale()
