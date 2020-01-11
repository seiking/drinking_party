import React from "react";
import { View, Text, Image, Button,TextInput,StyleSheet} from "react-native";

export default class HubyoudouWarikanScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params['current_names'])
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>不平等割り勘</Text>
        <TextInput style={styles.textInput}/>
        <Button title="決定"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#bbb',
    marginRight: 5,
    width: '80%'
  }
});
