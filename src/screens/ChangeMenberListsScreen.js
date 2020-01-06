import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AsyncStorage } from "react-native"
import MenberListFrom from '../components/MenberForm'

export default class MenberListsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: {},
      // listSize: 3
    };
  }

  storeData = async (name) => {
    // validation
    const data = Object.values(name).filter(Boolean).reduce((result, current, index) => {
      result[index] = current;
      return result;
    }, {});
    try{
      await AsyncStorage.setItem('name',JSON.stringify(data));
    }catch(error){
      console.log(error);
    }
  }

  getData = async () => {
    try{
      const value = await AsyncStorage.getItem('name');
      if(value !== null){
        const getData = JSON.parse(value)
        const listSize = Object.keys(getData).length
        console.log(listSize)
        this.setState({names: getData})
      }else{
        console.log(error)
      }
    }catch(error){
      console.log(error);
    }
  }

  getKeys = async () => {
    const value = await AsyncStorage.getAllKeys()
    console.log(value)
  }

   handleChangeText = (text, num) => {
     const menberLists = this.state.names
     menberLists[num] = text
     this.setState({names: menberLists})
   }
  render() {
    return (
      <View style={styles.container}>
        <MenberListFrom
          names={this.state.names}
          handleChangeText={this.handleChangeText}
          storeData={this.storeData}
        />
        <Button
          title='取得'
          onPress={this.getData}
        />
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
