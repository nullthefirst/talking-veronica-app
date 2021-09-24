import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Message({ textMessage, styling, textStyling }) {
  return textMessage !== "" ? (
    <View style={styling}>
      <Text style={textStyling}>{textMessage}</Text>
    </View>
  ) : (
    <></>
  );
}
