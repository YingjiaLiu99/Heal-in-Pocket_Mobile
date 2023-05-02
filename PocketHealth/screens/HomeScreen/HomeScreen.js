import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, KeyboardAvoidingView } from "react-native-web";
import { SearchBar } from "@rneui/base";
import { useState } from "react";
import styles from "./styles"

import PatientInfo from "./components/PatientInfo";
import ProviderList from "./components/ProviderList";


const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const performSwitch = () => {
    navigation.navigate("PatientResponse");
  };
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text onPress={() => performSwitch()}>Home Screen</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => setSearch(text)}
          value={search}
          platform="ios"
        />
        {/* <Button onPress={() => performSwitch()} title='Switch to patient response'/> */}
        <Text style={styles.text}>ProviderList</Text>
        <ProviderList></ProviderList>
        <Text style={styles.text}>Direct Messages</Text>
        <PatientInfo></PatientInfo>
        <PatientInfo></PatientInfo>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewComplaint")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>New Complaint</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

