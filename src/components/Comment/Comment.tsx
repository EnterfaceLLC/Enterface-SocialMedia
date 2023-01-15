import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../theme/colors';
import { IComment } from '../../types/models';

interface ICommentProps {
  comment: IComment;
}


const Comment = ({ comment }: ICommentProps) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentsTxt}>
        <Text style={styles.inline}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>

      <Ionicons
        name={'heart-circle-outline'}
        size={20}
        color={colors.tertairy}
        style={styles.icons}
      />
    </View>
  )
};

export default Comment;
