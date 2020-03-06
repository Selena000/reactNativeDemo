import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './views/Screen/Home'
import Detail from './views/Screen/Detail'
import DetailChild from './views/Screen/DetailChild'
import Welcome from './views/Screen/Welcome'


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      // headerBackTitle: '返回首页'
      // tabBarIcon: ({ color, size }) => (
      //   <MaterialCommunityIcons name="home" color={color} size={size} />
      // )
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={"home"} size={26} style={{ color: tintColor }} />
      )
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '详情',
      // tabBarIcon: ({ color, size }) => (
      //   <MaterialCommunityIcons name="bell" color={color} size={size} />
      // )
      // tabBarIcon: 
      // headerBackTitle: '返回详情页'
    }
  },
  DetailChild: {
    screen: DetailChild,
    navigationOptions: {
      title: 'child',
      // tabBarIcon: ({ color, size }) => (
      //   <MaterialCommunityIcons name="account" color={color} size={size} />
      // )
      // headerBackTitle: '返回详情页'
    }
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'blue'
    // }
    activeTintColor: '#e91e63'
  }
})

const InitNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
})

const SwitchNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: TabNavigator
})

const AppNavigator = createAppContainer(SwitchNavigator)

export default AppNavigator

// export default class App extends Component {
//   render() {
//     RootStack = createAppContainer(RootStack)
//     return (
//       <RootStack/>
//     )
//   }
// }
