import { FlatList } from 'react-native';
import FeedPost from '../../src/components/FeedPost';
import posts from '../../src/assets/data/posts.json';

const HomeScreen = () => {
  return (

    <FlatList
      data={posts}
      renderItem={({ item }) =>
        <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
