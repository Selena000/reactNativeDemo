import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Home'
import Detail from './views/Detail'


var RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  }
})


export default class App extends Component {
  render() {
    RootStack = createAppContainer(RootStack)
    return (
      <RootStack/>
    )
  }
}