/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//Bình Luận như thế này

import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Map from './Screens/Map';
import Login from './Screens/Login';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Login'
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = 'ios-list';
              } else if (route.name === 'Notifications') {
                iconName = 'notifications-outline';
              } else if (route.name === 'Login') {
                iconName = 'user-outline';
              } else {
                iconName = 'map-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Notifications"
            initialParams={{ItemName: 'Bim bim', ItemId: '21'}}
            component={NotificationsScreen}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{headerShown: false}}
            initialParams={{
              city: 'Ha Noi',
              latitude: 20.7380475,
              longitude: 105.8933073,
            }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            initialParams={{count: 1}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
