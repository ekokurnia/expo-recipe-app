import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeightSpacer from "../component/HeightSpacer";
import Styles from "../component/reusable.style";
import { SIZES, COLORS } from "../constant/theme";
import SearchField from "../component/SearchField";
import Trending from "../component/home/Trending";
import PopularCategory from "../component/home/PopularCategory";
import Recent from "../component/home/Recent";
const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <View style={Styles.container}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              color: COLORS.neutral90,
              fontSize: SIZES.xl,
              lineHeight: 28,
            }}
          >
            Find best recipes{"\n"}for cooking
          </Text>
          {/* Search Field */}
          <HeightSpacer height={28} />
          <SearchField />
        </View>
        {/* Trending Section */}
        <HeightSpacer height={20} />
        <Trending />
        <HeightSpacer height={24} />
        <PopularCategory />
        <HeightSpacer height={24} />
        <Recent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
