import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES } from "../../constant/theme";
import SeeAllButton from "./SeeAllButton";

const popularCreatorData = [
  {
    id: 1,
    name: "Troyan Smith",
    image: require("../../../assets/images/creator1.png"),
  },
  {
    id: 2,
    name: "James Wolden",
    image: require("../../../assets/images/creator2.png"),
  },
  {
    id: 3,
    name: "Niki Samantha",
    image: require("../../../assets/images/creator3.png"),
  },
  {
    id: 4,
    name: "Roberta Anny",
    image: require("../../../assets/images/creator4.png"),
  },
];

const PopularCreator = () => {
  return (
    <View>
      {/* === Heading === */}
      <View style={{ paddingHorizontal: 22, marginBottom: 16 }}>
        <View style={styles.heading}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: SIZES.lg,
              color: COLORS.neutral90,
            }}
          >
            Popular creator
          </Text>
          <SeeAllButton />
        </View>
      </View>
      {/* === Card === */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 22, gap: 12 }}
        data={popularCreatorData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PopularCreator;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    gap: 8,
    width: 75,
    height: 119,
    marginBottom: 12,
  },
  cardImageContainer: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  image: {
    resizeMode: "contain",
  },
  cardTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.xs,
    color: COLORS.neutral90,
    textAlign: "center",
  },
});
