import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES } from "../../constant/theme";
import PopularCard from "./PopularCard";

const categoriesData: string[] = ["Salad", "Breakfast", "Appetizer", "Noodle", "Lunch"];

const popularRecipesData = [
  {
    id: 1,
    title: "Pepper sweetcorn ramen",
    image: require("../../../assets/images/recommendation1.png"),
    category: "breakfast",
    time: 10,
  },
  {
    id: 2,
    title: "Cheddar cheese and shell salad",
    image: require("../../../assets/images/recommendation2.png"),
    category: "breakfast",
    time: 20,
  },
  {
    id: 3,
    title: "Spicy chicken curry noodles",
    image: require("../../../assets/images/recommendation3.png"),
    category: "breakfast",
    time: 15,
  },
];

const PopularCategory = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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
            Popular Category
          </Text>
        </View>
      </View>
      {/* Categories Scroller */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          contentContainerStyle={{ paddingHorizontal: 22, gap: 8 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categories,
                activeCategory === index && styles.activeCategory,
              ]}
              onPress={() => setActiveCategory(index)}
            >
              <Text
                style={[
                  styles.categoriesText,
                  activeCategory === index && { color: "white" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Recipes Card List */}
      <FlatList
        horizontal
        data={popularRecipesData}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 20, paddingHorizontal: 22, gap: 16 }}
        renderItem={({ item }) => <PopularCard data={item} />}
      />
    </View>
  );
};

export default PopularCategory;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categories: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  categoriesText: {
    fontFamily: "Poppins-Bold",
    color: "gray",
    fontSize: SIZES.xs,
  },
  activeCategory: {
    backgroundColor: COLORS.primary50,
  },
});
