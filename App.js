import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './app/ChatScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIREstarter AI 🔥</Text>
      <Text style={styles.subtitle}>Your FIRE Journey Starts Here</Text>
      <Text style={styles.description}>
        Track your progress toward Financial Independence and Early Retirement
      </Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <Text style={styles.description}>Search functionality coming soon...</Text>
    </View>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Chat') {
                iconName = 'comments';
              } else if (route.name === 'Search') {
                iconName = 'search';
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: 'transparent',
              elevation: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen 
            name="Search" 
            component={SearchScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
  },
});