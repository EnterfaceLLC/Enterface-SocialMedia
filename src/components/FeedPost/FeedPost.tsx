import { Text, View, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import colors from '../../theme/colors';


const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/JRZ_Profile.jpg')}
        />
        <Text style={styles.username}>Enterface, LLC</Text>
        <Entypo name='dots-three-horizontal' style={styles.dots} size={24} />

      </View>

      {/* CONTENT */}
      <Image
        style={styles.img}
        source={{ uri: 'https://images.pexels.com/photos/807688/pexels-photo-807688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}

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

        <Text style={styles.txt}> Liked by <Text style={styles.inline}>@LowriderMagazine</Text> and <Text style={styles.inline}>66</Text> others</Text>

        <Text style={styles.txt}>
          <Text style={styles.inline}>ZamZam1990</Text>{' '}
          Lorem ipsum dolor sit, amet conse ctetur adipisicing elit. Qui, non vitae nostrum aut a eaque saepe, modi soluta in consequatur aliquid, accusantium laboriosam perspiciatis sit repellat pariatur ad eligendi placeat. ENTERFACE, LLC
        </Text>

        <Text>View all 22 comments</Text>
        <View style={styles.comments}>
          <Text style={styles.commentsTxt}>
            <Text style={styles.inline}>HAZ2022</Text>{' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, non vitae nostrum.
          </Text>
          <Ionicons
            name={'heart-circle-outline'}
            size={20}
            color={colors.tertairy}
            style={styles.icons}
          />
        </View>

        <Text>14 January, 2023</Text>

      </View>
    </View>
  );
};

export default FeedPost;
