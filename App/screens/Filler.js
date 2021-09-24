import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/Avatar";
import AndroidSafeArea from "../util/AndroidSafeArea";

export default function Filler() {
  return (
    <View style={AndroidSafeArea.droidSafeArea}>
      <View style={styles.container}>
        <Avatar transitionCount={4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
  },
});
