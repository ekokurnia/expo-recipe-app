import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeightSpacer from "../component/HeightSpacer";
import Styles from "../component/reusable.style";

const Notification = () => {
  return (
    <SafeAreaView>
      <HeightSpacer height={20} />
      <Text style={[Styles.container, Styles.heading1]}>Notification</Text>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
