import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TextField from "./TextField";
import { COLORS } from "../constant/theme";
const SearchField = () => {
  return (
    <View>
      <AntDesign name="search1" size={20} color={COLORS.neutral30} style={styles.icon} />
      <TextField height={44} placeholder="Search recipes" />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 16,
    top: "25%",
  },
});
