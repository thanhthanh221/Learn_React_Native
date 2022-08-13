import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../Utils/GlobalStyle'

const HomeScreen = ({navigation,route}) => {
  const onPressHandler = () => {
    navigation.navigate('Notifications', {ItemName: 'Bim bim', ItemId: '12'})

  }
  const {name} = route.params;
  return (
    <View style={styles.body}>
      <View style={styles.view__button}>
        <Pressable
          onPress={onPressHandler}
          style={[styles.button]}
          >
          <Text style={GlobalStyle.ButtonText}>To Home</Text>
        </Pressable>
      </View>
      <View style={[styles.view__text, GlobalStyle.CustomFont]}>
        <Text style={[styles.text, GlobalStyle.CustomFont]}>HomeScreen</Text>
        <Text style={styles.text}>Xin Chào {name}</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  body: {
    flex:1,
  },
  text: {
    fontSize:30,
  },
  button: {
    backgroundColor:'#00ff00',
    borderRadius:20,
    width:150,
    alignItems:'center',
    height: 50,
    justifyContent: 'center'
  },
  view__button: {
    alignItems:'flex-end',
  },
  view__text: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
    
})
