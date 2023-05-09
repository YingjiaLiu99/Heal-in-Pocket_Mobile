import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PastRecordScreen from "../screens/PatientHistoryScreen/PatientHistoryScreen";
import ChatMainPage from "../screens/ChatRoom/ChatMainScreen";

const homeName = "Home";
const patientName = "User";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName == homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName == patientName) {
              iconName = focused ? "person" : "person-outline";
            } else if (routeName == chatName) {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={patientName} component={PastRecordScreen} />
        <Tab.Screen name={chatName} component={ChatMainPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {},
});