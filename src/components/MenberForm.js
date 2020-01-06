import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MenberListFrom = props => {
  let {listSize} = props
  const menberLists = []

  const [isDelete, setIsDelete] = useState(false)

  const deleteMenber = num => {
    setIsDelete(true)
    props.deleteMenber(num)
  }
  if (listSize === 0 && isDelete === false) {
    listSize = 1
  }

  for (let i = 0; i< listSize; i++) {
    menberLists.push(
      <View key={i} style={{ flexDirection: 'row', alignItems: 'center'}}>
      <FontAwesome name="minus-circle" size={30} color="#E50F0F" onPress={() => deleteMenber(i)}/>
        <TextInput
          style={styles.TextInput}
          onChangeText={text => props.handleChangeText(text, i)}
          onBlur={()=>props.storeData(props.names)}
          value={props.names[i]}
          placeholder='名前を入力'
          placeholderTextColor='#7E7E7E'
        />
      </View>
    )
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }} style={styles.MenberListScrollView}>
      {menberLists}
      <FontAwesome name='plus-circle' size={32} color="#2AC10F" onPress={props.increaseNamesList}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    width: '60%',
    height: 40,
    margin: 8, // 左のボタンとの間隔を開ける
    paddingLeft: 10,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 20,
  },
  MenberListScrollView: {
    width: '100%',
    // backgroundColor: 'red',
  }
});

export default MenberListFrom
