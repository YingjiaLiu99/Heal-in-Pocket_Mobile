import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, KeyboardAvoidingView } from "react-native-web";
import PatientIcon from "./PatientIcon.js";

const ProviderList = (props) => {
  let providers = [];
  let x = ["Provider1", "Provider2", "Provider3", "Provider4", "Provider5"];

  x.map((item, index) =>
    providers.push(
      <View key={index}>
        <PatientIcon name={item} key={index}></PatientIcon>
      </View>
    )
  );

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.container}>
      {providers}
    </ScrollView>
  );
};

export default ProviderList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '30%',
    margin: 5,
    borderWidth: 1,
    borderRadius: 20,
  },
});