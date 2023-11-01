import { Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../constant/theme";
const SeeAllButton = () => {
  return (
    <Pressable style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: SIZES.sm,
          color: COLORS.primary50,
        }}
      >
        See all
      </Text>
      <AntDesign name="arrowright" size={20} color={COLORS.primary50} />
    </Pressable>
  );
};

export default SeeAllButton;
