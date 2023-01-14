import { StyleSheet } from "react-native";
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  post: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: fonts.weight.semi,
    color: colors.secondary,
    fontSize: fonts.size.body
  },
  dots: {
    marginLeft: 'auto',
    color: colors.secondary
  },
  img: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  footerIcons: {
    flexDirection: 'row',
    marginBottom: 5,
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
    lineHeight: 18
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
