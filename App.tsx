import { View, StyleSheet, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';

const post = {
  id: '1',
  createdAt: '14 January 2023',
  image: 'https://images.pexels.com/photos/807688/pexels-photo-807688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    image: require('./src/assets/images/JRZ_Profile.jpg'),
    username: 'Enterface, LLC',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'This is an amazing image! Great work!',
      user: {
        username: 'LowRider_Magazine',
      },
    },
    {
      id: '2',
      comment: 'Shout out to Enterface, LLC Great Post!',
      user: {
        username: 'RoZam1990',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
