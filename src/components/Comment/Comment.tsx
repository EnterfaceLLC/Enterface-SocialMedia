import { View, Text, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../theme/colors';
// import { IComment } from '../../types/models';
import { useState } from 'react';
import { Comment as CommentType } from '../../API';
import { DEFAULT_USER_IMAGE } from '../../config';

interface ICommentProps {
  comment: CommentType;
  includeDetails: boolean;
}


const Comment = ({ comment, includeDetails = false }: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comments}>
      {(includeDetails && <Image source={{ uri: comment.User?.image || DEFAULT_USER_IMAGE }} style={styles.avatar} />)}
      <View style={styles.midColumn}>
        <Text style={styles.commentsTxt}>
          <Text style={styles.inline}>{comment.User?.username}</Text>{' '}
          {comment.comment}
        </Text>

        {(includeDetails &&
          <View style={styles.footer}>
            <Text style={styles.footerTxt}>2d</Text>
            <Text style={styles.footerTxt}>5 likes</Text>
            <Text style={styles.footerTxt}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLiked} hitSlop={5}>
        <Ionicons
          name={isLiked ? 'heart-circle-outline' : 'heart-circle'}
          size={24}
          color={isLiked ? 'red' : colors.secondary}
          style={styles.icons}
        />
      </Pressable>
    </View>
  )
};

export default Comment;
