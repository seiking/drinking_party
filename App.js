import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import GameMenuScreen from "./src/screens/GameMenuScreen";
import BombScreen from "./src/screens/BombScreen";
import BombScreen2 from "./src/screens/BombScreen2";
import MenberListsScreen from "./src/screens/MenberListsScreen";
import RouletteScreen from "./src/screens/RouletteScreen";
import KingGameScreen from "./src/screens/KingGameScreen";
import KingGameResultScreen from "./src/screens/KingGameResultScreen";
import HubyoudouWarikanScreen from "./src/screens/HubyoudouWarikan";
import Cocontouzai from "./src/screens/Cocontouzai";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    GameMenu: GameMenuScreen,
    Bomb: BombScreen,
    Bomb2: BombScreen2,
    MenberLists: MenberListsScreen,
    Roulette: RouletteScreen,
    KingGame: KingGameScreen,
    KingGameResult: KingGameResultScreen,
    HubyoudouWarikan: HubyoudouWarikanScreen,
    Touzai: Cocontouzai
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
