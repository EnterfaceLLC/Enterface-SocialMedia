import { StyleSheet } from "react-native";
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 5,
  },
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
    lineHeight: 18,

  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  midColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerTxt: {
    marginRight: 5
  },
});