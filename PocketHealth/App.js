// App.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignUpScreen from './screens/LoginScreen/SignUpScreen'
import WelcomeScreen from './screens/LoginScreen/WelcomeScreen';
import BasicPatientInfoScreen from './screens/LoginScreen/BasicPatientInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  // return <HomeScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BasicPatientInfo" component={BasicPatientInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
