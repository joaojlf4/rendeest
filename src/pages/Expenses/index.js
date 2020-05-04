import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Controls from '../../pages/Controls';
import CreateExpense from '../CreateExpense';

const Stack = createStackNavigator();

export default function Expenses() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Controls" 
        component={Controls}
        options={({ route }) => ({
          headerShown: false
        })}/>
      <Stack.Screen 
        name="CreateExpense" 
        component={CreateExpense}
        options={({ route }) => ({
          headerTitleAlign: 'center',
          headerTitle: "Adicionar ganho/despesa",
          headerTintColor: "#8842E8"
        })}/>
    </Stack.Navigator>
  );
}
