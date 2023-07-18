import React from "react";
import { Text, View, TouchableOpacity, } from "react-native";

import styles from "./styles";

export default function RegisterNewPatient_volunteer({navigation}) {   

    const handleRegisterPhone = () => {
        navigation.navigate("Register Patient With Phone")
    }; 

    const handleRegisterNoPhone = () => {
        navigation.navigate("Register Patient Without Phone")
    }; 

    return(
        <View style={styles.container}>

            <View style={{width:'100%',alignItems:'center',marginTop:150,marginBottom:100}}>
                <TouchableOpacity style={styles.button} onPress={handleRegisterPhone}>
                    <Text style={styles.buttonText}>Register with Phone Number (recommended) </Text>
                </TouchableOpacity>
            </View>

            <Text style={{fontSize: 40, fontWeight:400}}> OR </Text>

            <View style={{width:'100%',alignItems:'center',marginTop:100,marginBottom:150}}>
                <TouchableOpacity style={styles.button} onPress={handleRegisterNoPhone}>
                    <Text style={styles.buttonText}>Register without Phone Number</Text>
                </TouchableOpacity>
            </View>

       </View>
    );
};