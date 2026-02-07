import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>FIREstarter AI</Text>
      <Text style={{ marginTop: 10 }}>Welcome to your FIRE journey!</Text>
    </View>
  );
} 