import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";

export default class BombScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      isRandom: false
    };
  }
  onRandom = () => {
    this.setState({ isRandom: true, value: Math.floor(Math.random() * 15) });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-between', marginTop: '15%'}}>
        <View style={{alignItems: "center"}}>
          <View style={{flexDirection: 'row', marginTop: '15%', marginBottom: '15%'}}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri:
                "https://stockmaterial.net/wp/wp-content/uploads/img/other_bomb01_01.png"
              }}
            />
            <Text style={[styles.bomb_kakuritu_font, styles.small_font]}>x {this.state.isRandom? '?' : this.state.value}</Text>
            <View>
              <Image
                style={styles.slush}
                resizeMode='contain'
                source={require("../images/slush.png")}
              />
              <Text style={[styles.bomb_kakuritu_font, styles.midlle_font]}>15</Text>
            </View>
          </View>
          <Text style={[styles.bomb_kakuritu_font, styles.small_font]}>15分の{this.state.isRandom? '?' : this.state.value}</Text>
          <TouchableHighlight
            style={styles.random_button}
            onPress={this.onRandom}
            underlayColor={"#FDF9F7"}
          >
            <Text style={styles.bomb_kakuritu_font}>おまかせ</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.bottom_button}>
          <TouchableHighlight
            style={styles.button}
            onPress={() =>
                this.props.navigation.navigate("Bomb2", {
                  fire_size: this.state.value
                })}
            underlayColor={"#FDF9F7"}
          >
            <Text style={styles.bottom_button_text}>次へ</Text>
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
  bomb_kakuritu_font: {
    color: "#DB9B88",
    fontWeight: '800',
  },
  small_font:{
    fontSize: 40,
    marginTop: 10,
    marginRight: 15,
  },
  midlle_font:{
    fontSize: 80,
    marginLeft: 20,
  },
  slush:{
    width: 150,
    height: 150,
    marginLeft: -70,
    marginBottom: -80,
  },
  bottom_button: {
    width: "80%"
  },
  random_button: {
    marginTop: 15,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FBF4F4',
    borderWidth: 1,
    borderRadius: 3,
  },
  button: {
    height: 40,
    borderRadius: 13,
    backgroundColor: "#C33B36",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#911D18',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  bottom_button_text: {
    color: "#FFF",
    fontSize: 20,
    letterSpacing: 10,
    fontWeight: "bold"
  },
});
