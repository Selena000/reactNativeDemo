import React, { Component } from 'react'
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons'
import { connect, Provider } from 'react-redux'
import { 
  createReactNavigationReduxMiddleware, 
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'

import AppContainter from './views/Screen/Index'
import appReducer from './reducer'
import { StatusBar } from 'react-native'

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)
const AppReduxContainer = createReduxContainer(AppContainter)
const mapStateToProps = state => {
  return {
    state: state.nav
  }
}
const store = createStore(appReducer, applyMiddleware(middleware));
const AppWithNavigationState = connect(mapStateToProps)(AppReduxContainer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content"></StatusBar>
          <AppWithNavigationState/>
      </Provider>
    )
  }
}

export default App



// export default AppNavigator
// export default connect(mapStateToProps)(AppWithNavigationState)

// export default class App extends Component {
//   render() {
//     RootStack = createAppContainer(RootStack)
//     return (
//       <RootStack/>
//     )
//   }
// }
