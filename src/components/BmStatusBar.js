/**
 * Created by fjl on 2018/7/15
 */
import React, {Component} from 'react'
import {StatusBar} from 'react-native'

class BmStatusBar extends Component {
  render () {
    return (
      <StatusBar
        backgroundColor="#666"
        translucent={true}
      />
    )
  }
}

export default BmStatusBar
