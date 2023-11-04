import { View } from "react-native";

interface HeightSpacerProps {
  height: number;
}
const HeightSpacer: React.FC<HeightSpacerProps> = ({ height }) => {
  return <View style={{ marginTop: height }}></View>;
};

export default HeightSpacer;
