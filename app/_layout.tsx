import { Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Hello FIREstarter!</Text>
      <Text>This should work now</Text>
    </View>
  );
} 