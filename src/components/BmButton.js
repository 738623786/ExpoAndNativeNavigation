/**
 * Created by fjl on 2018/5/10
 */

import React, {Component} from 'react'
import {View, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native'

class BmButton extends Component {
  render() {
    const {style, onPress, children} = this.props
    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          style={style}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      )
    }
    return (
      <TouchableNativeFeedback
        onPress={onPress}
      >
        <View style={style}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default BmButton
