import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HeightSpacer from "../HeightSpacer";
import { COLORS, SIZES } from "../../constant/theme";

type PopularCardProps = {
  data: {
    title: string;
    image: ImageSourcePropType;
    time: number;
  };
};

const PopularCard: React.FC<PopularCardProps> = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}></View>
      {/* Circle Image */}
      <View
        style={{
          width: 110,
          height: 110,
          position: "absolute",
          overflow: "hidden",
          top: 0,
          backgroundColor: COLORS.neutral30,
          zIndex: 99,
          borderRadius: 9999,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Image style={styles.image} source={data.image} />
      </View>
      <View
        style={{
          backgroundColor: COLORS.neutral10,
          height: 176,
          borderRadius: 12,
        }}
      >
        {/* Content */}
        <View style={{ paddingTop: 66, paddingLeft: 4 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              textAlign: "center",
              fontSize: SIZES.sm,
            }}
          >
            {data.title}
          </Text>
          <HeightSpacer height={12} />
          {/* Time Minutes */}
          <View style={{ paddingLeft: 12 }}>
            <Text style={{ color: COLORS.neutral30, fontSize: SIZES.xs }}>Time</Text>
            <HeightSpacer height={4} />
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: COLORS.neutral90,
                fontSize: SIZES.xs,
              }}
            >
              {data.time} min
            </Text>
          </View>
        </View>
        <View style={styles.bookmark}>
          <AntDesign name="book" size={20} color={COLORS.neutral90} />
        </View>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: 150,
    height: 231,
  },
  bookmark: {
    backgroundColor: "white",
    position: "absolute",
    height: 32,
    width: 32,
    display: "flex",
    justifyContent: "center",
    borderRadius: 999,
    right: 16,
    bottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
});
