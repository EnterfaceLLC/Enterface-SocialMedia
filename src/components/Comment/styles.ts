import { StyleSheet } from "react-native";
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  icons: {
    marginHorizontal: 5,
  },
  txt: {
    color: colors.secondary,
    lineHeight: 18
  },
  inline: {
    fontWeight: fonts.weight.semi,
    color: colors.primary,
  },
  commentsTxt: {
    flex: 1,
    color: colors.secondary,
    lineHeight: 18
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});