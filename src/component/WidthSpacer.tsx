import { View } from "react-native";

interface HeightSpacerProps {
  width: number;
}
const WidthSpacer: React.FC<HeightSpacerProps> = ({ width }) => {
  return <View style={{ width: width }}></View>;
};

export default WidthSpacer;
