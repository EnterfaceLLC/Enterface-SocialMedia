import { View, Text, Image, FlatList } from 'react-native'
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';



const ProfileScreen = () => {
  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;