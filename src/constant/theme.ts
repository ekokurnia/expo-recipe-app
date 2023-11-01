import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary80: "#9E2B2B",
  primary50: "#E23E3E",
  secondary50: "#FF9C00",
  neutral90: "#303030",
  neutral50: "#919191",
  neutral30: "#C1C1C1",
  neutral10: "#F1F1F1",
  rating100: "#FFB661",
  error100: "#EE1133",
  green100: "#31B057",
};
const SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
  xxxl: 44,
  width,
  height,
};

export { SIZES, COLORS };
