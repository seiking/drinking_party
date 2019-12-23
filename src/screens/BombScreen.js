import React from "react";
import { View, Text, Image, Button } from "react-native";

export default class BombScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onRandom = () => {
    this.setState({ value: "?" });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://stockmaterial.net/wp/wp-content/uploads/img/other_bomb01_01.png"
          }}
        />
        <Text>15分の</Text>
        <Text>{this.state.value}</Text>
        <Button
          title="start"
          onPress={() => this.props.navigation.navigate("Bomb2")}
        />
        <Button title="おまかせ" onPress={this.onRandom} />
      </View>
    );
  }
}
