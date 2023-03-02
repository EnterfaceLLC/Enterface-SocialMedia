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
import { useAuthContext } from '../contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import colors from '../theme/colors';

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
  const { user } = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.tertairy} size={75} />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name='Auth'
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name='Home'
              component={BottomNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='Comments'
              component={CommentScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Navigation;
