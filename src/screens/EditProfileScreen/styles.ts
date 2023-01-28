import { StyleSheet, View } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";


export default StyleSheet.create({
  page: {
    // flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  buttonTxt: {
    color: colors.primary,
    fontSize: fonts.size.section,
    fontWeight: fonts.weight.semi,
    margin: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  inputLabel: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.primary
  },
});