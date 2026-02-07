import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ChatScreenStyles';
import Avatar from './Avatar';

export default function HeaderCard({ avatarSource, networth, onMenuPress }) {
  return (
    <View style={styles.headerCard}>
      <Avatar source={avatarSource} initials="U" size={48} />
      <View style={styles.headerCardTextCol}>
        <Text style={styles.headerCardNetworth}>{networth}</Text>
        <Text style={styles.headerCardLabel}>Your networth</Text>
      </View>
      <TouchableOpacity onPress={onMenuPress} style={styles.headerCardMenuBtn}>
        <Ionicons name="ellipsis-horizontal" size={28} color="#888" />
      </TouchableOpacity>
    </View>
  );
}