import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Home'
          component={BottomNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Navigation;
