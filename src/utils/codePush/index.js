/**
 * Created by fjl on 2018/5/16
 */

import {BmModal} from '../../components/BmModal'
import {Alert, Platform} from 'react-native'
import RNCodePush from 'react-native-code-push'
import {getBundleId} from '../deviceInfo'
import { IOS_ENVIRONMENT_CONFIG } from '../../config'
// 获取ios code-push的部署key
const getIOSCodePushDeploymentKey = () => {
  let bundleId = getBundleId()
  for (let o in IOS_ENVIRONMENT_CONFIG) {
    let environment = IOS_ENVIRONMENT_CONFIG[o]
    if (environment.bundleId === bundleId) {
      return environment.deploymentKey
    }
  }
  return ''
}
export default {
  /**
   * 检查版本更新的方法
   * @param isManuallyUpdate ：true为手动更新， false为自动更新
   * @param deploymentKey: code-push app更新的部署标识
   */
  async checkVersionUpdate(deploymentKey, isManuallyUpdate) {
    if (isManuallyUpdate) $ActivityIndicator.show()
    const update = await RNCodePush.checkForUpdate(deploymentKey)
    $ActivityIndicator.hide()
    if (update) {
      // 保证部署的秘钥一致
      if (update.deploymentKey !== deploymentKey) return
      if (update.isFirstRun) Alert.alert('提示', '应用更新完成！', {text: '好的'})
      let progressBar = null
      RNCodePush.sync(
        {
          deploymentKey,
          updateDialog: {
            descriptionPrefix: update.isMandatory ? '\n新补丁更新的内容如下：\n' : '\n新版本介绍：\n',
            appendReleaseDescription: true,
            optionalIgnoreButtonLabel: update.isMandatory ? null : '下次再说',
            optionalInstallButtonLabel: '立即更新',
            optionalUpdateMessage: `新版本文件的大小：${(update.packageSize / (1024 * 1024)).toFixed(2)}M`,
            mandatoryContinueButtonLabel: '后台更新',
            mandatoryUpdateMessage: '下载补丁，不会影响应用的正常使用，请您放心下载',
            title: update.isMandatory ? '发现新补丁了！' : '有新版本了，是否更新？'
          },
          mandatoryInstallMode: RNCodePush.InstallMode.ON_NEXT_RESTART,
          installMode: RNCodePush.InstallMode.IMMEDIATE
        },
        (status) => {
          switch (status) {
            case RNCodePush.SyncStatus.DOWNLOADING_PACKAGE:
              if (!update.isMandatory) {
                progressBar = BmModal.progressBar('更新新版本', true)
              }
              break
            case RNCodePush.SyncStatus.UPDATE_INSTALLED:
              if (progressBar) {
                progressBar.close()
                progressBar = null
              }
              if (update.isMandatory) {
                Alert.alert('补丁下载完毕', '新功能需重启才生效，是否重启？', [
                  {
                    text: '重启',
                    onPress: () => {
                      RNCodePush.restartApp()
                    }
                  },
                  {
                    text: '不了'
                  }
                ])
              }
              break
            case RNCodePush.SyncStatus.UNKNOWN_ERROR:
              if (progressBar) {
                progressBar.close()
                progressBar = null
              }
              Toast.info('更新出错了，请稍后重试', 1, null, false)
              break
          }
        },
        (p) => {
          if (progressBar) {
            let progress = p.receivedBytes / p.totalBytes
            progressBar.setState({progress})
          }
        }
      )
    } else if (isManuallyUpdate) {
      Alert.alert('提示', '已是最新版本!', [
        {
          text: '好的'
        }
      ])
    }
  },
  /**
   * RNCodePush ios版本更新
   * @param isManuallyUpdate 是否手动更新
   */
  iosCheckVersionUpdate(isManuallyUpdate) {
    if (Platform.OS === 'ios') {
      this.checkVersionUpdate(getIOSCodePushDeploymentKey(), isManuallyUpdate)
    }
  },
  /**
   * RNCodePush ios版本自动更新
   */
  iosAutoCheckVersionUpdate() {
    this.iosCheckVersionUpdate(false)
  },
  /**
   * RNCodePush ios版本手动更新(检测版本更新)
   */
  iosManuallyCheckVersionUpdate() {
    this.iosCheckVersionUpdate(true)
  }
}
