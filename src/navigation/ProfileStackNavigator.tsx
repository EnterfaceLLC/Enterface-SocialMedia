//* NAVIGATION \\
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREENS \\
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

//* TYPES \\
import { ProfileStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

//* CODE BELOW \\
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
