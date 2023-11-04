import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
   OnBoard: undefined;
   Tab: undefined;
   VideoDetail: { id: number; title: string; image?: any; author: string; avatar?: any };
};

export type MainNavigationProps = NativeStackNavigationProp<
   RootStackParamList,
   "OnBoard",
   "Tab",
   "VideoDetail"
>;