import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { AdMobInterstitial } from 'expo-ads-admob'

export default class GameMenuScreen extends React.Component {
  async Interstitial() {
    if (__DEV__) {
      AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712') // テスト広告
    } else {
      if (Platform.OS === 'ios') {
        AdMobInterstitial.setAdUnitID('広告ユニットID') //iOS
      } else {
        AdMobInterstitial.setAdUnitID('広告ユニットID') //android
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
        <TouchableHighlight
          style={styles.button}
          onPress={this.aaa}
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
          <Text style={styles.bottom_button_text}>爆弾ゲーム</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.aaa}
          underlayColor={'#FDF9F7'}
        >
          <Text style={styles.bottom_button_text}>王様ゲーム</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.Interstitial}
          underlayColor={'#FDF9F7'}
        >
          <Text style={styles.bottom_button_text}>古今東西ゲーム</Text>
        </TouchableHighlight>
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
  body: {
    flex: 3,
    backgroundColor: '#FFECE0',
    width: '100%'
  },
  bottom_button: {
    flex: 4,
    // backgroundColor: 'red',
    width: '100%'
  },
  bottom_button_text: {
    color: '#DB9B88'
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(243,223,223,0.38)',
    width: '100%',
    height: '10%'
  }
})
