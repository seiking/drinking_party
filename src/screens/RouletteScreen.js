import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView} from 'react-native';
import { AsyncStorage } from "react-native"
import MenberForm from '../components/MenberForm'

export default class RouletteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_names: {},
      listSize: 3
    };
  }

  componentWillMount = async () =>{
    try{
      const value = await AsyncStorage.getItem('current_names');
      if(value !== null){
        const getData = JSON.parse(value)
        const listSize = Object.keys(getData).length
        this.setState({current_names: getData, listSize})
      }else{
        console.log(error)
      }
    }catch(error){
      console.log(error);
    }
  }

  storeData = async (name) => {
    // validation
    const data = Object.values(name).filter(Boolean).reduce((result, current, index) => {
      result[index] = current;
      return result;
    }, {});
    try{
      await AsyncStorage.setItem('current_names',JSON.stringify(data));
    }catch(error){
      console.log(error);
    }
  }

  handleChangeText = (text, num) => {
    const menberLists = this.state.current_names
    menberLists[num] = text
    this.setState({current_names: menberLists})
  }

  increaseNamesList = () => this.setState({listSize: this.state.listSize + 1})

  deleteMenber = num =>  {
    const menberLists = this.state.current_names
    delete menberLists[num]
    const data = Object.values(menberLists).filter(Boolean).reduce((result, current, index) => {
      result[index] = current;
      return result;
    }, {});
    this.storeData(data)
    this.setState({current_names: data, listSize: this.state.listSize - 1})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.navigation.state.params['title']}</Text>
        <MenberForm
          names={this.state.current_names}
          listSize={this.state.listSize}
          increaseNamesList={this.increaseNamesList}
          handleChangeText={this.handleChangeText}
          storeData={this.storeData}
          deleteMenber={this.deleteMenber}
        />
        {/* <Button */}
        {/*   title='メンバーリストへ' */}
        {/*   onPress={() => this.props.navigation.navigate('MenberLists',{aaa: 'ddd'})} */}
        {/* /> */}
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
  title: {
    fontSize: 20
  }
});
