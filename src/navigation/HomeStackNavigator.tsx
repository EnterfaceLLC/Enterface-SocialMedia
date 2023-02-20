import { Image } from 'react-native';

//* NAVIGATION \\
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREENS \\
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

//* TYPES \\
import { HomeStackNavigatorParamList } from './types';

//* STYLES, ICONS, ASSETS \\
import logo from '../assets/images/insta.png';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

//* CODE BELOW \\
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
