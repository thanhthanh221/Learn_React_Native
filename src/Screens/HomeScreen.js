import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../Utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';

const HomeScreen = ({navigation, route}) => {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const data = [
    {
      country: 'United States',
      city: 'New York',
      latitude: 40.6976701,
      longitude: -74.2598701,
    },
    {
      country: 'Australia',
      city: 'Sydney',
      latitude: -34.0889509,
      longitude: 150.1197041,
    },
    {
      country: 'Germany',
      city: 'Berlin',
      latitude: 52.5175949,
      longitude: 13.4039885,
    },
    {
      country: 'France',
      city: 'Paris',
      latitude: 48.8589466,
      longitude: 2.2769951,
    },
    {
      country: 'Viet Nam',
      city: 'Ha Noi',
      latitude: 20.7380475,
      longitude: 105.8933073,
    },
  ];

  const handleNotification = (item, index) => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: item.country,
      message: 'Chào mừng bạn đến với ' + item.city,
      bigText: 'Chào mừng bạn đến với ' + item.city +' Thành phố này đẹp quá -,-',
      color: "red",
      id: index,
      largeIconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'
    });
  };

  return (
    <View style={styles.body}>
      <View style={[styles.view__text, GlobalStyle.CustomFont]}>
        <Text style={[styles.text, GlobalStyle.CustomFont]}>Home</Text>
        <Text style={styles.text}>
          Xin Chào {name} - {age}
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Map', {
                  city: item.city,
                  longitude: item.longitude,
                  latitude: item.latitude,
                }),
                  handleNotification(item, index);
              }}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.country}</Text>
                <Text style={styles.city}>{item.city}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00ff00',
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  view__button: {
    alignItems: 'flex-end',
  },
  view__text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 20,
    width: 350,
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    marginTop: 7,
  },
});
