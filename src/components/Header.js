/* Created by J666 on 2018/1/8 */
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import StatusBar from './StatusBar'
import PropTypes from 'prop-types'
import {Icon} from 'react-native-elements'
import {headerColor} from '../styles/vars'
import BmButton from './BmButton'
import {
  px2dp,
  primaryFontSize,
  navigationTitleFontSize,
  navigationBarHeight,
  statusBarHeight,
  touchableHighlightColor,
  primaryTextColor
} from '../styles'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static defaultProps = {
    title: '',
    styles: {}
    // HeaderRight: <View/>
  }
  static propTypes = {
    title: PropTypes.string.isRequired
    // headerRight: PropTypes.element
  }

  componentWillMount() {
  }

  _headerRightPress = () => {
    let {headerRightPress} = this.props
    if (headerRightPress && typeof headerRightPress === 'function') {
      headerRightPress()
    }
  }
  _headerLeftPress = () => {
    let {headerLeftPress} = this.props
    if (headerLeftPress && typeof headerLeftPress === 'function') {
      headerLeftPress()
    }
  }
  _pressGoBack = () => {
    let {plainBackCallback} = this.props
    if (plainBackCallback) {
      plainBackCallback()
      return
    }
    let params = this.props.navigation.state.params || {}
    let {backCallback} = params
    backCallback && backCallback()
    this.props.navigation && this.props.navigation.goBack()
  }

  render() {
    let {style, contentStyle, headerLeft, headerRight, backLabel, navigation, title, plain, plainBackCallback} = this.props
    return (
      <View style={[styles.header, {
        backgroundColor: plain ? '#fff' : headerColor,
        marginTop: (plain && (Platform.OS === 'android')) ? -statusBarHeight : 0
      }, style]}>
        <StatusBar
          plain={plain}
        />
        <View style={[{flex: 1}, contentStyle]}>
          <View style={{
            backgroundColor: plain ? '#fff' : headerColor,
            height: statusBarHeight
            // backgroundColor: 'red'
          }}/>
          <View style={styles.headerMain}>
            {
              (plainBackCallback || (navigation/* && navigation.state.params && navigation.state.params.referer */)) &&
              <BmButton
                onPress={this._pressGoBack}
                style={[styles.backBtnContainer]}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Icon
                    name='angle-left'
                    type='font-awesome'
                    color={plain ? primaryTextColor : '#fff'}
                    size={32}
                    containerStyle={[{
                      // height: '100%',
                      marginLeft: 13,
                      marginRight: 13
                    }]}
                    underlayColor='rgba(0,0,0,0)'/>
                  {
                    backLabel &&
                    <Text style={{
                      fontFamily: 'PingFangSC-Regular',
                      fontSize: primaryFontSize,
                      color: plain ? primaryTextColor : '#fff'
                    }}>{backLabel}</Text>
                  }
                </View>
              </BmButton>
            }
            {
              headerLeft
                ? <BmButton
                  underlayColor={touchableHighlightColor}
                  onPress={this._headerLeftPress.bind(this)}
                  style={[styles.headerLeft]}>
                  {headerLeft}
                </BmButton>
                : null
            }
            {
              title
                ? <View
                  style={styles.titleTextWrap}>
                  <Text style={[styles.titleText, {color: plain ? primaryTextColor : '#fff'}]}>{title}</Text>
                </View>
                : null
            }
            {
              headerRight &&
              <BmButton
                onPress={this._headerRightPress}
                style={[styles.headerRight]}>
                {
                  typeof headerRight === 'string'
                    ? <View style={{paddingRight: px2dp(10)}}>
                      <Text
                        style={{
                          fontFamily: 'PingFangSC-Regular',
                          fontSize: primaryFontSize,
                          color: plain ? primaryTextColor : '#fff'
                        }}
                      >{headerRight}</Text>
                    </View>
                    : headerRight
                }
              </BmButton>}
          </View>
        </View>
      </View>
    )
  }
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: navigationBarHeight + statusBarHeight,
    backgroundColor: headerColor
  },
  headerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  titleTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTitleTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: px2dp(13)
    // backgroundColor: 'red'
  },
  titleText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: navigationTitleFontSize,
    color: '#ffffff',
    // backgroundColor: 'green',
    textAlignVertical: 'center',
    includeFontPadding: false
  },
  backBtnContainer: {
    position: 'absolute',
    left: 0,
    top: -statusBarHeight,
    paddingTop: statusBarHeight,
    height: navigationBarHeight + statusBarHeight,
    alignItems: 'center',
    minWidth: 80,
    zIndex: 99999,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    minWidth: 66,
    paddingRight: 0,
    justifyContent: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    minWidth: 66,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
})
