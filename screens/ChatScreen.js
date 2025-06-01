// FIRE-3: Build Chat UI Skeleton

import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, TextInput, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import styles from './ChatScreen.styles';

const mockMessages = [
  { id: '1', sender: 'user', content: 'How much have I saved this month?' },
  { id: '2', sender: 'ai', content: 'You’ve saved $2,100 so far. Great job!' },
];

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        {/* Chat Message List */}
        <FlatList
          data={mockMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.messageContainer, item.sender === 'user' ? styles.user : styles.ai]}>
              <Card style={styles.messageCard}>
                <Card.Content>
                  <Text>{item.content}</Text>
                </Card.Content>
              </Card>
            </View>
          )}
          contentContainerStyle={styles.chatContent}
        />

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            placeholder="Ask a question..."
            style={styles.input}
            placeholderTextColor="#999"
          />
          <IconButton icon="send" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
