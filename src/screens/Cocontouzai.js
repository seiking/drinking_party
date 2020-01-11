import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const theme = ["嵐のメンバー", "B", "C", "D", "E", "F", "G"];

export default class Cocontouzai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "スタート",
      theme: "??????"
    };
  }

  onReplay = () => {
    var num = Math.floor(Math.random() * 7);
    this.setState({ value: "再プレイ", theme: theme[num] });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>古今東西</Text>
          <Text style={[styles.title, styles.margin_bottom]}>ゲーム</Text>
          <Text style={[styles.title, styles.margin_bottom]}>お題</Text>
          <View style={styles.theme_border}>
            <Text style={styles.theme_font}>{this.state.theme}</Text>
          </View>
        </View>
        <View style={styles.bottom_button}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onReplay}
            underlayColor={"#FDF9F7"}
          >
            <Text style={styles.bottom_button_text}>{this.state.value}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15%',
  },
  title_container: {
    alignItems: 'center',
  },
  margin_bottom: {
    marginBottom: 40
  },
  title: {
    fontSize: 40,
    color: "#DB9B88",
    fontWeight: "bold",
    marginBottom: 10
  },
  theme_border: {
    width: 360,
    height: 100,
    padding: 5,
    backgroundColor: '#FFFDFC',
    borderWidth: 1,
    borderColor: "#DB9B88",
    alignItems: 'center',
    justifyContent: 'center',
  },
  theme_font:{
    fontSize: 30,
    fontWeight: '300',
    color: '#DB9B88'
  },
  bottom_button: {
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
});
