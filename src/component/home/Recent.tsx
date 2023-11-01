import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES } from "../../constant/theme";
import SeeAllButton from "./SeeAllButton";

const recentRecipesData = [
  {
    id: 1,
    title: "Indonesian chicken burger",
    author: "Adrianna Curl",
    image: require("../../../assets/images/recent1.png"),
  },
  {
    id: 2,
    title: "Home made cute pancake",
    author: "James Wolden",
    image: require("../../../assets/images/recent2.png"),
  },
  {
    id: 3,
    title: "How to make seafood fr...",
    author: "Roberta Anny",
    image: require("../../../assets/images/recent3.png"),
  },
];

const Recent = () => {
  return (
    <View>
      {/* ======== Title Heading ======= */}
      <View style={{ paddingHorizontal: 22, marginBottom: 16 }}>
        <View style={styles.heading}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: SIZES.lg,
              color: COLORS.neutral90,
            }}
          >
            Recent recipe
          </Text>
          <SeeAllButton />
        </View>
      </View>
      {/* ========= Recent Card ======== */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 22, gap: 16 }}
        data={recentRecipesData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Image*/}
            <Image source={item.image} style={styles.cardImage} />
            {/* Title & author */}
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: COLORS.neutral90,
                fontSize: SIZES.sm,
                marginTop: 8,
                paddingHorizontal: 4,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: COLORS.neutral30,
                fontSize: 10,
                paddingHorizontal: 4,
              }}
            >
              By {item.author}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: 124,
    height: 191,
  },
  cardImage: {
    resizeMode: "contain",
    borderRadius: 10,
  },
});
