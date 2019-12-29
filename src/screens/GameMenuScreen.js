import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { AdMobInterstitial } from 'expo-ads-admob'

export default class GameMenuScreen extends React.Component {
  async Interstitial() {
    if (__DEV__) {
      AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712') // テスト広告
    } else {
      if (Platform.OS === 'ios') {
        AdMobInterstitial.setAdUnitID('ca-app-pub-5794775692843907/1557200428') //iOS
      } else {
        AdMobInterstitial.setAdUnitID('ca-app-pub-5794775692843907/8833055213') //android
      }
    }
    await AdMobInterstitial.requestAdAsync()
    await AdMobInterstitial.showAdAsync()
  }
  aaa = () => {
    console.log('aaa')
  }
  render() {
    return (
      <View style={styles.container}>
      <View>
        <View style={styles.game_lists}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Roulette')}
            underlayColor={'#FFECE0'}
            activeOpacity={0.7}
            underlayColor={'#FDF9F7'}
          >
            <Text style={styles.bottom_button_text}>ルーレット</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Bomb')}
            underlayColor={'#FDF9F7'}
          >
          <View style= {{alignItems: 'center'}}>
            <Text style={styles.bottom_button_text}>爆弾</Text>
            <Text style={styles.bottom_button_text}>ゲーム</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.aaa}
            underlayColor={'#FDF9F7'}
          >
          <View style= {{alignItems: 'center'}}>
            <Text style={styles.bottom_button_text}>王様</Text>
            <Text style={styles.bottom_button_text}>ゲーム</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.Interstitial}
            underlayColor={'#FDF9F7'}
          >
          <View style= {{alignItems: 'center'}}>
            <Text style={styles.bottom_button_text}>古今東西</Text>
            <Text style={styles.bottom_button_text}>ゲーム</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.Interstitial}
            underlayColor={'#FDF9F7'}
          >
          <View style= {{alignItems: 'center'}}>
            <Text style={styles.bottom_button_text}>不平等</Text>
            <Text style={styles.bottom_button_text}>割り勘</Text>
          </View>
          </TouchableHighlight>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  game_lists: {
    flex:1, flexDirection:'row', flexWrap: 'wrap',
    // backgroundColor: 'blue',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  bottom_button_text: {
    color: '#DB9B88'
  },
  button: {
    backgroundColor: '#C33B36',
    width: '40%',
    height: 140,
    borderRadius: 13,
    marginBottom: 30,
    alignItems: 'center',
  },
  bottom_button_text: {
    color: '#FFF',
    fontSize: 25,
    // letterSpacing: 10,
    fontWeight: 'bold'
  },
})
