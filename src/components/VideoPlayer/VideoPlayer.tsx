import { View, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({ uri, paused }: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        source={{ uri }}
        style={styles.vid}
        resizeMode='cover'
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable
        onPress={() => setMuted(v => !v)}
        style={styles.mutedButton}
      >
        <Ionicons
          name={muted ? 'volume-mute-sharp' : 'volume-medium-sharp'}
          size={26}
          color={'white'}
        />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  vid: {
    width: '100%',
    aspectRatio: 1,
  },
  mutedButton: {
    backgroundColor: 'black',
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 25

  }
});

export default VideoPlayer;