
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import BombScreen from './src/screens/BombScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Bomb: BombScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
