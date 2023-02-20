import React from 'react';

//* NAVIGATION \\
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomTabNavigator';

//* TYPES \\
import { RootNavigatorParamList } from './types';

//* SCREENS \\
import CommentScreen from '../screens/CommentScreen';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();


//* CODE BELOW \\
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
          name='Comments'
          component={CommentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Navigation;
