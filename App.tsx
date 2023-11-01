import { useFonts } from "expo-font";
import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigation />;
}
