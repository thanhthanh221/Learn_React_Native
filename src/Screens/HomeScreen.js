import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../Utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const HomeScreen = ({navigation, route}) => {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const data = [
    {
      country: 'United States',
      city: 'New York',
    },
    {
      country: 'Australia',
      city: 'Sydney',
    },
    {
      country: 'Germany',
      city: 'Berlin',
    },
    {
      country: 'France',
      city: 'Paris',
    },
  ];

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
            <View style={styles.item}>
              <Text style={styles.text}>{item.country}</Text>
              <Text>{item.city}</Text>
            </View>
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
    fontWeight:'bold'
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
    justifyContent:'center',
    alignItems:'center'
  },
});
