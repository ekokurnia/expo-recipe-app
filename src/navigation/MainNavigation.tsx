import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnBoard } from "../screen";
import TabNavigation from "./TabNavigation";
import { RootStackParamList } from "../../type";

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigation = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
