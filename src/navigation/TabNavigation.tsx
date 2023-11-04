import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import Styles from "../component/reusable.style";
import { COLORS, SIZES } from "../constant/theme";
import { Home, Discover, CreateRecipe, Notification, Profile } from "../screen";

const TabNavigation = () => {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarStyle: styles.tabBar,
            headerShown: false,
            header: ({ route, options }) => (
               <SafeAreaView>
                  <View style={[Styles.container, { paddingVertical: 20 }]}>
                     <Text style={Styles.heading1}>{options.title}</Text>
                  </View>
               </SafeAreaView>
            ),
            tabBarHideOnKeyboard: false,
            tabBarActiveTintColor: COLORS.primary50,
            tabBarInactiveTintColor: COLORS.neutral30,
            tabBarShowLabel: false,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="home" size={20} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="SavedRecipes"
            component={Discover}
            options={{
               title: "Saved Recipes",
               headerShown: true,
               tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="book" size={20} color={color} />
               ),
            }}
         />

         {/* Action Button */}
         <Tab.Screen
            name="Saved Recipes"
            component={CreateRecipe}
            options={{
               title: "Create Recipes",
               headerShown: true,
               tabBarIcon: ({ focused }) => (
                  <View
                     style={{
                        position: "absolute",
                        bottom: "50%",
                     }}
                  >
                     <AntDesign name="pluscircle" size={48} color={COLORS.primary50} />
                  </View>
               ),
            }}
         />

         <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
               tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="bells" size={20} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="user" size={20} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default TabNavigation;

const styles = StyleSheet.create({
   tabBar: {
      height: 70,
      paddingHorizontal: 10,
      position: "absolute",
   },
});
