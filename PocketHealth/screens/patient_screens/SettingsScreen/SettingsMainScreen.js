import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function SettingsMainScreen({navigation}) {

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login Section' }],
        });
        // navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>

            <View style={{marginTop: 20,marginBottom:30,width:'100%',alignItems:'center'}}>
                <Text style={{fontSize:45, fontWeight:400}}>Settings</Text>          
            </View>

            <View style={{width:'100%',alignItems:'center',marginTop:150,marginBottom:100}}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
            </View>


        </View>
    );
};