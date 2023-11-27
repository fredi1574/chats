import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  message: {
    backgroundColor: "#cbcbcb",
    color: "#4d4d4d",
    padding: "2%",
    margin: "1.5%",
    maxWidth: "50%",
    // float: "left",
    // wordWrap: "break-word",
  },
  ownMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#5bbe25",
    color: "#2e511c",
    maxWidth: "50%",
    borderRadius: 7,
    padding: "2%",
  },
  messageTime: {
    margin: "0",
    fontSize: 10,
    color: "#949494",
    textAlign: "left",
  },
  ownMessageTime: {
    margin: "0",
    fontSize: 10,
    color: "#2e511ca4",
    textAlign: "right",
  },
});

export default styles;
