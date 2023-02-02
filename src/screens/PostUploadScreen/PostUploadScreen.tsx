import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Camera } from 'expo-camera';

const PostUploadScreen = () => {
  const [permission, setPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setPermission(cameraPermission.status === 'granted' && microphonePermission.status === 'granted');
    };
    getPermission();
  }, [])

  if (permission === null) {
    return <Text>LOADING...</Text>
  }

  if (permission === false) {
    return <Text>ACCESS DENIED</Text>
  }


  return (
    <View style={styles.page}>
      <Camera style={styles.camera} />
    </View>
  )
}

export default PostUploadScreen;