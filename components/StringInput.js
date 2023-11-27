import React from "react";
import { View } from "react-native";
import { Input } from "@rneui/themed";

import InputStyle from "../styles/InputStyle";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebaseConfig";

export default function StringInput() {
  let [message, setMessage] = React.useState("");
  let [messageTime, setMessageTime] = React.useState(null);

  //TODO: add sender and addressee id

  const handleEnterPress = async () => {
    // Save the current input content
    const savedMessage = message;
    // Save the current time and date
    const currentTime = new Date().toLocaleTimeString([], { hour12: false });
    const currentDate = new Date().toLocaleDateString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    messageTime = `${currentDate} ${currentTime}`;

    try {
      await addDoc(collection(db, "messages"), {
        message: savedMessage,
        messageTime: messageTime,
        // senderId: senderId,
      });

      // Set the message time to the current time and clear the input
      setMessage("");

      // console.log("message: ", savedMessage);
      // console.log("messageTime: ", messageTime);
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
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
        }} // ? Why doesn't it work on web?
      />
    </View>
  );
}
