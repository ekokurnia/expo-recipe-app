import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

import { RootStackParamList } from "../../../type";
import Styles from "../../component/reusable.style";
import { COLORS, SIZES } from "../../constant/theme";

const videoData = [
   {
      id: 1,
      title: "How to make french toast",
      image: require("../../../assets/images/video1.png"),
      author: "Roberta Anny",
      avatar: require("../../../assets/images/creator4.png"),
   },
   {
      id: 2,
      title: "How to make sushi at home",
      image: require("../../../assets/images/video2.png"),
      author: "Niki Samantha",
      avatar: require("../../../assets/images/creator3.png"),
   },
   {
      id: 3,
      title: "Easy oatmeal recipe",
      image: require("../../../assets/images/video3.png"),
      author: "James Wolden",
      avatar: require("../../../assets/images/creator2.png"),
   },
];

type VideoCardNavigationProps = StackNavigationProp<RootStackParamList, "VideoDetail">;

const Video = () => {
   const navigation = useNavigation<VideoCardNavigationProps>();
   return (
      <View style={[Styles.container, { paddingBottom: 100 }]}>
         {/* Video Card Scroll */}
         <FlatList
            data={videoData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
            renderItem={({ item }) => (
               // Card
               <Pressable
                  onPress={() => navigation.navigate("VideoDetail", item)}
                  style={styles.card}
               >
                  <View style={styles.imageContainer}>
                     <Image style={styles.image} source={item.image} />
                  </View>
                  <View style={styles.titleContainer}>
                     <Text style={styles.title}>{item.title}</Text>
                     <Entypo
                        name="dots-three-horizontal"
                        size={20}
                        color={COLORS.neutral90}
                     />
                  </View>
                  <View style={styles.authorContainer}>
                     <View style={styles.avatar}>
                        <Image style={styles.avatarImage} source={item.avatar} />
                     </View>
                     <Text style={styles.authorName}>By {item.author}</Text>
                  </View>
               </Pressable>
            )}
         />
      </View>
   );
};

export default Video;

const styles = StyleSheet.create({
   card: {
      flex: 1,
      paddingTop: 9,
   },
   imageContainer: {
      backgroundColor: COLORS.neutral50,
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 12,
      height: 180,
   },
   image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
   },
   titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   title: {
      flex: 1,
      fontFamily: "Poppins-Bold",
      fontSize: SIZES.md,
      color: COLORS.neutral90,
      marginBottom: 8,
   },
   authorContainer: {
      display: "flex",
      alignItems: "center",
      height: 32,
      flexDirection: "row",
      gap: 8,
   },
   avatar: {
      backgroundColor: COLORS.primary50,
      width: 32,
      height: 32,
      borderRadius: 9999,
   },
   avatarImage: { width: 32, height: 32 },
   authorName: {
      color: COLORS.neutral50,
      fontSize: SIZES.xs,
   },
});
