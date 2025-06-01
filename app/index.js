import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyMessages = [
  { id: '1', from: 'agent', text: 'How can I help you?' },
  { id: '2', from: 'user', text: "What's my FIRE progress?" },
  { id: '3', from: 'agent', type: 'report', report: {
    goal: '$2,300,000.00',
    networth: '$153,023.01',
    monthly: '$3,600',
    retireYear: '2039 (14 years)',
    growthYear: '2030 (5 years)',
    savingsRate: '11$',
    grade: '2045 (20 years)'
  } },
  { id: '4', from: 'agent', text: 'Would you like to know anything else?' },
];

function ReportCard({ report }) {
  return (
    <View style={styles.reportCard}>
      <View style={styles.reportHeader}><Text style={styles.reportHeaderText}>Report</Text></View>
      <View style={styles.reportBody}>
        <Text style={styles.reportSectionTitle}>Progress</Text>
        <Text><Text style={styles.bold}>Goal:</Text>         {report.goal}</Text>
        <Text><Text style={styles.bold}>Networth:</Text>     {report.networth}</Text>
        <Text><Text style={styles.bold}>Monthly Savings:</Text> {report.monthly}</Text>
        <Text style={styles.reportSectionTitle}>FIRE Timeline</Text>
        <Text><Text style={styles.bold}>Retire Year:</Text>  {report.retireYear}</Text>
        <Text><Text style={styles.bold}>10% Growth:</Text>   {report.growthYear}</Text>
        <Text style={styles.reportSectionTitle}>Grade</Text>
        <Text><Text style={styles.bold}>Savings Rate:</Text> {report.savingsRate}</Text>
        <Text><Text style={styles.bold}>Grade:</Text>        {report.grade}</Text>
      </View>
    </View>
  );
}

export default function ChatScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now().toString(), from: 'user', text: input };
    setInput('');
    setMessages(prev => [...prev, newMsg]);
    Keyboard.dismiss();
  };

  const renderMessage = ({ item }) => {
    if (item.type === 'report') {
      return (
        <View style={[styles.bubble, styles.agentBubble, { padding: 0, backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 }]}> 
          <ReportCard report={item.report} />
        </View>
      );
    }
    return (
      <View style={[styles.bubble, item.from === 'user' ? styles.userBubble : styles.agentBubble]}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Ionicons name="person-circle-outline" size={28} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn}>
            <MaterialIcons name="menu" size={28} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryColumn}>
          <Text style={styles.label}>Net worth</Text>
          <Text style={styles.value}>$153,023.01</Text>
          <Text style={styles.goal}>Goal: $2,300,000</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryColumn}>
          <Text style={styles.label}>FIRE Year</Text>
          <Text style={styles.value}>2039</Text>
          <Text style={styles.goal}>(14 years)</Text>
        </View>
      </View>
      {/* Chat Area */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContentContainer}
        />
        {/* Input Field */}
        <View style={styles.inputArea}>
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
          <View style={styles.navButtonsRow}>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="chatbubble-ellipses-outline" size={28} color="#444" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="bar-chart-outline" size={28} color="#444" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    backgroundColor: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconBtn: {
    padding: 2,
    marginLeft: 8,
  },
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffb3ab',
    borderRadius: 24,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    alignSelf: 'stretch',
    opacity: 0.5,
  },
  summaryColumn: { alignItems: 'center', flex: 1 },
  label: { fontWeight: '600', marginBottom: 4, fontSize: 15 },
  value: { fontSize: 24, fontWeight: 'bold', marginBottom: 2 },
  goal: { fontSize: 12, color: '#333' },
  keyboardAvoidingView: { flex: 1 },
  chatContainer: { flex: 1 },
  chatContentContainer: { padding: 16, paddingBottom: 0 },
  bubble: {
    padding: 12,
    borderRadius: 18,
    marginVertical: 4,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 1,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffb3ab',
    color: '#222',
  },
  agentBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#f7f7f7',
    color: '#222',
  },
  reportCard: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    backgroundColor: '#f3f3f3',
    marginVertical: 4,
    minWidth: 240,
    maxWidth: 320,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  reportHeader: {
    backgroundColor: '#b2e6e6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  reportHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  reportBody: {
    padding: 8,
  },
  reportSectionTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 2,
    fontSize: 15,
  },
  bold: { fontWeight: 'bold' },
  inputArea: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'transparent',
    marginRight: 8,
    fontSize: 16,
  },
  navButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  navButton: {
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 1,
    minWidth: 64,
  },
}); 