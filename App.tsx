import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';

import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: font.size.body, color: colors.primary }}>
        Enterface Social Media
      </Text>
      <AntDesign name='dashboard' size={40} color={colors.tertairy} />
    </View>
  );
};

export default App;
