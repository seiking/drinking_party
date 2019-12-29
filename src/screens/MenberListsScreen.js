import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView} from 'react-native';
import { AsyncStorage } from "react-native"

export default class MenberListsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listsKey: {},
    };
  }

  getKeys = async () => {
    const value = await AsyncStorage.getAllKeys()
    this.setState({listsKey: value})
  }
  render() {
    console.log(this.state.listsKey[0])
    return (
      <View style={styles.container}>
        <Text> ルーレット </Text>
        <Button
          title='鍵を取得'
          onPress={this.getKeys}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
});
