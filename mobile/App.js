import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Messages from './screens/messages';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
