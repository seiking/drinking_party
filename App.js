import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import BombScreen from "./src/screens/BombScreen";
import BombScreen2 from "./src/screens/BombScreen2";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    GameMenu: GameMenuScreen,
    Bomb: BombScreen,
    Bomb2: BombScreen2
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
