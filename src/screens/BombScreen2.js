import React from "react";
import { View, Text, Image, Button } from "react-native";

export default class BombScreen2 extends React.Component {
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
      </View>
    );
  }
}