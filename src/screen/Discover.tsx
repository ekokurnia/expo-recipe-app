import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import {
   createMaterialTopTabNavigator,
   MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";

import Video from "./discover/Video";
import Recipe from "./discover/Recipe";
import { COLORS, SIZES } from "../constant/theme";


export type DiscoverParamsList = {
   Video: undefined;
   Recipe: undefined;
};

const Tab = createMaterialTopTabNavigator<DiscoverParamsList>();

const TabBar = ({ state, descriptors, navigation, position }: MaterialTopTabBarProps) => {
   return (
      <View style={{ flexDirection: "row" }}>
         {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = route.name;

            const isFocused = state.index === index;

            const onPress = () => {
               const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
               });

               if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
               }
            };

            const inputRange = state.routes.map((_, i) => i);
            // Bg Color Opacity
            const backgroundColor = position.interpolate({
               inputRange,
               outputRange: inputRange.map((i) =>
                  i === index ? COLORS.primary50 : "white"
               ),
            });
            const color = isFocused ? "white" : COLORS.primary30;

            return (
               <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  key={route.key}
                  onPress={onPress}
                  style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 20 }}
               >
                  <Animated.Text
                     style={{
                        backgroundColor,
                        borderRadius: 10,
                        padding: 8,
                        textAlign: "center",
                        color,
                        fontFamily: "Poppins-Bold",
                        fontSize: SIZES.xs,
                     }}
                  >
                     {label}
                  </Animated.Text>
               </TouchableOpacity>
            );
         })}
      </View>
   );
};

const Discover = () => {
   return (
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
         <Tab.Screen name="Video" component={Video} />
         <Tab.Screen name="Recipe" component={Recipe} />
      </Tab.Navigator>
   );
};

export default Discover;

const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: COLORS.primary50,
      width: 160,
      paddingVertical: 8,
      borderRadius: 10,
      paddingHorizontal: 12,
   },
   tabBarLabel: {
      fontFamily: "Poppins-Bold",
      textAlign: "center",
      color: "white",
   },
});
