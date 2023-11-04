import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeightSpacer from "../component/HeightSpacer";
import Styles from "../component/reusable.style";

const Profile = () => {
  return (
    <SafeAreaView>
      <HeightSpacer height={20} />
      <Text style={[Styles.container, Styles.heading1]}>My Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
