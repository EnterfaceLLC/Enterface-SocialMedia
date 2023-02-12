import { View, Text, Image, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';



const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { userId } = route.params;

  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;