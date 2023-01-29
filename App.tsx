import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScreen from './src/screens/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';


const App = () => {
  return (
    <View style={styles.app}>
      <PostUploadScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
