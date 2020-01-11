import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default class KingGameScreen extends React.Component {
  aaa = () => {
    console.log(current_names_ary)
  }
  shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
  render() {
    const current_names = this.props.navigation.state.params['current_names']
    const current_names_ary = Object.values(current_names)
    const king_name = current_names_ary[Math.floor(Math.random() * current_names_ary.length)]
    const citizen_names_ary = this.shuffle(current_names_ary.filter(name => name !== king_name))
    return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>王様は</Text>
          <Text style={styles.king_name}>{king_name}</Text>
          <Text style={[styles.title, styles.margin_bottom]}>です</Text>
          <Text style={[styles.title, styles.margin_bottom]}>1から{citizen_names_ary.length}番に命令をしてください</Text>
        </View>
        <View style={styles.bottom_button}>
          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("KingGameResult", {
                citizen_names_ary: citizen_names_ary,
              })
            }
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
    fontSize: 35,
    color: "#DB9B88",
    fontWeight: "bold",
    marginBottom: 10
  },
  king_name: {
    fontSize: 55,
    color: "#DB9B88",
    fontWeight: "bold",
    marginBottom: 10
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
