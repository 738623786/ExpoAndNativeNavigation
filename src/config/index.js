/**
 * Created by fjl on 2018/7/11
 */

import deviceInfo from '../utils/deviceInfo'
import {Platform} from 'react-native'
// "长按"手势默认的触发时间
export const DEFALUT_LONG_PRESS_TRIGGLE_TIME = 600 // 0.6秒

// android 测试环境bundle id
export const ANDROID_BMTEST_BUNDLE_ID = 'com.bitmore.proapp.bmtest'

// android 内测环境bundle id
export const ANDROID_ALPHA_BUNDLE_ID = 'com.bitmore.proapp.alpha'

// android 生产环境bundle id
export const ANDROID_PRODUCT_BUNDLE_ID = 'com.bitmore.proapp'

// 环境设置
export const IOS_ENVIRONMENT_CONFIG = {
  release: { // （生产环境）appstore环境
    bundleId: 'com.yunhuicai.bitmore',
    deploymentKey: 'rFSOj3F7xsbigG3A999jY_-rHP8bd2bb56d1-a012-4c1b-8097-0579428ddcb8'
  },
  formal: { // （正式环境）蒲公英环境
    bundleId: 'com.yunhuicai.bitmore-formal',
    deploymentKey: '3ZiNiP0v_xywwd9F22gPcUnjQ9Iad2bb56d1-a012-4c1b-8097-0579428ddcb8'
  },
  beta: { // 公测环境
    bundleId: 'com.yunhuicai.bitmore-beta',
    deploymentKey: '1b3SyYYvli4LdYcddgiRKYejvVH2d2bb56d1-a012-4c1b-8097-0579428ddcb8'
  },
  stage: { // 内测环境
    bundleId: 'com.yunhuicai.bitmore-staging',
    deploymentKey: 'Kb3asjEjh66nlIlSG41rOGMAjgWwd2bb56d1-a012-4c1b-8097-0579428ddcb8'
  },
  test: { // 测试环境
    bundleId: 'com.yunhuicai.bitmore-testing',
    deploymentKey: '2MZLCFqmZzy8UQWhaFub-Bo9a6aad2bb56d1-a012-4c1b-8097-0579428ddcb8'
  }
}

