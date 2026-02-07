import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/ChatScreenStyles';
import Avatar from './Avatar';

export default function ChatBubble({ text, isUser, avatarSource, initials }) {
  return (
    <View style={[styles.bubbleRow, isUser ? styles.bubbleRowUser : styles.bubbleRowAgent]}>
      {!isUser && <Avatar source={avatarSource} initials={initials} />}
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.agentBubble]}>
        <Text style={isUser ? styles.userBubbleText : styles.bubbleText}>{text}</Text>
      </View>
      {isUser && <Avatar source={avatarSource} initials={initials} />}
    </View>
  );
} 