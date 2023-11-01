import { TextInput } from "react-native";
import React, { useState } from "react";

import { COLORS } from "../constant/theme";

type TextFieldProps = {
  height?: number;
  placeholder?: string;
};
const TextField: React.FC<TextFieldProps> = ({ height, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={[
        {
          borderRadius: 10,
          borderColor: COLORS.neutral30,
          color: COLORS.neutral50,
          height: height || 40,
          borderWidth: 1,
          padding: 12,
          paddingLeft: 48,
        },
        isFocused && { borderColor: COLORS.primary50 },
      ]}
      placeholder={placeholder}
      placeholderTextColor={COLORS.neutral30}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default TextField;
