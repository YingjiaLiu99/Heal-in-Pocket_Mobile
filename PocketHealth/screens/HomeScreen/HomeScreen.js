import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, KeyboardAvoidingView } from "react-native-web";
import { SearchBar } from "@rneui/base";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles"
import PatientInfo from "./components/PatientInfo";
import ProviderList from "./components/ProviderList";


const HomeScreen = () => {

  const [search, setSearch] = useState("");

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null
    });
  }, [navigation]);

  const performSwitch = () => {
    navigation.navigate("PatientResponse");
  };

  const handleNewComplaint = () => {
    navigation.navigate('New Complaint');
  }

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
            onPress={handleNewComplaint}
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

