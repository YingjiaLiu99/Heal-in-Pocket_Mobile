import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import { UserContext } from '../../../context/userContext';

export default function SettingsMainScreen({navigation}) {

    const { userId, setUserId } = useContext(UserContext);
    const handleLogout = () => {
        setUserId('');

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login Section' }],
        });        
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