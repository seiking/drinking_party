// import React from 'react';
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default class App extends React.Component {
  // //コンストラクタ
  // constructor(props){
  //   super(props); //必ず呼ぶ
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title_big}>飲み会</Text>
        <Text style={styles.title_medium}>ゲーム</Text>
        {/* <Image
          style={{ width: 50, height: 50 }}
          source={require("@expo/snack-static/react-native-logo.png")}
        /> */}
        <Text style={styles.title_small}>ver 1.00</Text>
        <Text>ルーレットaa</Text>
        <Text>〇〇〇〇</Text>
        <Text>ルーレットbb</Text>
        <Text>おまかせ</Text>
        <Text>古今東西ゲーム</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECE0",
    alignItems: "center",
    justifyContent: "center"
  },
  title_big: {
    fontSize: 75,
    color: "#DB9B88"
  },
  title_medium: {
    fontSize: 56,
    color: "#DB9B88"
  },
  title_small: {
    fontSize: 19,
    color: "#DB9B88"
  }
});
