import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet
} from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback 
          onPress={() => {console.log('onPress')}}
          onPressIn={() => {console.log('onPressIn')}}
          onPressOut={() => {console.log('onPressOut')}}>
          <View style={styles.button}>
            <Text>我是按钮</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellowgreen',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 80,
    height: 80,
    borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})