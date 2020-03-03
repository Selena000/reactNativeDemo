/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorld from './views/HelloWord'

AppRegistry.registerComponent(appName, () => HelloWorld);
