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
import {createDrawerNavigator} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './Screens/HomeScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerPosition:'left',
          drawerType:'front',
          swipeEdgeWidth:100,
          drawerHideStatusBarOnOpen:false,
          overlayColor: '#ff00ff',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#00ff'
          }
          
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Home',
            drawerIcon: ({focused}) => (
              <Ionicons color={focused ? 'red': 'blue'} name="home-outline" size={20}></Ionicons>
            )
        }}
        initialParams={{name: 'Quang'}}
          />
        <Drawer.Screen 
          name="Notifications" 
          component={NotificationsScreen}
          options={{
            title: 'Notification',
            drawerIcon: ({focused}) => (
              <Ionicons 
                    color={focused ? 'red': 'blue'} 
                    name="notifications-outline" 
                    size={20}>
              </Ionicons>
            )
          }}
          initialParams={{ItemName: 'Bim bim', ItemId: '21'}}
          />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default App;


