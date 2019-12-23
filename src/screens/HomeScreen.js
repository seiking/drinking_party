import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

import { AdMobBanner } from "expo-ads-admob";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            style={styles.beer_image}
            source={require("../images/Beer.png")}
          />
          <Text style={styles.title}>飲み会</Text>
          <Text style={styles.title}>ゲーム</Text>
        </View>
        <View style={styles.bottom_button}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate("GameMenu")}
            underlayColor={"#FDF9F7"}
          >
            <Text style={styles.bottom_button_text}>スタート</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>ver 1.0.0</Text>
        </View>
        <AdMobBanner
          adUnitID={
            __DEV__
              ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
              : Platform.select({
                  ios: "広告ユニットID", // iOS
                  android: "広告ユニットID" // android
                })
          }
          bannerSize="banner"
          servePersonalizedAds
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  beer_image: {
    width: 140,
    height: 150,
    marginTop: 30,
    marginBottom: 30
  },
  bottom_button: {
    flex: 0.4,
    width: "80%"
  },
  button: {
    height: 40,
    borderRadius: 13,
    backgroundColor: "#C33B36",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom_button_text: {
    color: "#FFF",
    fontSize: 20,
    letterSpacing: 10,
    fontWeight: "bold"
  },
  title: {
    fontSize: 70,
    color: "#DB9B88"
  },
  title_small: {
    fontSize: 19,
    color: "#DB9B88"
  }
});
