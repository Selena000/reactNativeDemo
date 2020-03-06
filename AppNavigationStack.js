import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Screen/Home'
import Detail from './views/Screen/Detail'
import DetailChild from './views/Screen/DetailChild'


var RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '我是首页',
      headerBackTitle: '返回首页'
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '我是详情',
      headerBackTitle: '返回详情页'
    }
  },
  DetailChild: {
    screen: DetailChild,
    navigationOptions: {
      title: '我是详情child',
      // headerBackTitle: '返回详情页'
    }
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'blue'
    // }
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