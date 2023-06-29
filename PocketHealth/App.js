// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignUpScreen from './screens/LoginScreen/SignUpScreen';
import BasicPatientInfoForm from './screens/Forms/BasicPatientInfoForm';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import PatientHistoryForm from './screens/Forms/PatientHistoryForm';
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
const homeName = "Home";
const patientName = "User";
const infoName = "Info";

function HomeTabs() {
  return (
    <Tab.Navigator
          // initialRouteName={homeName}
          // screenOptions={({ route }) => ({
          //   tabBarIcon: ({ focused, color, size }) => {
          //     let iconName;
          //     let routeName = route.name;

          //     if (routeName == homeName) {
          //       iconName = focused ? "home" : "home-outline";
          //     } else if (routeName == infoName) {
          //       iconName = focused ? "folder" : "folder-outline";
          //     } else if (routeName == patientName) {
          //       iconName = focused ? "person" : "person-outline";
          //     }

          //     return <Ionicons name={iconName} size={size} color={color} />;
          //   },
          // })}
    >
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
      <LoginStack.Screen name="Sign Up" component={SignUpScreen} />
      <LoginStack.Screen name="Basic Patient Info" component={BasicPatientInfoForm} />
      <LoginStack.Screen name="Medical History" component={PatientHistoryForm} />
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

