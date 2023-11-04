import React from "react";
import { View, Text } from "react-native";

const VideoDetail: React.FC = ({ route }: any) => {
   console.log(route.params);

   return (
      <View>
         <Text>{route.params.title}</Text>
         <Text>{route.params.author}</Text>
      </View>
   );
};

export default VideoDetail;
