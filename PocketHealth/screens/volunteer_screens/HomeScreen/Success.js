import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function SuccessScreen({navigation}) {


    const handleOK = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>

        <View style={{width:'100%',alignItems:'center',marginTop:150,marginBottom:100}}>
          
            <Text style={styles.titleText}>Success! Request has been sent to a provider</Text>
        
        </View>


        <View style={{width:'100%',alignItems:'center',marginTop:100,marginBottom:150}}>
          <TouchableOpacity style={styles.button} onPress={handleOK}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
        


        </View>
    );
};