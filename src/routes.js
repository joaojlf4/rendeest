import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomePage from './pages/Home';
import Expenses from './pages/Expenses';
import Comunity from './pages/Comunity';
import Ranking from './pages/Ranking';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Home': 
                return <Feather name="book-open" color={color} size={size + 2} style={{marginBottom: -15}}/>
              case 'Balance': 
                return <Feather name="target" color={color} size={size} style={{marginBottom: -15}}/>
              case 'Comunity': 
                return <Feather name="users" color={color} size={size} style={{marginBottom: -15}}/>
              case 'Ranking': 
                return <Feather name="award" color={color} size={size} style={{marginBottom: -15}}/>
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFF',
          activeBackgroundColor: '#00CDA8',
          inactiveBackgroundColor: '#00DEB6',
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomePage} 
          options={({
            title: "",
          })}/>
          <Tab.Screen name="Comunity" component={Comunity}
      options={{
          title: ""
        }}/>
        <Tab.Screen name="Balance" component={Expenses}
        options={{
            title: ""
          }}/>
        
        <Tab.Screen name="Ranking" component={Ranking}
      options={{
          title: ""
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}