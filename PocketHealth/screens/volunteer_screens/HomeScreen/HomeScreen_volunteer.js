import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from "react";

import styles from "./styles";

export default function HomeScreen({navigaton}) {

  const handleRegister = () => {

  };
  

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register A New Patient</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>    
  );
};