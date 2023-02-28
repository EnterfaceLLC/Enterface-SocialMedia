import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

//* STYLES, ICONS, ASSETS, THEME \\
import user from '../../assets/data/user.json';

//* COMPONENTS \\
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';

//* TYPES \\
import {
  MyProfileNavigationProp,
  UserProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileRouteProp
} from '../../types/navigation';


//* CODE BELOW \\
const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const navigation = useNavigation<UserProfileNavigationProp | MyProfileNavigationProp>();

  const userId = route.params?.userId;

  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;
