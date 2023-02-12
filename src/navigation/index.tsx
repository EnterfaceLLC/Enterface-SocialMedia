import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/images/insta.png';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed' >
        <Stack.Screen
          name='Feed'
          component={HomeScreen}
          options={{ headerTitle: HeaderTitle, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image source={logo} style={{ width: 90, height: 90 }} />
  );
};


export default Navigation;
