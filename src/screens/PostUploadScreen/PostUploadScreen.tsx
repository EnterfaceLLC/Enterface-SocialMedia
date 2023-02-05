import { View, Text, Pressable } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import { Camera, CameraPictureOptions, CameraRecordingOptions, FlashMode } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const flashMode = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
]

const PostUploadScreen = () => {
  const [permission, setPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setPermission(cameraPermission.status === 'granted' && microphonePermission.status === 'granted');
    };
    getPermission();
  }, [])

  const flipCamera = () => {
    setCameraType(currentCameraType =>
      currentCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashMode.indexOf(flash);
    const nextIndex = currentIndex === flashMode.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashMode[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };

    const result = await camera.current?.takePictureAsync(options);
    // console.log(result);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    setIsRecording(false);
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  const flashModeToIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
  };

  if (permission === null) {
    return <Text>LOADING...</Text>
  }

  if (permission === false) {
    return <Text>ACCESS DENIED</Text>
  }

  // console.warn(flash);


  return (
    <View style={styles.page}>
      <Camera style={styles.camera} type={cameraType} ratio='4:3' flashMode={flash} onCameraReady={() => setIsCameraReady(true)} ref={camera} />

      <View style={[styles.buttonContainer, { top: 25 }]}>
        <MaterialIcons name='close' size={30} color={colors.white} />

        <Pressable onPress={flipFlash}>
          <MaterialIcons name={flashModeToIcon[flash]} size={30} color={colors.white} />
        </Pressable>

        <MaterialIcons name='settings' size={30} color={colors.white} />
      </View>

      <View style={[styles.buttonContainer, { bottom: 25 }]}>
        <MaterialIcons name='photo-library' size={30} color={colors.white} />

        {isCameraReady && (
          <Pressable onPress={takePicture} onLongPress={startRecording} onPressOut={stopRecording}>
            <View style={[styles.circle, { backgroundColor: isRecording ? colors.tertairy : colors.white }]} />
          </Pressable>
        )}

        <Pressable onPress={flipCamera}>
          <MaterialIcons name='flip-camera-ios' size={30} color={colors.white} />
        </Pressable>
      </View>
    </View>
  )
}

export default PostUploadScreen;