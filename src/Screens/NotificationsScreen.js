import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationsScreen = ({navigation, route}) => {
  const {ItemName, ItemId} = route.params;

  return (
    <View style={styles.body}>
      <View style={styles.view__button}>
      </View>
      <View style={styles.view__text}>
        <Text style={styles.text}>NotificationsScreen</Text>
        <Text style= {styles.text}>{ItemName}</Text>
        <Text style= {styles.text}>{ItemId}</Text>
      </View>
    </View>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
  body: {
    flex:1,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Roboto-Medium'
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
    justifyContent:'center',
  }
    
})


