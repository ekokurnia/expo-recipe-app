import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateRecipe = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>Create New Recipe</Text>
    </SafeAreaView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({});
