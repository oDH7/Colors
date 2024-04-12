import { View, ScrollView } from "react-native";
import { styles } from "./styles/Style";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView horizontal={true}>
        <View style={styles.cont}>
          <View style={[styles.body, { backgroundColor: "red" }]}></View>
          <View style={[styles.body, { backgroundColor: "green" }]}></View>
          <View style={[styles.body, { backgroundColor: "blue" }]}></View>
          <View style={[styles.body, { backgroundColor: "yellow" }]}></View>
          <View style={[styles.body, { backgroundColor: "purple" }]}></View>
          <View style={[styles.body, { backgroundColor: "grey" }]}></View>
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
