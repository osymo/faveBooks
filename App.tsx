import {Image, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, FavoriteScreen } from './screens';

const listIcon = require("./assets/icons/list.png")
const listIconOrange = require("./assets/icons/list-orange.png")
const heartIcon = require("./assets/icons/heart.png")
const heartIconOrange = require("./assets/icons/heart-orange.png")

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#FF6928',
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600'
        }
      }}> 
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: ({focused}) => focused ? <Image source={listIconOrange} style={{width: 24, height: 24}}/> : <Image source={listIcon} style={{width: 24, height: 24}}/>}}/>
        <Tab.Screen name="Favorites" component={FavoriteScreen} options={{ headerShown: false, tabBarIcon: ({focused}) => focused ? <Image source={heartIconOrange} style={{width: 24, height: 24}}/> : <Image source={heartIcon} style={{width: 24, height: 24}}/>}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}