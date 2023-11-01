import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnBoard: undefined;
  Tab: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "OnBoard",
  "Tab"
>;
