import { View, Text, FlatList } from 'react-native';
import React from 'react';

import Comment from '../../components/Comment';
import comments from '../../assets/data/comments.json';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ padding: 10 }}
        data={comments}
        renderItem={({ item }) => <Comment comment={item} includeDetails />}
      />
      <Input />
    </View>
  )
}

export default CommentsScreen;
