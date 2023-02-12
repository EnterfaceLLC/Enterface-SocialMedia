import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import logo from '../assets/images/insta.png';
import { Image } from 'react-native';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center'
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
      // options={{title: ""}}
      />
    </HomeStack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image source={logo} style={{ width: 90, height: 90 }} />
  );
};

export default HomeStackNavigator;
