import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';

export default function Map({route}) {
  const {city, latitude, longitude} = route.params;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{city}</Text>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
