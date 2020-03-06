/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorld from './views/HelloWord'
import Touch from './views/Touch'
import Scroll from './views/Scroll'
import Flatlist from './views/Flatlist'
import SectionListBasics from './views/SectionListBasics'
import FetchExample from './views/FetchExample'
import MovieList from './views/MovieList'
import Animate from './views/Animate'
import FlatListDemo from './views/FlatListDemo'
import Demo1 from './views/Demo1'
import AppNavigationStack from './AppNavigationStack'
import AppNavigationTab from './AppNavigationTab'

AppRegistry.registerComponent(appName, () => AppNavigationTab);
