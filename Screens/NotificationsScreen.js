import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationsScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.goBack()


  }
  return (
    <View style={styles.body}>
      <View style={styles.view__button}>
        <Pressable
        onPress={onPressHandler}
          style={styles.button}
          >
          <Text>To Notifications</Text>
        </Pressable>
      </View>
      <View style={styles.view__text}>
        <Text style={styles.text}>NotificationsScreen</Text>
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
    fontWeight:'bold',
    fontSize:30,
  },
  button: {
    backgroundColor:'#00ff',
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


