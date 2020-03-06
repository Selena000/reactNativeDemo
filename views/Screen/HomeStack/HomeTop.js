import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeTop extends Component {
  render() {
    // const { state: { params }, navigate } = this.props.navigation
    const { navigate } = this.props.navigation
    return (
      <View style={{flex: 1, backgroundColor: '#9cdcfe'}}>
        <Text>HomeTop</Text>
        {/* <Text>{params.username}</Text>
        <Text>{params.title}</Text> */}
        <Button title="去详情页child" onPress={() => {
          navigate('HomeChild')
        }}/>
      </View>
    )
  }
}
