import { StyleSheet, Text, Pressable, ViewStyle } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constant/theme";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: React.JSX.Element;
  width?: number;
  style?: ViewStyle;
}
const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  icon,
  width,
  style,
  size = "md",
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles.primaryButton,
        pressed && { backgroundColor: COLORS.primary80 },
        size === "sm" && { padding: 2 },
        { width: width },
        style,
      ]}
    >
      <Text style={[styles.label, size === "sm" && { fontSize: 12 }]}>{label}</Text>
      {icon}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary50,
    padding: SIZES.md,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.primary50,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary50,
  },
  label: {
    fontSize: SIZES.md,
    color: "white",
  },
});
