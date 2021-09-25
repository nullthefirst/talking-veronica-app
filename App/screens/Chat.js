import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avatar';
import Message from '../components/Message';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import { colours } from '../constants/Colours';
import AndroidSafeArea from '../util/AndroidSafeArea';

// Talking Veronica audio
import sound1 from '../assets/speech/01.mp3';
import sound2 from '../assets/speech/02.mp3';
import sound3 from '../assets/speech/03.mp3';
import sound4 from '../assets/speech/04.mp3';
import sound5 from '../assets/speech/05.mp3';
import sound6 from '../assets/speech/06.mp3';

// chat screen
export default function Chat() {
  // Talking Veronica message updates
  const talkingVeronicaMessages = [
    '',
    'Hi I’m Veronica. How are you today?',
    'Are you sure? You know it’s okay to admit it’s bad if it was.',
    'That’s very unprofessional. Stop it!',
    'You know you can tell me anything right?',
    'Why?',
    'No [Daniel]. I’m your very special friend.',
  ];

  const [talkingVeronicaMessageIndex, setTalkingVeronicaMessageIndex] =
    useState(0);

  const talkingVeronicaAudio = [
    '',
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
  ];

  // Talking Veronica audio setup
  const [soundToPlay, setSoundToPlay] = useState(
    talkingVeronicaAudio[talkingVeronicaMessageIndex],
  );

  const updateTalkingVeronicaMessage = () => {
    if (talkingVeronicaMessageIndex < talkingVeronicaMessages.length - 1) {
      setTalkingVeronicaMessageIndex(talkingVeronicaMessageIndex + 1);
      setSoundToPlay(talkingVeronicaAudio[talkingVeronicaMessageIndex + 1]);
    } else {
      setTalkingVeronicaMessageIndex(0);
      setSoundToPlay(talkingVeronicaAudio[0]);
    }
  };

  // daniel message updates
  const [danielMessage, setDanielMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  // dynamic scroll enabling
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const submitMessage = () => {
    setDanielMessage(inputValue);
    setInputValue('');
    Keyboard.dismiss();
  };

  return (
    <View style={AndroidSafeArea.droidSafeArea}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar transitionCount={7} />
          </View>
          {talkingVeronicaMessages[talkingVeronicaMessageIndex] === '' ? (
            <TouchableOpacity onPress={updateTalkingVeronicaMessage}>
              <Text style={[styles.chat, styles.avatar, styles.beginChat]}>
                Begin Session
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={updateTalkingVeronicaMessage}>
              <Message
                textMessage={
                  talkingVeronicaMessages[talkingVeronicaMessageIndex]
                }
                styling={[styles.chat, styles.talkingVeronicaChat]}
                textStyling={styles.talkingVeronicaChatText}
              />
            </TouchableOpacity>
          )}
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
    justifyContent: 'center',
    alignItems: 'center',
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
  beginChat: {
    fontSize: 20,
    color: colours.white,
    backgroundColor: colours.black,
    width: 180,
    height: 50,
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 150,
    marginTop: 10,
    marginRight: 20,
  },
  danielChatText: {
    fontSize: 20,
    color: colours.black,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
