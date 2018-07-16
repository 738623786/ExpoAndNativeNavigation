import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base'
import Toast from 'react-native-root-toast'
export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      visible: true
    }
  }
  render() {
    return (
      <View>
        <Button
          title={'点击'}
          style={{
            width: '100%'
          }}
          onPress={() => {
            Toast.show('您的登录已经超时', {
            })
          }}
        />
      </View>
    );
  }
}

