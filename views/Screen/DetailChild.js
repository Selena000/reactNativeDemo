import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Detail extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <Text>Detail Child</Text>
      </View>
    )
  }
}
