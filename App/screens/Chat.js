import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../components/Avatar";
import Message from "../components/Message";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { colours } from "../constants/Colours";
import AndroidSafeArea from "../util/AndroidSafeArea";

export default function Chat() {
  // talking veronica message updates
  const talkingVeronicaMessages = [
    "Hi I’m Veronica. How are you today?",
    "Are you sure? You know it’s okay to admit it’s bad if it was.",
    "That’s very unprofessional. Stop it!",
    "You know you can tell me anything right?",
    "Why?",
    "No [Daniel]. I’m your very special friend.",
  ];

  const [talkingVeronicaMessageIndex, setTalkingVeronicaMessageIndex] =
    useState(0);

  const updateTalkingVeronicaMessage = () => {
    if (talkingVeronicaMessageIndex < talkingVeronicaMessages.length - 1) {
      setTalkingVeronicaMessageIndex(talkingVeronicaMessageIndex + 1);
      setDanielMessage("");
      setInputValue("");
    } else {
      setTalkingVeronicaMessageIndex(0);
    }
  };

  // daniel message updates
  const [danielMessage, setDanielMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  // dynamic scroll enabling
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const submitMessage = () => {
    setDanielMessage(inputValue);
    Keyboard.dismiss();
  };

  return (
    <View style={AndroidSafeArea.droidSafeArea}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar transitionCount={7} />
          </View>
          <TouchableOpacity onPress={updateTalkingVeronicaMessage}>
            <Message
              textMessage={talkingVeronicaMessages[talkingVeronicaMessageIndex]}
              styling={[styles.chat, styles.talkingVeronicaChat]}
              textStyling={styles.talkingVeronicaChatText}
            />
          </TouchableOpacity>
          <View style={styles.danielChat}>
            <Message
              textMessage={danielMessage}
              styling={[styles.chat, styles.danielChat]}
              textStyling={styles.danielChatText}
            />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.inputText}
          onChangeText={setInputValue}
          value={inputValue}
        />
        <TouchableOpacity onPress={submitMessage}>
          <Ionicons
            name="send"
            size={40}
            color="black"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
    marginTop: 50,
  },
  chat: {
    borderWidth: 4,
    borderColor: colours.grey,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  talkingVeronicaChat: {
    backgroundColor: colours.black,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 150,
    width: 250,
  },
  talkingVeronicaChatText: {
    fontSize: 20,
    color: colours.white,
  },
  danielChat: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 150,
    marginTop: 10,
    marginRight: 20,
  },
  danielChatText: {
    fontSize: 20,
    color: colours.black,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    flexGrow: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    paddingLeft: 20,
  },
  inputIcon: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
