// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen/patient/LoginScreen';
import ProviderLoginScreen from './screens/LoginScreen/medical_provider/ProviderLoginScreen';
import SignUpScreen from './screens/LoginScreen/patient/SignUpScreen';
import ProviderSignUpScreen from './screens/LoginScreen/medical_provider/ProviderSignUpScreen';
import PhoneVerification from './screens/LoginScreen/PhoneVerification';
import ResetPassword from './screens/LoginScreen/ResetPassword';
import EnterPhoneNumber from './screens/LoginScreen/EnterPhoneNumber';
import BasicPatientInfoForm from './screens/LoginScreen/patient/BasicPatientInfoForm';
import MedicalHistory from './screens/LoginScreen/patient/MedicalHistory';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import VitalsCollectingForm from './screens/Forms/VitalsCollectingForm';
import NewComplaintForm from './screens/Forms/NewComplaintForm';
import PatientHistoryScreen from './screens/PatientHistoryScreen/PatientHistoryScreen';
import ChatMainPage from './screens/ChatRoom/ChatMainScreen';

import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ChatStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Home" options={{ headerShown: false }} component={HomeNavigator} />      
      <Tab.Screen name="My Chat" options={{ headerShown: false }} component={ChatNavigator} />
      <Tab.Screen name="My Record" options={{ headerShown: false }} component={HistoryNavigator} />
    </Tab.Navigator>
  );
}

function LoginNavigator() {
  return (
    <LoginStack.Navigator>      
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Provider Login" component={ProviderLoginScreen} />
      <LoginStack.Screen name="Sign Up" component={SignUpScreen} />
      <LoginStack.Screen name="Provider Sign Up" component={ProviderSignUpScreen} />
      <LoginStack.Screen name="Phone Verification" component={PhoneVerification} />
      <LoginStack.Screen name="Verify Phone Number" component={EnterPhoneNumber}/>
      <LoginStack.Screen name="Reset Password" component={ResetPassword}/>
      <LoginStack.Screen name="Basic Patient Info" component={BasicPatientInfoForm} />
      <LoginStack.Screen name="Medical History" component={MedicalHistory} />
      <LoginStack.Screen name="Patient's Vitals" component={VitalsCollectingForm} />
      {/* any follow up screens from home goes from here */}
    </LoginStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="New Complaint" component={NewComplaintForm} />
      {/* any follow up screens from home goes from here */}
    </HomeStack.Navigator>
  );
}

function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="Patient History" component={PatientHistoryScreen} />
      {/* any follow up screens from home goes from here */}
    </HistoryStack.Navigator>
  );
}

function ChatNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={ChatMainPage} />
      {/* any follow up screens from home goes from here */}
    </ChatStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen name="Login Page" options={{ headerShown: false }} component={LoginNavigator} />
        <Stack.Screen name="Main Page" options={{ headerShown: false }} component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

