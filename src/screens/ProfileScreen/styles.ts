import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";

export default StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  profImg: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50
  },
  numContain: {
    alignItems: "center",
  },
  numTxt: {
    fontSize: fonts.size.body,
    fontWeight: fonts.weight.semi,
    color: 'black',
  },
  name: {
    fontSize: fonts.size.body,
    color: 'black',
  }
});