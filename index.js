import { AppRegistry } from 'react-native';
import App from './APP/Navigations/navigation';
// import App from './APP/screens/TestingScreen';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
