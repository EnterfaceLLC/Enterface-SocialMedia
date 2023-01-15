import { Text, View, Image } from 'react-native';
// import Interface from 'react';

import Comment from '../Comment';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import colors from '../../theme/colors';

import { IPost } from '../../types/models';

interface IFeedPost {
  post: IPost;
};


const FeedPost = ({ post }: IFeedPost) => {
  // console.log(post);
  return (
    <View style={styles.post}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={post.user.image}
        />
        <Text style={styles.username}>{post.user.username}</Text>
        <Entypo name='dots-three-horizontal' style={styles.dots} size={24} />
      </View>

      {/* CONTENT */}
      <Image
        style={styles.img}
        source={{ uri: post.image }}
      />

      {/* FOOTER*/}
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <Ionicons
            name={'heart-circle-outline'}
            size={27}
            color={colors.tertairy}
            style={styles.icons}
          />

          <Ionicons
            name='chatbubble-ellipses-outline'
            size={23}
            color={colors.secondary}
            style={styles.icons}
          />

          <Feather
            name='send'
            size={24}
            color={colors.secondary}
            style={styles.icons}
          />

          <Ionicons
            name='bookmark-sharp'
            size={24}
            style={{ color: colors.secondary, marginLeft: 'auto' }}
          />

        </View>

        <Text style={styles.txt}> Liked by <Text style={styles.inline}>@LowriderMagazine</Text> and <Text style={styles.inline}>{post.nofLikes}</Text> others</Text>

        <Text style={styles.txt}>
          <Text style={styles.inline}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <Text>{post.createdAt}</Text>

      </View>
    </View>
  );
};

export default FeedPost;
