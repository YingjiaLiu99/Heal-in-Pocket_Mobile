import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, KeyboardAvoidingView } from "react-native-web";

const PatientIcon = (props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <Text style={styles.textUnderImage}>{props.name}</Text>
    </View>
  );
};

export default PatientIcon;

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    padding: 5,
    height: 100,
    borderRadius: 50,
    margin: 3,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  textUnderImage: {
    textAlign: "center",
  }
});