import { StyleSheet, ViewStyle } from "react-native";

import { SIZES, COLORS } from "../constant/theme";

const Styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
   },
   heading1: {
      fontFamily: "Poppins-Bold",
      fontSize: SIZES.xl,
      color: COLORS.neutral90,
   },
});

export default Styles;
