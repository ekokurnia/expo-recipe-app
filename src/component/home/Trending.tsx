import { StyleSheet, Text, View, Image, VirtualizedList } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../constant/theme";
import SeeAll from "./SeeAllButton";

// Dummy data
const data = [
   {
      id: 1,
      title: "How to make sushi at home",
      rating: 4.5,
      author: "Niki Samantha",
      image: require("../../../assets/images/trending1.png"),
      avatar: require("../../../assets/images/creator3.png"),
   },
   {
      id: 2,
      title: "How to make sandwich",
      rating: 4.7,
      author: "Troyan Smith",
      image: require("../../../assets/images/trending2.png"),
      avatar: require("../../../assets/images/creator1.png"),
   },
];
// Card
type TrendingCardProps = {
   id: number;
   title: string;
   rating: number;
   author: string;
   image: any;
   avatar: any;
};
const TrendingCard: React.FC<TrendingCardProps> = ({ ...props }) => {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image} />
            {/* Rating */}
            <View style={styles.rating}>
               <AntDesign name="star" size={16} color="white" />
               <Text style={styles.ratingText}>{props.rating}</Text>
            </View>
            {/* Add to bookmark */}
            <View style={styles.bookmark}>
               <AntDesign name="book" size={20} color={COLORS.neutral90} />
            </View>
         </View>
         {/* Title */}
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Text style={styles.title}>{props.title}</Text>
            <Entypo name="dots-three-horizontal" size={20} color={COLORS.neutral90} />
         </View>
         {/* Profile */}
         <View style={styles.profileContainer}>
            {/* <FontAwesome name="user-circle" size={32} color={COLORS.neutral90} /> */}
            <Image
               source={props.avatar}
               style={{ height: 32, width: 32, borderRadius: 999, resizeMode: "contain" }}
            />
            <Text style={styles.profileName}>{props.author}</Text>
         </View>
      </View>
   );
};

const Trending = () => {
   return (
      <View>
         <View style={{ paddingHorizontal: 22, marginBottom: 16 }}>
            {/* Heading */}
            <View style={styles.heading}>
               <Text
                  style={{
                     fontFamily: "Poppins-Bold",
                     fontSize: SIZES.lg,
                     color: COLORS.neutral90,
                  }}
               >
                  Trending Now 🔥
               </Text>
               <SeeAll />
            </View>
         </View>
         {/* Card List */}
         <View>
            <VirtualizedList
               horizontal
               data={data}
               keyExtractor={(item: TrendingCardProps) => item.id.toString()}
               showsHorizontalScrollIndicator={false}
               overScrollMode="auto"
               contentContainerStyle={{ paddingHorizontal: 22, gap: 16 }}
               getItemCount={(data) => data.length}
               getItem={(data, index) => data[index]}
               renderItem={({ item }) => {
                  // const isLastItem = data.indexOf(item) === data.length - 1;
                  return (
                     <View>
                        <TrendingCard
                           id={item.id}
                           title={item.title}
                           rating={item.rating}
                           author={item.author}
                           image={item.image}
                           avatar={item.avatar}
                        />
                     </View>
                  );
               }}
            />
         </View>
      </View>
   );
};

export default Trending;

const styles = StyleSheet.create({
   heading: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   container: {
      flexDirection: "column",
      gap: 8,
      width: 280,
   },
   imageContainer: {
      position: "relative",
      width: 280,
      height: 180,
      flexDirection: "column",
      borderRadius: 10,
      overflow: "hidden",
   },
   image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
   },
   rating: {
      backgroundColor: COLORS.neutral30,
      position: "absolute",
      padding: 4,
      height: 28,
      paddingHorizontal: 8,
      borderRadius: 10,
      left: 8,
      top: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      opacity: 0.8,
   },
   ratingText: {
      fontFamily: "Poppins-Regular",
      fontSize: SIZES.md,
      color: "white",
      lineHeight: 22,
   },
   bookmark: {
      backgroundColor: "white",
      position: "absolute",
      height: 32,
      width: 32,
      display: "flex",
      justifyContent: "center",
      borderRadius: 999,
      right: 8,
      top: 8,
      flexDirection: "row",
      alignItems: "center",
   },
   title: {
      fontFamily: "Poppins-Bold",
      fontSize: SIZES.md,
      color: COLORS.neutral90,
   },
   profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
   },
   profileName: {
      color: COLORS.neutral50,
      fontSize: SIZES.xs,
   },
});
