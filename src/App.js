/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//Bình Luận như thế này

import React  from 'react';
import { Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../Screens/HomeScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Tab = createBottomTabNavigator(); 

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'ios-information-circle-outline';
            } 
            else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'ios-list';
            }
            else if(route.name === 'Notifications') {
              iconName = 'notifications-sharp'
            }
            else {
              iconName ='person-sharp'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3399FF',
          tabBarInactiveTintColor: '#888888',
          tabBarShowLabel: true,
          tabBarLabelStyle:{fontSize: 12},
          tabBarStyle: {
            height: 55
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarBadge: 4}} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;


