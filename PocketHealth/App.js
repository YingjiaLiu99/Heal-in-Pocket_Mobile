// App.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignUpScreen from './screens/LoginScreen/SignUpScreen'
import WelcomeScreen from './screens/LoginScreen/WelcomeScreen';
import BasicPatientInfoScreen from './screens/LoginScreen/BasicPatientInfoScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import PatientInfo from './screens/PatientHistoryScreen/PatientHistoryScreen';
import PatientVitals from './screens/PatientHistoryScreen/PatientVitalSelfRecordScreen';
import MyComplaintScreen from './screens/PatientHistoryScreen/MyComplaintScreen';

const Stack = createStackNavigator();

export default function App() {
  // return <HomeScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BasicPatientInfo" component={BasicPatientInfoScreen} />
        <Stack.Screen name="PatientInfo" component={PatientInfo} />
        <Stack.Screen name="PatientVitals" component={PatientVitals} />
        <Stack.Screen name="MyComplaintScreen" component={MyComplaintScreen} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
