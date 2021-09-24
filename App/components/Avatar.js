import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Avatar({ transitionCount }) {
  const [stance, setStance] = useState("Sitting");
  const [transition, setTransition] = useState(1);

  const updateAvatar = () => {
    setTransition(transition + 1);

    if (transition === transitionCount) {
      setStance("Falling");
    } else if (transition > transitionCount) {
      setTransition(1);
      setStance("Sitting");
    }
  };

  return (
    <TouchableOpacity onPress={updateAvatar}>
      <Text style={styles.text}>Talking Veronica</Text>
      <Text style={styles.text}>{stance}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});
