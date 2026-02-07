// ChatScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatBubble from '../components/ChatBubble';
import HeaderCard from '../components/HeaderCard';
import InputBar from '../components/InputBar';
import ReportCard from '../components/ReportCard';
import styles from '../styles/ChatScreenStyles';

const dummyMessages = [
  { id: '1', from: 'agent', text: 'How can I assist you?', avatar: require('../assets/agent.png') },
  { id: '2', from: 'user', text: "What's my FIRE progress?", avatar: require('../assets/user.png') },
  { id: '3', from: 'agent', text: 'Sure! Here is your progress so far:', avatar: require('../assets/agent.png') },
  { id: '4', from: 'agent', type: 'report', report: {
    goal: '$2,300,000',
    networth: '$200,000',
    monthly: '$3,600',
    retireYear: '2039 (14 years)',
    growthYear: '2030 (5 years)',
    savingsRate: '11%',
    grade: '2045 (20 years)'
  }, avatar: require('../assets/agent.png') },
  { id: '5', from: 'agent', text: 'Would you like to see more?', avatar: require('../assets/agent.png') },
];

// Thinking animation component
function ThinkingBubble() {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      const duration = 600;
      const delay = 200;

      Animated.loop(
        Animated.sequence([
          Animated.timing(dot1, { toValue: 1, duration, useNativeDriver: true }),
          Animated.timing(dot1, { toValue: 0, duration, useNativeDriver: true }),
        ])
      ).start();

      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot2, { toValue: 1, duration, useNativeDriver: true }),
            Animated.timing(dot2, { toValue: 0, duration, useNativeDriver: true }),
          ])
        ).start();
      }, delay);

      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot3, { toValue: 1, duration, useNativeDriver: true }),
            Animated.timing(dot3, { toValue: 0, duration, useNativeDriver: true }),
          ])
        ).start();
      }, delay * 2);
    };

    animate();
  }, []);

  return (
    <View style={styles.thinkingBubble}>
      <View style={styles.thinkingContent}>
        <Text style={styles.thinkingText}>Thinking</Text>
        <View style={styles.dotsContainer}>
          <Animated.View style={[styles.dot, { opacity: dot1 }]} />
          <Animated.View style={[styles.dot, { opacity: dot2 }]} />
          <Animated.View style={[styles.dot, { opacity: dot3 }]} />
        </View>
      </View>
    </View>
  );
}

export default function ChatScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const flatListRef = useRef(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Add a small delay to ensure the message is rendered before scrolling
    const timer = setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), from: 'user', text: input, avatar: require('../assets/user.png') };
    setMessages(prev => [...prev, userMessage]);
    const messageToSend = input;
    setInput('');
    Keyboard.dismiss();

    // Create abort controller for cancellation
    const controller = new AbortController();
    setAbortController(controller);
    setIsLoading(true);

    // Add thinking bubble
    const thinkingId = Date.now().toString() + '_thinking';
    setMessages(prev => [...prev, { id: thinkingId, from: 'agent', type: 'thinking' }]);

    try {
      // Mock API response for development
      let mockText = '';
      let mockReport = null;
      
      const lowerMessage = messageToSend.toLowerCase();
      
      if (lowerMessage.includes('progress') || lowerMessage.includes('fire') || lowerMessage.includes('report')) {
        mockText = `Here's your current FIRE progress report. You're doing great with an 18% savings rate!`;
        mockReport = {
          goal: '$2,500,000',
          networth: '$750,000',
          monthly: '$4,800',
          retireYear: '2037 (12 years)',
          growthYear: '2031 (6 years)',
          savingsRate: '18%',
          grade: 'A-'
        };
      } else if (lowerMessage.includes('savings') || lowerMessage.includes('save')) {
        mockText = `Great question about savings! Your current monthly savings of $4,800 is excellent. Here's your updated progress:`;
        mockReport = {
          goal: '$2,500,000',
          networth: '$750,000',
          monthly: '$4,800',
          retireYear: '2037 (12 years)',
          growthYear: '2031 (6 years)',
          savingsRate: '18%',
          grade: 'A-'
        };
      } else if (lowerMessage.includes('timeline') || lowerMessage.includes('retire')) {
        mockText = `Based on your current trajectory, here's your retirement timeline analysis:`;
        mockReport = {
          goal: '$2,500,000',
          networth: '$750,000',
          monthly: '$4,800',
          retireYear: '2037 (12 years)',
          growthYear: '2031 (6 years)',
          savingsRate: '18%',
          grade: 'A-'
        };
      } else {
        mockText = `I understand you're asking about: "${messageToSend}". Here's some helpful FIRE advice and your current progress:`;
        mockReport = {
          goal: '$2,500,000',
          networth: '$750,000',
          monthly: '$4,800',
          retireYear: '2037 (12 years)',
          growthYear: '2031 (6 years)',
          savingsRate: '18%',
          grade: 'A-'
        };
      }

      const mockResponse = {
        text: mockText,
        report: mockReport
      };

      // Simulate API delay with abort check
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, 2000);
        controller.signal.addEventListener('abort', () => {
          clearTimeout(timeout);
          reject(new Error('Request cancelled'));
        });
      });

      // Remove thinking bubble
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));

      let newAgentMessages = [];
      if (mockResponse.text) {
        newAgentMessages.push({ 
          id: Date.now().toString() + '_text', 
          from: 'agent', 
          text: mockResponse.text, 
          avatar: require('../assets/agent.png') 
        });
      }
      if (mockResponse.report) {
        newAgentMessages.push({ 
          id: Date.now().toString() + '_report', 
          from: 'agent', 
          type: 'report', 
          report: mockResponse.report, 
          avatar: require('../assets/agent.png') 
        });
      }
      
      if (newAgentMessages.length > 0) {
         setMessages(prev => [...prev, ...newAgentMessages]);
         // Force scroll to end after adding new messages
         setTimeout(() => {
           if (flatListRef.current) {
             flatListRef.current.scrollToEnd({ animated: true });
           }
         }, 200);
      }

    } catch (error) {
      // Remove thinking bubble on error
      setMessages(prev => prev.filter(msg => msg.id !== thinkingId));
      
      if (error.message === 'Request cancelled') {
        console.log('Request was cancelled');
        return;
      }
      
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to get response from agent.');
      setMessages((prev) => [...prev, {
        id: Date.now().toString() + '_err',
        from: 'agent',
        text: `Sorry, something went wrong: ${error.message}`,
      }]);
    } finally {
      setIsLoading(false);
      setAbortController(null);
    }
  };

  const handleCancel = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  const handleMic = () => {
    console.log('Microphone button pressed');
  };

  const renderMessage = ({ item }) => {
    if (item.type === 'thinking') {
      return <ThinkingBubble />;
    }
    if (item.type === 'report') {
      return <ReportCard report={item.report} />;
    }
    return (
      <ChatBubble
        text={item.text}
        isUser={item.from === 'user'}
        avatarSource={item.avatar}
        initials={item.from === 'user' ? 'U' : 'A'}
      />
    );
  };

  return (
    <View style={[styles.container, { flex: 1, flexDirection: 'column', backgroundColor: '#fff', paddingTop: insets.top }]}>
      <HeaderCard 
        avatarSource={require('../assets/user.png')}
        networth="$700,000"
        onMenuPress={() => console.log('Menu pressed')}
      />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{ paddingBottom: 12, flexGrow: 1 }}
          style={styles.chatContainer}
          showsVerticalScrollIndicator={false}
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
            autoscrollToTopThreshold: 10,
          }}
          onContentSizeChange={() => {
            if (flatListRef.current) {
              flatListRef.current.scrollToEnd({ animated: true });
            }
          }}
        />

        <View style={{ paddingBottom: insets.bottom }}>
          <InputBar
            value={input}
            onChangeText={setInput}
            onSend={isLoading ? handleCancel : handleSend}
            onMic={handleMic}
            isLoading={isLoading}
            style={{ marginBottom: -10 }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}