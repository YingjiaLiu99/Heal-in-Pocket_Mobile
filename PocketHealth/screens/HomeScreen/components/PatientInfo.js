import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, KeyboardAvoidingView } from "react-native-web";

const PatientInfo = (props) => {
  return (
    <View style={styles.container}>
      <Text>Provider's name</Text>
      <Text>Time, date</Text>
      <Text>My complaint</Text>
      <Text>response</Text>
    </View>
  );
};

export default PatientInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 131,
    width: "98%",
    margin: 5,
    backgroundColor: "#E5E5E5",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});