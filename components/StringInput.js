import React from "react";
import { View } from "react-native";
import { Input } from "@rneui/themed";

import InputStyle from "../styles/InputStyle";

export default function StringInput() {
  let [message, setMessage] = React.useState("");
  let [messageTime, setMessageTime] = React.useState(null);

  const handleEnterPress = () => {
    // Saves the current input in a message variable
    // TODO: Upload this as a new message
    const savedMessage = message;
    const currentTime = new Date().toLocaleTimeString([], { hour12: false });
    // Sets the message time to the current time and clears the input
    setMessageTime(currentTime);
    setMessage("");

    console.log("message: ", savedMessage);
    console.log("messageTime: ", currentTime);
  };

  return (
    <View style={InputStyle.input}>
      <Input
        placeholder="Type a message..."
        value={message}
        onChangeText={(input) => setMessage(input)}
        onSubmitEditing={handleEnterPress}
        rightIcon={{
          name: "send",
          color: "#176099",
          type: "feather",
          onPress: handleEnterPress,
        }} // ? Why doesnt it work on web?
      />
    </View>
  );
}
