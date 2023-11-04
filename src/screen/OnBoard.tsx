import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { MainNavigationProps } from "../../type";
import { SIZES } from "../constant/theme";
import Button from "../component/Button";
import HeightSpacer from "../component/HeightSpacer";

const OnBoard = () => {
   const navigation = useNavigation<MainNavigationProps>();
   return (
      <ImageBackground
         source={require("../../assets/images/onboard1.png")}
         style={styles.background}
      >
         {/* 60k Recipes */}
         <SafeAreaView style={styles.recipesLabel}>
            <AntDesign name="star" size={16} color="white" />
            <Text
               style={{
                  fontFamily: "Poppins-Bold",
                  color: "white",
                  lineHeight: 22,
               }}
            >
               60k+
            </Text>
            <Text
               style={{ fontFamily: "Poppins-Regular", color: "white", lineHeight: 22.4 }}
            >
               Premium recipes
            </Text>
         </SafeAreaView>
         <View style={styles.content}>
            <Text style={styles.title}>
               Let's{"\n"}
               Cooking
            </Text>
            <Text style={styles.desc}>Find best recipes for cooking</Text>
            <HeightSpacer height={56} />
            <Button
               label="Start Cooking"
               width={206}
               icon={<AntDesign name="arrowright" size={20} color="white" />}
               onPress={() => navigation.replace("Tab")}
            />
         </View>
      </ImageBackground>
   );
};

export default OnBoard;

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: "center",
   },
   recipesLabel: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
      position: "absolute",
      top: 13,
      right: 0,
      left: 0,
   },
   content: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      bottom: 64,
      right: 0,
      left: 0,
   },
   title: {
      fontFamily: "Poppins-Regular",
      color: "white",
      fontSize: 56,
      textAlign: "center",
   },
   desc: {
      fontFamily: "Poppins-Regular",
      color: "white",
      fontSize: SIZES.md,
      textAlign: "center",
   },
});
