//* SCREENS \\
import PostUploadScreen from "../screens/PostUploadScreen";

//* STYLES, ICONS \\
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from "../theme/colors";

//* NAVIGATION \\
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

//* TYPES \\
import { BottomTabNavigatorParamList } from "../types/navigation";
import SearchTabNavigator from "./SearchTabNavigator";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

//* CODE BELOW \\
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home-filled"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="search"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="user-circle-o"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>

  );
};

export default BottomNavigator;
