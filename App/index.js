import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { colours } from './constants/Colours';
// import { screenWidth } from "./constants/Sizing";
import AndroidSafeArea from './util/AndroidSafeArea';

export default function Home({ navigation }) {
  return (
    <View style={AndroidSafeArea.droidSafeArea}>
      <View style={[styles.container, { flexDirection: 'column' }]}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Filler')}>
            <Image
              style={styles.avatarImage}
              source={require('./assets/images/Avatar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View>
              <Text style={styles.avatarText}>Talking</Text>
              <Text style={styles.avatarText}>Veronica</Text>
            </View>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 200,
  },
  avatarImage: {
    borderRadius: 100,
    borderColor: colours.grey,
    borderWidth: 5,
  },
  avatarText: {
    color: colours.grey,
    fontSize: 40,
    textAlign: 'center',
  },
});
