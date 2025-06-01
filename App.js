import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import CardResponseScreen from './screens/CardResponseScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Cards" component={CardResponseScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}