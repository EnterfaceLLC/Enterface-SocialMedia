import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.log('Posting Comment', newComment);

    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/14401426/pexels-photo-14401426.jpeg'
        }}
      />
      <TextInput
        value={newComment}
        placeholder={'enter comment'}
        onChangeText={setNewComment}
        multiline
        style={styles.input}
      />

      <Text style={styles.button} onPress={onPost}>POST</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20
  },
  input: {
    flex: 1,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    paddingRight: 50,
    alignSelf: 'center'
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    color: colors.primary,
    fontSize: fonts.size.norm,
    fontWeight: fonts.weight.semi,

  },
})

export default Input;