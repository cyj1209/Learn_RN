/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigation from './src/navigators/AppNavigation';
import {name as appName} from './app.json';

console.log('here is index doc');
AppRegistry.registerComponent(appName, () => AppNavigation);
