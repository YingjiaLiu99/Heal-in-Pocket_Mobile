import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function OptionScreen({navigation, route}) {

    const {firstName, lastName, DOB, date, patientId} = route.params;

    const handleCreateNewRecord = () => {
        // Disable this function for beta testing
        // navigation.navigate('Upload New Record');

        navigation.navigate("Upload New Record",
        {
          firstName: firstName,
          lastName: lastName,
          DOB: DOB,
          patientId: patientId,
          date:date,
        });


    };

    const handleUploadRecord = () => {

    };

    return (
        <View style={styles.container}>

        <View style={{width:'100%',alignItems:'center',marginTop:150,marginBottom:50}}>
          <TouchableOpacity style={styles.button} onPress={handleCreateNewRecord}>
            <Text style={styles.buttonText}>Create a New Visit</Text>
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 40, fontWeight:400}}> OR </Text>

        <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:150}}>
          <TouchableOpacity style={styles.button} onPress={handleUploadRecord}>
            <Text style={styles.buttonText}>Upload Note</Text>
          </TouchableOpacity>
        </View>


        </View>
    );
};