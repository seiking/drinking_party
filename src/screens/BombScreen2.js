import React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";

export default class BombScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_num: [],
      isFinish: false
    };
  }

  aaa = (index, fire_num) => {
    if(fire_num.includes(index)){
      this.setState({isFinish: true})
    } else {
      const list_num = this.state.list_num
      list_num.push(index)
      this.setState({ list_num })
    }
  }
  fire_num = []
  render() {
    while(this.fire_num.length < this.props.navigation.state.params['fire_size']){
      const random = Math.floor(Math.random() * 15)
      if(!this.fire_num.includes(random)){
        this.fire_num.push(random)
      }
    }
    const bombLists = []
    console.log(this.fire_num)
    const finish_gif = [
      'https://img.gifmagazine.net/gifmagazine/images/3995033/original.gif',
    ]
    for (let i = 0; i< 15; i++) {
      !this.state.list_num.includes(i) ?
      bombLists.push(
        <TouchableHighlight style={styles.bomb_image} key={i} onPress={() => this.aaa(i, this.fire_num)}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={{
              uri:
              "https://stockmaterial.net/wp/wp-content/uploads/img/other_bomb01_01.png"
            }}
          />
        </TouchableHighlight>
      )
      : bombLists.push(<View style={styles.bomb_image} key={i}></View>)
    }
    return (
      <>
      {
        this.state.isFinish ?
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ height: '100%', width: '100%' }}
              source={{
                uri: finish_gif[Math.floor(Math.random() * finish_gif.length)]
              }}
            />
          </View>
        : <View style={styles.bombLists}>{bombLists}</View>
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
  bombLists: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    marginTop: '10%'
  },
  bomb_image: {
    height: '10%',
    width: '20%',
    margin: 20
  }
})
