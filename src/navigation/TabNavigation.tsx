import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import { COLORS } from "../constant/theme";
import { Home, Discover, CreateRecipe, Notification, Profile } from "../screen";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="book" size={20} color={color} />
          ),
        }}
      />

      {/* Action Button */}
      <Tab.Screen
        name="CreateRecipe"
        component={CreateRecipe}
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="bells" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
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
    opacity: 1,
    position: "absolute",
  },
});
