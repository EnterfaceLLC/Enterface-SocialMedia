import { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';

//* COMPONENTS \\
import DoublePress from '../DoublePress';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import Comment from '../Comment';

//* STYLES, ICONS, ASSETS, THEME \\
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../theme/colors';

//* TYPES, MODELS \\
// import { IPost } from '../../types/models';
import { FeedNavigationProp } from '../../types/navigation';

//* NAVIGATION \\
import { useNavigation } from '@react-navigation/native';

//* API IMPORT \\
import { Post } from '../../API';
import { DEFAULT_USER_IMAGE } from '../../config';

interface IFeedPost {
  post: Post;
  isVisible: boolean;
};

//* CODE BELOW \\
const FeedPost = ({ post, isVisible }: IFeedPost) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    if (post.User)
      navigation.navigate('Profile', { userId: post.User.id });
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', { postId: post.id });
  };


  const toggleExpanded = () => {
    setIsExpanded(v => !v);
  };

  const toggleLiked = () => {
    setIsLiked(h => !h);
  };

  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); //TIMESTAMP
    if (now - lastTap < 300) {
      toggleLiked();
    }

    lastTap = now;
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePress onDoublePressable={toggleLiked}>
        <Image
          style={styles.img}
          source={{ uri: post.image }}
        />
      </DoublePress>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLiked} />;
  } else if (post.video) {
    content = (
      <DoublePress onDoublePressable={toggleLiked}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePress>
    );
  }

  return (
    <View style={styles.postC}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: post.User?.image || DEFAULT_USER_IMAGE }}
        />
        <Text onPress={navigateToUser} style={styles.username}>{post.User?.username}</Text>
        <Entypo name='dots-three-horizontal' style={styles.dots} size={24} />
      </View>

      {/* CONTENT */}

      {content}

      {/* FOOTER*/}
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <Pressable onPress={toggleLiked}>
            <Ionicons
              name={isLiked ? 'heart-circle-outline' : 'heart-circle'}
              size={27}
              color={isLiked ? colors.tertairy : colors.secondary}
              style={styles.icons}
            />
          </Pressable>

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

        <Text style={styles.txt} numberOfLines={isExpanded ? 0 : 3}>
          <Text style={styles.inline}>{post.User?.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleExpanded}>{isExpanded ? 'Less' : 'More'}</Text>

        <Text onPress={navigateToComments}>View all {post.nofComments} comments</Text>
        {(post.Comments?.items || []).map(comment => (
          comment && <Comment key={comment.id} comment={comment} />
        ))}

        <Text>{post.createdAt}</Text>

      </View>
    </View>
  );
};

export default FeedPost;
