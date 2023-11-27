import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StringInput from "./components/StringInput";

import ChatBubble from "./components/ChatBubble";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChatBubble />
      <StringInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f3ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
