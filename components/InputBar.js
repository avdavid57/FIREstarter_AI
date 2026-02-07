import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ChatScreenStyles';

export default function InputBar({ value, onChangeText, onSend, onMic, isLoading = false }) {
  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.input}
        placeholder="Ask me anything"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#aaa"
        editable={!isLoading}
      />
      <TouchableOpacity onPress={onMic} style={styles.inputIcon} disabled={isLoading}>
        <Ionicons name="mic-outline" size={22} color={isLoading ? "#ddd" : "#bbb"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSend} style={styles.inputIcon}>
        <Ionicons 
          name={isLoading ? "close" : "send"} 
          size={26} 
          color={isLoading ? "#ff4444" : "#3366FF"} 
        />
      </TouchableOpacity>
    </View>
  );
} 