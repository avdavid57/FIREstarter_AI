import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/ChatScreenStyles';

export default function Avatar({ source, initials, size = 40 }) {
  if (source) {
    return <Image source={source} style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />;
  }
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }]}> 
      <Text style={styles.avatarInitials}>{initials}</Text>
    </View>
  );
} 