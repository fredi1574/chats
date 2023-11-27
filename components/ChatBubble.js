import { View } from "react-native";
import { Text } from "@rneui/base";

import ChatBubbleStyle from "../styles/ChatBubbleStyle";

export default function ChatBubble() {
  let message =
    "This is my own message. and this is a test of the chat bubble. i need to see whether it works or not.";

  return (
    <View>
      <Text style={(ChatBubbleStyle.message, ChatBubbleStyle.ownMessage)}>
        {message}
        <Text style={ChatBubbleStyle.ownMessageTime}>
          {"\n"}
          {new Date().toLocaleTimeString([], { hour12: false })}
        </Text>
      </Text>
    </View>
  );
}
