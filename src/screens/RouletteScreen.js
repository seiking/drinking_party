import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView} from 'react-native';
import MenberForm from '../components/MenberForm'

export default class RouletteScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ルーレット </Text>
        <MenberForm/>
        <Button
          title='メンバーリストへ'
          onPress={() => this.props.navigation.navigate('MenberLists')}
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
