import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView} from 'react-native';
import { AsyncStorage } from "react-native"

const MenberListFrom = props => {
  const menberLists = []
  for (let i = 0; i< props.listSize; i++) {
    menberLists.push(
      <TextInput
        key={i}
        style={{ width: 200, height: 44, margin: 8, backgroundColor: 'yellow' }}
        onChangeText={text => props.handleChangeText(text, i)}
        value={props.names[i]}
      />
    )
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {menberLists}
      <Button
        title='増やす'
        onPress={props.increaseNamesList}
      />
    </ScrollView>
  );
}

export default class MenberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: {},
      listSize: 3
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
        this.setState({names: getData, listSize})
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
  increaseNamesList = () => this.setState({listSize: this.state.listSize + 1})
  render() {
    return (
      <View style={styles.container}>
        <MenberListFrom
          names={this.state.names}
          handleChangeText={this.handleChangeText}
          listSize={this.state.listSize}
          increaseNamesList={this.increaseNamesList}
        />
        <Button
          title='保存'
          onPress={()=>this.storeData(this.state.names)}
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
