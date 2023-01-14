import { View, StyleSheet, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
