import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default class KingGameResultScreen extends React.Component {
  render() {
    citizen_names = this.props.navigation.state.params['citizen_names_ary']
    const list = []
    for(let i in citizen_names){
      list.push(<Text key={i} style={styles.list_text}>{i}番: {citizen_names[i]}</Text>)
    }
    return (
      <View style={styles.container}>
        <View>
          {list}
        </View>
        <View style={styles.bottom_button}>
          <View  style={styles.margin_bottom}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate("MenberLists") }
              underlayColor={"#FDF9F7"}
            >
              <Text style={styles.bottom_button_text}>再プレイ</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate("GameMenu") }
              underlayColor={"#FDF9F7"}
            >
              <Text style={styles.bottom_button_text}>ゲーム一覧へ</Text>
            </TouchableHighlight>
          </View>
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
  list_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#DB9B88",
    marginBottom: 15,
  },
  margin_bottom: {
    marginBottom: 40
  },
  bottom_button: {
    width: "80%"
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
