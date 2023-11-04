import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeightSpacer from "../component/HeightSpacer";
import Styles from "../component/reusable.style";
import { SIZES, COLORS } from "../constant/theme";
import SearchField from "../component/SearchField";
import Trending from "../component/home/Trending";
import PopularCategory from "../component/home/PopularCategory";
import Recent from "../component/home/Recent";
import PopularCreator from "../component/home/PopularCreator";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <HeightSpacer height={20} />
        <View style={[Styles.container]}>
          <Text style={Styles.heading1}>Find best recipes{"\n"}for cooking</Text>
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
        <HeightSpacer height={24} />
        <PopularCreator />
        <HeightSpacer height={80} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
