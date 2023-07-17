import React from "react";
import { Text, View, TouchableOpacity, } from "react-native";

import styles from "./styles";
export default function RegisterNewPatient_volunteer({route, navigation}) {   
    const handleRegisterPhone = () => {
        navigation.navigate("Register Patient With Phone")
    }; 
    const handleRegisterNoPhone = () => {
        navigation.navigate("Register Patient Without Phone")
    }; 
    return(
        <View>
            <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:20}}>
            <TouchableOpacity style={styles.button} onPress={handleRegisterPhone}>
                <Text style={styles.buttonText}>Register with Phone Number (recommended) </Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:20}}>
            <TouchableOpacity style={styles.button} onPress={handleRegisterNoPhone}>
            <Text style={styles.buttonText}>Register without Phone Number</Text>
            </TouchableOpacity>
        </View>
       </View>
    );
};