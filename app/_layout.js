import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffb3ab',
        },
        headerTintColor: '#fff',
        title: 'FIRE Chat',
      }}
    />
  );
} 