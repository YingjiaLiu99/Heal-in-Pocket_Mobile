import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles.js';


export default function SignUpScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
// The Backend code goes here
  const handleReset = () => {   
    if (!password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // Call API to create user account      
      console.log('Step to Phone Verification');
      navigation.navigate("Basic Patient Info");
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
        <Text style={styles.titleText}>Reset Password</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        label="Password*"   
        value={password}   
        onChangeText={(text) => setPassword(text)}  
        placeholder="Please Enter Password"   
        secureTextEntry={true}
      />
      <InputBoxWithLabel
        label="Confirm Password*"
        value={confirmPassword}        
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Please Enter Your Password Again"
        secureTextEntry={true}
      />

      <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>      

      </KeyboardAwareScrollView>
  );
}




