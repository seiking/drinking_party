import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default class KingGameScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params['current_names'])
    return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>王様は</Text>
          <Text style={styles.title}>●●●</Text>
          <Text style={[styles.title, styles.margin_bottom]}>です</Text>
          <Text style={[styles.title, styles.margin_bottom]}>1から●番に命令をしてください</Text>
        </View>
        <View style={styles.bottom_button}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => console.log('aaa')}
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
