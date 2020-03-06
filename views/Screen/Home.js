import { createStackNavigator } from 'react-navigation-stack'

import HomeTop from './HomeStack/HomeTop'
import HomeChild from './HomeStack/HomeChild'
import HomeChild2 from './HomeStack/HomeChild2'

export default createStackNavigator({
  HomeTop: {
    screen: HomeTop,
    title: 'HomeTop'
  },
  HomeChild: {
    screen: HomeChild,
    title: 'HomeChild'
  },
  HomeChild2: {
    screen: HomeChild2,
    title: 'HomeChild2'
  },
},
{
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'rgb(29,216,200)',
    },
    gesturesEnabled: true,
    gestureResponseDistance: 100,
  },
},)