import { View, Text, Image, FlatList } from 'react-native'
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';


const ProfileHeader = () => {
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
          onPress={() => console.warn('On Edit Profile Image')}
        />

        <Button
          text={'Edit Profile'}
          onPress={() => console.warn('On Edit Profile Image')}
        />
      </View>
    </View>
  )
};

export default ProfileHeader;