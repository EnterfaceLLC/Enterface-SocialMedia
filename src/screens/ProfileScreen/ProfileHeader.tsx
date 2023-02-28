import React from 'react';
import { View, Text, Image } from 'react-native'

import { Auth } from 'aws-amplify';

//* STYLES, ICONS, ASSETS, THEME \\
import user from '../../assets/data/user.json';
import styles from './styles';

//* COMPONENTS \\
import Button from '../../components/Button';

//* NAVIGATION \\
import { useNavigation } from '@react-navigation/native';

//* TYPES \\
import { ProfileNavigationProp } from '../../types/navigation';

//* CODE BELOW \\
const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image
          style={styles.profImg}
          source={{ uri: user.image }}
        />

        <View style={styles.numContain}>
          <Text style={styles.numTxt}>90</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numContain}>
          <Text style={styles.numTxt}>190</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numContain}>
          <Text style={styles.numTxt}>290</Text>
          <Text>Following</Text>
        </View>

      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Button
          text={'Edit Profile'}
          onPress={() => navigation.navigate('Edit Profile')}
        />

        <Button
          text={'Log Out'}
          onPress={() => Auth.signOut()}
        />
      </View>
    </View>
  )
};

export default ProfileHeader;
