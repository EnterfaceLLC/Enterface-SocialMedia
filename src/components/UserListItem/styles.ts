import { StyleSheet } from 'react-native'
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    color: colors.secondary
  }
});