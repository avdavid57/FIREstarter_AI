// ChatScreen.js
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyMessages = [
  { id: '1', from: 'agent', text: 'How can I help you?' },
  { id: '2', from: 'user', text: "What's my FIRE progress?" },
  { id: '3', from: 'agent', text: 'Sure! Here is your progress so far:' },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now().toString(), from: 'user', text: input };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.bubble, item.from === 'user' ? styles.userBubble : styles.agentBubble]}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Summary */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryColumn}>
          <Text style={styles.label}>Net worth</Text>
          <Text style={styles.value}>$153,023.01</Text>
          <Text style={styles.goal}>Goal: $2,300,000</Text>
        </View>
        <View style={styles.summaryColumn}>
          <Text style={styles.label}>FIRE Year</Text>
          <Text style={styles.value}>2039</Text>
          <Text style={styles.goal}>(14 years)</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.chatContainer}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything.."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="arrow-up-circle" size={32} color="#444" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffb3ab',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  summaryColumn: { alignItems: 'center' },
  label: { fontWeight: '600', marginBottom: 4 },
  value: { fontSize: 18, fontWeight: 'bold' },
  goal: { fontSize: 12, color: '#333' },
  chatContainer: { flex: 1, marginBottom: 12 },
  bubble: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '75%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffb3ab',
  },
  agentBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f3f3f3',
    marginRight: 8,
  },
}); 