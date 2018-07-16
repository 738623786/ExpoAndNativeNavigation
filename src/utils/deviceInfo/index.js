/* Created by J666 on 2018/2/28 */
import {Platform} from 'react-native'
import {NetworkInfo} from 'react-native-network-info'
import * as DeviceInfo from 'react-native-device-info'

export const getIPAddress = async () => {
  try {
    return Platform.OS === 'ios' ? await new Promise((resolve, reject) => {
      NetworkInfo.getIPAddress(ip => {
        resolve(ip)
      })
    }) : await DeviceInfo.getIPAddress()
  } catch (err) {
    console.error(err)
  }
}

export const getUniqueID = () => {
  return DeviceInfo.getUniqueID()
}
export const getUserAgent = () => {
  return DeviceInfo.getUserAgent()
}
export const getVersion = () => {
  return DeviceInfo.getVersion()
}
export const getBundleId = ()  => {
  return DeviceInfo.getBundleId()
}
export const getModel = () => {
  return DeviceInfo.getModel()
}
export const getReadableVersion = () => {
  return DeviceInfo.getReadableVersion()
}
export const getSystemVersion = () => {
  return DeviceInfo.getSystemVersion()
}
export const getAppName = () => {
  return DeviceInfo.getApplicationName()
}
