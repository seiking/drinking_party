import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  // //コンストラクタ
  // constructor(props){
  //   super(props); //必ず呼ぶ
  // }
  aaa = () => {
    console.log('aaa')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title_big}>飲み会</Text>
          <Text style={styles.title_medium}>ゲーム</Text>
          <Text style={styles.title_small}>ver 1.00</Text>
        </View>
        <View style={styles.bottom_button}>
        <TouchableHighlight style={styles.button} onPress={this.aaa} >
          <Text style={styles.bottom_button_text}>ルーレット</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Bomb')} >
          <Text style={styles.bottom_button_text}>爆弾ゲーム</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.aaa} >
          <Text style={styles.bottom_button_text}>王様ゲーム</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.aaa} >
          <Text style={styles.bottom_button_text}>古今東西ゲーム</Text>
        </TouchableHighlight>
        </View>
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
    flex: 3,
    backgroundColor: "#FFECE0",
    width: '100%'
  },
  bottom_button: {
    flex: 4,
    // backgroundColor: 'red',
    width: '100%'
  },
  bottom_button_text: {
    color: '#DB9B88'
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(243,223,223,0.38)',
    width: '100%',
    height: '10%'
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
