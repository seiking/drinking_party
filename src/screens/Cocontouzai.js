import React from "react";
import { View, Text, Button } from "react-native";

const theme = ["A", "B", "C", "D", "E", "F", "G"];

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
      <View>
        <Text>古今東西</Text>
        <Text>ゲーム</Text>
        <Text>お題</Text>
        <Text>{this.state.theme}</Text>
        <Button title={this.state.value} onPress={this.onReplay} />
      </View>
    );
  }
}
