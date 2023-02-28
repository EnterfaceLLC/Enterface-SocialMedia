import React from 'react';

//* NAVIGATION \\
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomTabNavigator';

//* TYPES \\
import { RootNavigatorParamList } from '../types/navigation';

//* SCREENS \\
import CommentScreen from '../screens/CommentScreen';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['enterfacesm://', 'https://enterfacesm.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              Profile: 'user/:userId'
            }
          }
        }
      }
    },
  }
}

//* CODE BELOW \\
const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName='Auth' >
        <Stack.Screen
          name='Auth'
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />

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
