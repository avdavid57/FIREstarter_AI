import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Header Card
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6F5F5',
    borderRadius: 18,
    padding: 16,
    margin: 12,
    marginTop: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  headerCardTextCol: {
    flex: 1,
    marginLeft: 12,
  },
  headerCardNetworth: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  headerCardLabel: {
    fontSize: 16,
    color: '#444',
    marginTop: 2,
  },
  headerCardMenuBtn: {
    marginLeft: 8,
    padding: 4,
  },
  // Avatar
  avatar: {
    backgroundColor: '#eee',
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarInitials: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#888',
  },
  // Chat Bubbles
  bubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
    marginHorizontal: 8,
  },
  bubbleRowUser: {
    justifyContent: 'flex-end',
  },
  bubbleRowAgent: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '70%',
    padding: 14,
    borderRadius: 18,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  userBubble: {
    backgroundColor: '#6C8CFF',
    borderTopRightRadius: 6,
  },
  agentBubble: {
    backgroundColor: '#F5F8FC',
    borderTopLeftRadius: 6,
  },
  bubbleText: {
    fontSize: 17,
    color: '#222',
  },
  userBubbleText: {
    fontSize: 17,
    color: '#fff',
  },
  // Report Card
  reportCard: {
    backgroundColor: '#F5F8FC',
    borderRadius: 16,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  reportTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#222',
  },
  reportSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  reportSectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    flex: 1,
  },
  reportSectionText: {
    fontSize: 15,
    color: '#222',
    flex: 2,
  },
  reportSectionArrow: {
    fontSize: 22,
    color: '#B0B0B0',
    marginLeft: 8,
  },
  // Input Bar
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 17,
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    color: '#222',
  },
  inputIcon: {
    marginLeft: 8,
  },
  reportHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 2,
  },
  reportHeaderBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#EAF2FB',
    marginHorizontal: 2,
  },
  reportHeaderBtnSelected: {
    backgroundColor: '#6C8CFF',
  },
  reportHeaderBtnText: {
    fontWeight: 'bold',
    color: '#6C8CFF',
    fontSize: 15,
  },
  reportHeaderBtnTextSelected: {
    color: '#fff',
  },
  reportSectionDetails: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  // Header Bar
  headerBar: {
    backgroundColor: '#D6F5F5',
    paddingTop: Constants.statusBarHeight + 18,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerBarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    letterSpacing: 1,
  },
  // Chat Messages
  chatContainer: {
    flex: 1,
  },
  // Thinking bubble styles
  thinkingBubble: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  thinkingContent: {
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
  },
  thinkingText: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#666',
    marginHorizontal: 2,
  },
});