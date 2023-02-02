import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";


export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
});